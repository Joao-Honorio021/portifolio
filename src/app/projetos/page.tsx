import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Contact } from "@/components/sections/contact";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Projetos",
  "Explore Zap Menu, Aurora Quest e Seguidor de Linha com PID: problemas, soluções, tecnologias e estudos de caso de João Victor.",
  "/projetos",
);
export default function ProjectsPage() {
  return (
    <>
      <div className="container page-section">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          Página inicial
        </Link>
        <div className="page-heading">
          <p className="eyebrow">Portfólio / Projetos</p>
          <h1>
            Ideias que ganham
            <br />
            <span>forma em código.</span>
          </h1>
          <p>
            Conheça o problema, a solução e as decisões por trás de cada
            projeto. Aplicações web, educação e robótica, reunidas em um só
            lugar.
          </p>
        </div>
        <div className="collection-heading">
          <h2>
            Todos os projetos{" "}
            <span>({String(projects.length).padStart(2, "0")})</span>
          </h2>
          <p>Contexto, implementação e aprendizado</p>
        </div>
        <div className="project-grid all-projects">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              detailed
              key={project.slug}
            />
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}
