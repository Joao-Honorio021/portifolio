import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Desenvolvedor Full-Stack",
  "João Victor Lima Honorio. Projetos em desenvolvimento web, APIs, dados e robótica, com estudos de caso sobre problema, solução e decisões técnicas.",
  "/",
);
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Experience />
      <Process />
      <Contact />
    </>
  );
}
