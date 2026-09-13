import Link from "next/link";
import { CodeXml, GitBranch, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { site } from "@/lib/config";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${profile.name} — página inicial`}
        >
          <span className="brand-mark">
            <CodeXml size={19} aria-hidden="true" />
          </span>
          <span>
            {profile.shortName}
            <span className="brand-suffix">.dev</span>
          </span>
        </Link>
        <Navigation />
        <div className="header-actions">
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub de João Victor (abre em nova aba)"
            >
              <GitBranch size={19} aria-hidden="true" />
            </a>
          )}
          <Link href="/#contato" className="header-contact">
            Vamos conversar
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
