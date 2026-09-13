import { ArrowDown, Braces, Database, Workflow } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button-link";

export function Hero() {
  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <p className="eyebrow">{profile.role}</p>
        <span className="hero-index">PORTFÓLIO / 01</span>
      </div>
      <p className="hero-name">Olá, sou {profile.name}.</p>
      <h1 id="hero-title">
        {profile.headline.slice(0, -profile.headlineAccent.length)}
        <span>{profile.headlineAccent}</span>
      </h1>
      <div className="hero-bottom">
        <div>
          <p className="hero-summary">{profile.summary}</p>
          {profile.availability && (
            <p className="availability">{profile.availability}</p>
          )}
          <div className="hero-actions">
            <ButtonLink href="#projetos">Ver projetos</ButtonLink>
            <ButtonLink href="#contato" secondary>
              Entrar em contato
            </ButtonLink>
          </div>
        </div>
        <a
          href="#projetos"
          className="hero-scroll"
          aria-label="Ir para os projetos em destaque"
        >
          <ArrowDown size={20} aria-hidden="true" />
        </a>
      </div>
      <ul className="specialties" aria-label="Principais especialidades">
        <li>
          <Braces size={17} aria-hidden="true" />
          React & Next.js
        </li>
        <li>
          <Workflow size={17} aria-hidden="true" />
          Back-end & APIs
        </li>
        <li>
          <Database size={17} aria-hidden="true" />
          Bancos de dados
        </li>
        <li>
          <span className="specialty-dot" />
          Software & robótica
        </li>
      </ul>
    </section>
  );
}
