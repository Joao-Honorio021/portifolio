"use client";
import Link from "next/link";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container error-page">
      <p className="eyebrow">Não foi possível carregar a página</p>
      <h1>
        Algo interrompeu
        <br />
        este caminho.
      </h1>
      <p>Tente carregar novamente ou retorne à página inicial.</p>
      <div className="hero-actions">
        <button type="button" className="button button-primary" onClick={reset}>
          Tentar novamente
        </button>
        <Link href="/" className="button button-secondary">
          Página inicial
        </Link>
      </div>
    </section>
  );
}
