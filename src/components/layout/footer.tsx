import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { site } from "@/lib/config";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="footer-name">
            {profile.name}
          </Link>
          <p>{profile.role}</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <Link href="/projetos">Projetos</Link>
          <Link href="/#contato">Contato</Link>
          {site.github && (
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          )}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.shortName}
        </span>
        <span>Clareza na interface. Intenção no código.</span>
      </div>
    </footer>
  );
}
