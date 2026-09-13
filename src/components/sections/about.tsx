import { CodeXml, CircuitBoard, Layers } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";
import { personalPhoto } from "@/data/photos";
import { PhotoFigure } from "@/components/ui/photo";
export function About() {
  return (
    <section
      id="sobre"
      className="section section-surface"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow="02 / Sobre & competências"
              title="Curiosidade, prática e engenharia."
            />
            <PhotoFigure photo={personalPhoto} className="about-photo" sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 480px, 450px" />
          </div>
          <div className="about-copy">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul className="about-points">
              <li>
                <CodeXml size={17} aria-hidden="true" />
                Desenvolvimento de Sistemas
              </li>
              <li>
                <CircuitBoard size={17} aria-hidden="true" />
                Programação e robótica
              </li>
              <li>
                <Layers size={17} aria-hidden="true" />
                Do problema à aplicação
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-heading">
          <h3>Tecnologias que uso para construir</h3>
          <p>Níveis de domínio por tecnologia.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <p className="skill-caption">{group.caption}</p>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                    {skill.note && <span className="skill-note">{skill.note}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
