import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from "@/constants/data";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="h-full overflow-hidden transition-all hover:border-primary/50 hover:shadow-md bg-background/40 backdrop-blur-sm pt-0">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-300x200.webp";
            }}
          />
        </div>
        <CardHeader className="p-5">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 mt-2 text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="p-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-2 py-0.5 text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
}
