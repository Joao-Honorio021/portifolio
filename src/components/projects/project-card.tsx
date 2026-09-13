import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ButtonLink } from "@/components/ui/button-link";

export function ProjectCard({
  project,
  index,
  detailed = false,
}: {
  project: Project;
  index: number;
  detailed?: boolean;
}) {
  return (
    <article
      className={`project-card ${detailed ? "project-card-detailed" : ""}`}
    >
      <div className="project-visual">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <span className="visual-caption">{project.imageLabel}</span>
      </div>
      <div className="project-body">
        <div className="project-category">
          <span>{project.category}</span>
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3>
          <Link href={`/projetos/${project.slug}`}>
            {project.title}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </h3>
        <p className="project-description">{project.shortDescription}</p>
        <ul className="tags" aria-label={`Tecnologias de ${project.title}`}>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <ButtonLink
            href={`/projetos/${project.slug}`}
            secondary={!detailed}
            label={`Ver projeto ${project.title}`}
          >
            Ver projeto
          </ButtonLink>
          {project.repositoryUrl ? (
              <ButtonLink
                href={project.repositoryUrl}
                external
                secondary
                label={`Ver repositório de ${project.title} (abre em nova aba)`}
              >
                Ver repositório
              </ButtonLink>
            ) : (
              <span className="unavailable">Repositório · Em breve</span>
            )}
        </div>
      </div>
    </article>
  );
}
