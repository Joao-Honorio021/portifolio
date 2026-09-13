import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhotoFigure } from "@/components/ui/photo";
export function Experience() {
  return (
    <section id="experiencia" className="section container">
      <SectionHeading
        eyebrow="03 / Trajetória"
        title="Experiência construída na prática."
      >
        Formação, trabalho em equipe e desafios que conectam software ao mundo
        real.
      </SectionHeading>
      <div className="experience-list">
        {experience.map((entry) => (
          <article key={entry.title} className="experience-row">
            <p className="eyebrow">{entry.category}</p>
            <div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              {"relatedProject" in entry && (
                <Link
                  className="text-link"
                  href={`/projetos/${entry.relatedProject}`}
                >
                  {entry.linkLabel}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              )}
              {"photo" in entry && <PhotoFigure photo={entry.photo} className="experience-photo" sizes="(max-width: 767px) calc(100vw - 40px), 640px" />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
