import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonas Max | Desenvolvedor de Software",
  description:
    "Portfólio de Jonas Max — Desenvolvedor de Software. Projetos, links e equipamentos.",
  openGraph: {
    title: "Jonas Max | Desenvolvedor de Software",
    description:
      "Portfólio de Jonas Max — Desenvolvedor de Software. Projetos, links e equipamentos.",
    images: [
      {
        url: "http://jonasmax.me/jonas-profile.webp",
        width: 1200,
        height: 1200,
        alt: "Jonas Max",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonas Max | Desenvolvedor de Software",
    description:
      "Portfólio de Jonas Max — Desenvolvedor de Software. Projetos, links e equipamentos.",
    images: ["http://jonasmax.me/jonas-profile.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistMono.className} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
