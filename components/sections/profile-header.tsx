import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/constants/data";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="h-32 w-32 border-2 border-border shadow-sm">
        <AvatarImage src={DATA.profile.avatarUrl} alt={DATA.profile.name} />
        <AvatarFallback className="text-xl font-semibold">
          {DATA.profile.name.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="space-y-1.5">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {DATA.profile.name}
        </h1>
        <h2 className="text-lg text-muted-foreground font-medium">
          {DATA.profile.headline}
        </h2>
      </div>
    </div>
  );
}
