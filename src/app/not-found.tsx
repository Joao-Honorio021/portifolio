import { ButtonLink } from "@/components/ui/button-link";
export default function NotFound() {
  return (
    <section className="container error-page">
      <p className="eyebrow">404 / Página não encontrada</p>
      <h1>
        Este caminho ainda
        <br />
        não leva a um projeto.
      </h1>
      <p>
        O endereço pode ter mudado. Explore os projetos disponíveis ou volte à
        página inicial.
      </p>
      <div className="hero-actions">
        <ButtonLink href="/projetos">Ver projetos</ButtonLink>
        <ButtonLink href="/" secondary>
          Página inicial
        </ButtonLink>
      </div>
    </section>
  );
}
