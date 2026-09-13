import { fixedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
export function FeaturedProjects() {
  if (fixedProjects.length === 0) return null;

  return (
    <section
      id="projetos"
      className="section container"
      aria-labelledby="featured-title"
    >
      <div className="section-row">
        <div>
          <SectionHeading
            id="featured-title"
            eyebrow="01 / Projetos selecionados"
            title="Código aplicado a problemas reais."
          >
            Da operação de um delivery à educação espacial e ao controle de um
            robô. Conheça o contexto por trás de cada solução.
          </SectionHeading>
        </div>
        <span className="section-counter">
          {String(fixedProjects.length).padStart(2, "0")} PROJETOS
        </span>
      </div>
      <div className="project-grid">
        {fixedProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
      <div className="section-end">
        <p>Explore os projetos e suas decisões técnicas.</p>
        <ButtonLink href="/projetos" secondary>
          Ver todos os projetos
        </ButtonLink>
      </div>
    </section>
  );
}
