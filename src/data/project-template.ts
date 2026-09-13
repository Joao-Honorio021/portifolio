import type { Project } from "@/types/project";

// Modelo de edição: não é importado pelo catálogo nem publicado automaticamente.
// Copie o objeto para projects.ts e substitua o conteúdo antes de publicar.
export const projectTemplate = {
  slug: "nome-do-projeto",
  title: "Nome do projeto",
  category: "Categoria",
  shortDescription: "Descreva a proposta de valor em uma frase.",
  fullDescription: "Descreva o funcionamento e o escopo confirmado.",
  problem: "Qual problema motivou o projeto?",
  solution: "Como a implementação responde ao problema?",
  responsibility: "Detalhamento individual pendente de confirmação.",
  responsibilityConfirmed: false,
  highlights: [],
  technologies: [],
  image: "/projects/nome-do-projeto.png",
  imageLabel: "Captura de interface",
  imageWidth: 1200, // Substitua pela largura real do arquivo.
  imageHeight: 750, // Substitua pela altura real do arquivo.
  imageAlt: "Descreva objetivamente o conteúdo visível.",
  imageCaption: "Informe somente o contexto confirmado da imagem.",
  status: "A confirmar",
  fixed: false, // true: aparece também na página principal.
  // projectUrl: "https://...", // Inclua somente a URL real.
  // repositoryUrl: "https://github.com/...",
  context: "Descreva o contexto confirmado do desenvolvimento.",
  technicalDecisions: [], // { title: "...", description: "..." }
  challenges: [],
  results: [], // Não publique métricas sem evidências.
  gallery: [], // { src, width, height, alt, caption }
  photos: [], // Importe registros tipados de photos.ts, se houver fotografias.
} satisfies Project;
