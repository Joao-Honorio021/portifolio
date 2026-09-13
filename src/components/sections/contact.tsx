import { ArrowUpRight, GitBranch, SquareUserRound, Mail } from "lucide-react";
import { site } from "@/lib/config";
import { profile } from "@/data/profile";

export function Contact() {
  const channels = [
    {
      title: "E-mail",
      value: site.email,
      href: "mailto:hjoaovictorlina@gmail.com",
      icon: Mail,
      external: false,
    },
    {
      title: "LinkedIn",
      value: "Perfil profissional",
      href: "https://www.linkedin.com/in/joaovictorlimahonorio/",
      icon: SquareUserRound,
      external: true,
    },
    {
      title: "GitHub",
      value: "Código e projetos",
      href: "https://github.com/Joao-Honorio021",
      icon: GitBranch,
      external: true,
    },
  ];
  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <p className="eyebrow">04 / Vamos conversar</p>
        <h2 id="contact-title">
          Tem um desafio em mente?
          <br />
          <span>Vamos construir uma solução.</span>
        </h2>
        <p className="contact-intro">
          {profile.availability ??
            "Para conversar sobre projetos e oportunidades, utilize os canais profissionais abaixo."}
        </p>
       
          <a
            href={`mailto:hjoaovictorlina@gmail.com`}
            className="button button-primary contact-cta"
          >
            Enviar um e-mail
            <Mail size={17} aria-hidden="true" />
          </a>

         
       
        <div className="contact-channels">
          {channels.map(({ title, value, href, icon: Icon, external }) =>
            href ? (
              <a
                className="contact-channel"
                key={title}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  <span>{value}</span>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
                {external && (
                  <span className="sr-only"> (abre em nova aba)</span>
                )}
              </a>
            ) : (
              <div className="contact-channel is-pending" key={title}>
                <Icon size={20} aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  <span>Em breve · canal não configurado</span>
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
