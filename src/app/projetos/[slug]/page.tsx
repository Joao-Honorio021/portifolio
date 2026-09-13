import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/metadata";
import { PhotoFigure } from "@/components/ui/photo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project)
    return { title: "Projeto não encontrado", robots: { index: false } };
  return pageMetadata(
    project.title,
    project.shortDescription,
    `/projetos/${project.slug}`,
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  return (
    <div className="container case-page">
      <Link href="/projetos" className="back-link">
        <ArrowLeft size={16} aria-hidden="true" />
        Todos os projetos
      </Link>
      <header className="case-header">
        <p className="eyebrow">Estudo de caso / {project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-lead">{project.shortDescription}</p>
        <ul className="tags" aria-label="Tecnologias utilizadas">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="case-links">
          {project.projectUrl ? (
            <ButtonLink href={project.projectUrl} external>
              Acessar projeto
            </ButtonLink>
          ) : (
            <span className="unavailable">Demonstração pública · Em breve</span>
          )}
          {project.repositoryUrl ? (
            <ButtonLink href={project.repositoryUrl} external secondary>
              Ver repositório
            </ButtonLink>
          ) : (
            <span className="unavailable">Repositório · Em breve</span>
          )}
        </div>
      </header>
      <figure className="case-cover">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(max-width: 767px) 100vw, 1200px"
          preload
        />
        <figcaption>{project.imageCaption}</figcaption>
      </figure>
      <div className="case-layout">
        <aside className="case-sidebar">
          <nav aria-label="Neste estudo de caso">
            <p className="eyebrow">Neste projeto</p>
            <a href="#visao-geral">Visão geral</a>
            <a href="#problema">Problema e solução</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#decisoes">Decisões técnicas</a>
            <a href="#desafios">Desafios</a>
            <a href="#resultados">Resultados e aprendizados</a>
            <a href="#galeria">Galeria</a>
          </nav>
          <div className="case-status">
            <span>Status do projeto</span>
            <strong>{project.status}</strong>
          </div>
        </aside>
        <div className="case-content">
          <section id="visao-geral">
            <p className="eyebrow">01 / Visão geral</p>
            <h2>O contexto do projeto</h2>
            {project.fullDescription.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>{project.context}</p>
            <div className="responsibility">
              <h3>Minha participação</h3>
              <p>{project.responsibility}</p>
              {!project.responsibilityConfirmed && (
                <span className="editorial-note">
                  Detalhamento individual pendente de confirmação.
                </span>
              )}
            </div>
          </section>
          <section id="problema">
            <p className="eyebrow">02 / Problema & solução</p>
            <h2>O que precisava ser resolvido</h2>
            <p>{project.problem}</p>
            <div className="solution-block">
              <h3>A solução construída</h3>
              <p>{project.solution}</p>
            </div>
          </section>
          <section id="funcionalidades">
            <p className="eyebrow">03 / Funcionalidades</p>
            <h2>O que a solução faz</h2>
            <ul className="case-features">
              {project.highlights.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section id="decisoes">
            <p className="eyebrow">04 / Engenharia</p>
            <h2>Decisões técnicas</h2>
            <div className="decision-list">
              {project.technicalDecisions.map((decision, index) => (
                <article key={decision.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{decision.title}</h3>
                    <p>{decision.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="stack-title">Tecnologias utilizadas</h3>
            <ul className="tags case-tags">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>
          <section id="desafios">
            <p className="eyebrow">05 / Complexidade</p>
            <h2>Os desafios envolvidos</h2>
            <ul className="case-bullets">
              {project.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="resultados">
            <p className="eyebrow">06 / Resultados & aprendizado</p>
            <h2>O valor da experiência</h2>
            <ul className="case-bullets">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section id="galeria">
            {project.photos && (
              <div className="photographic-records">
                <p className="eyebrow">Registros fotográficos / Robótica</p>
                <h2>A experiência em imagens</h2>
                <p>Registros da trajetória na equipe de robótica que contextualizam este estudo de caso.</p>
                <div className="photo-gallery">
                  {project.photos.map((photo) => <PhotoFigure key={photo.src} photo={photo} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1024px) 320px, 400px" />)}
                </div>
              </div>
            )}
            <p className="eyebrow">07 / Visão do sistema</p>
            <h2>O funcionamento em perspectiva</h2>
            {project.gallery.map((item) => (
              <figure className="case-gallery" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 767px) 100vw, 800px"
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </section>
        </div>
      </div>
      <section className="related-projects">
        <p className="eyebrow">Continue explorando</p>
        <h2>Outros problemas. Outras soluções.</h2>
        <div>
          {related.map((item) => (
            <Link href={`/projetos/${item.slug}`} key={item.slug}>
              <span>
                <span className="related-category">{item.category}</span>
                <strong>{item.title}</strong>
              </span>
              <ArrowUpRight size={24} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <div className="case-contact">
        <p>Quer conversar sobre uma solução?</p>
        <ButtonLink href="/#contato">Entrar em contato</ButtonLink>
      </div>
    </div>
  );
}
