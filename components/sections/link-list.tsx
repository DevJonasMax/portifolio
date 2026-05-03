import { Button } from "@/components/ui/button";
import { DATA } from "@/constants/data";
import { Mail as MailIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { FadeInUp } from "@/components/shared/fade-in-up";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="size-6" data-icon="inline-start" />,
  linkedin: <LinkedinIcon className="size-6" data-icon="inline-start" />,
  instagram: <InstagramIcon className="size-6" data-icon="inline-start" />,
  mail: <MailIcon className="size-5" data-icon="inline-start" />,
};

export function LinkList() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      {DATA.links.map((link, index) => (
        <FadeInUp key={link.id} delay={0.1 + index * 0.1}>
          <Button
            variant="outline"
            className="w-full h-12 text-base font-medium shadow-sm transition-all hover:scale-[1.02] hover:shadow-md bg-background/50 backdrop-blur-sm"
            nativeButton={false}
            render={
              <a href={link.url} target="_blank" rel="noopener noreferrer" />
            }
          >
            {iconMap[link.icon]}
            {link.title}
          </Button>
        </FadeInUp>
      ))}
    </div>
  );
}
