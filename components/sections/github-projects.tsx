"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "./project-card";
import { FadeInUp } from "@/components/shared/fade-in-up";
import type { ProjectItem } from "@/constants/data";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
}

const GITHUB_USERNAME = "DevJonasMax";
const CACHE_KEY = `gh_repos_${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 1 day

interface RepoCache {
  timestamp: number;
  repos: GitHubRepo[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "2d79c7",
  JavaScript: "f7df1e",
  Python: "3572A5",
  "C#": "178600",
  Java: "b07219",
  Go: "00ADD8",
  Rust: "dea584",
  Kotlin: "A97BFF",
  Swift: "F05138",
  Dart: "00B4AB",
  HTML: "e34c26",
  CSS: "563d7c",
  Shell: "89e051",
  Ruby: "701516",
  PHP: "4F5D95",
  "C++": "f34b7d",
  C: "555555",
  Vue: "41b883",
  default: "4c4f69",
};

function getLanguageColor(language: string | null): string {
  if (!language) return LANGUAGE_COLORS.default;
  return LANGUAGE_COLORS[language] ?? LANGUAGE_COLORS.default;
}

function repoToProjectItem(repo: GitHubRepo): ProjectItem {
  const tags: string[] = [
    ...(repo.language ? [repo.language] : []),
    ...repo.topics.slice(0, 3),
  ].slice(0, 4);

  return {
    id: String(repo.id),
    title: repo.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    description: repo.description ?? "Sem descrição disponível.",
    url: repo.html_url,
    image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
    tags,
  };
}

type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; projects: ProjectItem[] };

export function GitHubProjects() {
  const [state, setState] = useState<FetchState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        let repos: GitHubRepo[];

        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed: RepoCache = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
            repos = parsed.repos;
          } else {
            sessionStorage.removeItem(CACHE_KEY);
            repos = await fetchFromGitHub();
          }
        } else {
          repos = await fetchFromGitHub();
        }

        if (!cancelled) {
          const filtered = repos
            .filter((repo) => !repo.fork)
            .filter((repo) => repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
            .sort((a, b) => b.stargazers_count - a.stargazers_count);

          setState({
            status: "success",
            projects: filtered.map(repoToProjectItem),
          });
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            status: "error",
            message: err instanceof Error ? err.message : "Erro desconhecido",
          });
        }
      }
    }

    async function fetchFromGitHub(): Promise<GitHubRepo[]> {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=owner`,
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos: GitHubRepo[] = await response.json();
      const cache: RepoCache = { timestamp: Date.now(), repos };
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      return repos;
    }

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-xl bg-muted/40 animate-pulse border border-border/30"
          />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-sm">Não foi possível carregar os repositórios.</p>
        <p className="text-xs mt-1 opacity-60">{state.message}</p>
      </div>
    );
  }

  if (state.status === "success" && state.projects.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground text-sm">
        Nenhum repositório público encontrado.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {state.status === "success" &&
        state.projects.map((project, index) => (
          <FadeInUp key={project.id} delay={0.05 + index * 0.07} className="h-full">
            <ProjectCard project={project} />
          </FadeInUp>
        ))}
    </div>
  );
}
