const steps = [
  {
    title: "Entender",
    description:
      "O problema, os requisitos e as restrições vêm antes da tecnologia.",
  },
  {
    title: "Modelar",
    description:
      "Organizar dados, fluxos e arquitetura para reduzir complexidade.",
  },
  {
    title: "Construir",
    description:
      "Implementar de forma iterativa, com código legível e testável.",
  },
  {
    title: "Evoluir",
    description:
      "Testar, corrigir e refinar a solução com base no aprendizado.",
  },
];
export function Process() {
  return (
    <section
      className="process-section container"
      aria-labelledby="process-title"
    >
      <div className="process-title">
        <p className="eyebrow">Processo de desenvolvimento</p>
        <h2 id="process-title">Do problema à solução.</h2>
      </div>
      <ol className="process-grid">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="process-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
