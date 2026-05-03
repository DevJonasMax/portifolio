export type Profile = {
  name: string;
  headline: string;
  avatarUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
};

export type SetupItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
};

export interface Data {
  profile: Profile;
  links: LinkItem[];
  projects: ProjectItem[];
  setup: SetupItem[];
}

export const DATA: Data = {
  profile: {
    name: "Jonas Max",
    headline: "Software Engineer ✦ Full-Stack Developer ✦ Gen AI Enthusiast",
    avatarUrl: "/jonas-profile.webp",
  },
  links: [
    {
      id: "github",
      title: "GitHub",
      url: "https://github.com/DevJonasMax",
      icon: "github",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://linkedin.com/in/jonas-max-souza/",
      icon: "linkedin",
    },
    {
      id: "instagram",
      title: "Instagram",
      url: "https://www.instagram.com/jonas_maxx",
      icon: "instagram",
    },
    {
      id: "email",
      title: "Email",
      url: "mailto:jonas.max.dev@gmail.com",
      icon: "mail",
    },
  ],
  projects: [],
  setup: [
    {
      id: "setup1",
      title: "Acer Nitro V15",
      description: "Intel i5-13420H, 16GB RAM, 2TB SSD, RTX 3050 6GB",
      category: "Computador",
      image: "/setup/notebook.webp",
    },
    {
      id: "setup2",
      title: 'Monitor Concord 27\"',
      description:
        'Monitor Concórdia Gamer Curvo 27" CZ270F, 100Hz, LED FULL HD, HDMI',
      category: "Periféricos",
      image: "/setup/monitor.webp",
    },
    {
      id: "setup3",
      title: "Teclado Redragon Pollux Lunar White",
      description: "Teclado mecânico gamer, switch blue, K628-RGB-W",
      category: "Periféricos",
      image: "/setup/teclado.webp",
    },
    {
      id: "setup4",
      title: "Mouse Gamer Redragon Cobra",
      description: "Mouse gamer com fio, 12400 DPI, 8 Botões, Preto - M711",
      category: "Periféricos",
      image: "/setup/mouse.webp",
    },
  ],
};
