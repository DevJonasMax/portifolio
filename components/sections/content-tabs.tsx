import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DATA } from "@/constants/data";
import { ProjectCard } from "./project-card";
import { SetupList } from "./setup-list";
import { FadeInUp } from "@/components/shared/fade-in-up";
import { GitHubProjects } from "./github-projects";

export function ContentTabs() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8 bg-background/50 backdrop-blur-sm">
          <TabsTrigger className="cursor-pointer" value="projects">
            Projetos
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="setup">
            Setup
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="projects"
          className="focus-visible:outline-none focus-visible:ring-0 mt-0"
        >
          {DATA.projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {DATA.projects.map((project, index) => (
                <FadeInUp
                  key={project.id}
                  delay={0.1 + index * 0.1}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </FadeInUp>
              ))}
            </div>
          ) : (
            <GitHubProjects />
          )}
        </TabsContent>

        <TabsContent
          value="setup"
          className="focus-visible:outline-none focus-visible:ring-0 mt-0"
        >
          <div className="max-w-xl mx-auto">
            <SetupList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
