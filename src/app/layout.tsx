import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/config";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});
export const metadata: Metadata = {
  // Origem local explícita para pré-visualização; canonical e sitemap só usam a URL real configurada.
  metadataBase: new URL(site.url ?? "http://localhost:3000"),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.summary,
  applicationName: "Portfólio de João Victor",
  robots: { index: Boolean(site.url), follow: Boolean(site.url) },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: profile.name,
        jobTitle: profile.role,
        description: profile.summary,
        ...(site.url ? { url: site.url } : {}),
        ...([site.github, site.linkedin].some(Boolean)
          ? { sameAs: [site.github, site.linkedin].filter(Boolean) }
          : {}),
      },
      ...(site.url
        ? [
            {
              "@type": "WebSite",
              name: `Portfólio de ${profile.name}`,
              url: site.url,
              inLanguage: "pt-BR",
            },
          ]
        : []),
    ],
  };
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
