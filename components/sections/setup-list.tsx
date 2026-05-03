import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { DATA } from "@/constants/data";
import { FadeInUp } from "@/components/shared/fade-in-up";

export function SetupList() {
  return (
    <div className="flex flex-col gap-4">
      {DATA.setup.map((item, index) => (
        <FadeInUp key={item.id} delay={0.1 + index * 0.1}>
          <Card className="bg-background/40 backdrop-blur-sm hover:bg-muted/50 transition-colors border-border/50 flex flex-row items-center gap-2 p-2">
            <div className="relative h-full w-32 overflow-hidden bg-muted rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardHeader className="w-full p-4 sm:p-5 flex flex-row items-start justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-base sm:text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </div>
              <div className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md whitespace-nowrap">
                {item.category}
              </div>
            </CardHeader>
          </Card>
        </FadeInUp>
      ))}
    </div>
  );
}
