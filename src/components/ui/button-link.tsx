import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
  className?: string;
  label?: string;
};
export function ButtonLink({
  href,
  children,
  secondary = false,
  external = false,
  className = "",
  label,
}: Props) {
  const styles = `button ${secondary ? "button-secondary" : "button-primary"} ${className}`;
  if (external)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={styles}
      >
        {children}
        <ArrowUpRight size={17} aria-hidden="true" />
        <span className="sr-only"> (abre em nova aba)</span>
      </a>
    );
  return (
    <Link href={href} className={styles} aria-label={label}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
