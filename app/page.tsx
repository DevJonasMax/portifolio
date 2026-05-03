import { ProfileHeader } from "@/components/sections/profile-header";
import { LinkList } from "@/components/sections/link-list";
import { ContentTabs } from "@/components/sections/content-tabs";
import { FadeInUp } from "@/components/shared/fade-in-up";
import { Silk } from "@/components/shared/silk";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      <div className="w-full h-screen fixed z-0">
        <Silk
          speed={10}
          scale={0.5}
          color="#3d5acc"
          noiseIntensity={0.7}
          rotation={8}
        />
      </div>
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center gap-10">
          <FadeInUp delay={0.1}>
            <ProfileHeader />
          </FadeInUp>

          <div className="w-full">
            <LinkList />
          </div>

          <FadeInUp delay={0.3} className="w-full">
            <ContentTabs />
          </FadeInUp>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t border-border/50 bg-background/50 backdrop-blur-md">
        <p>
          © {new Date().getFullYear()} Jonas Max. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
