import { teamPhoto } from "@/data/photos";
// Formação concluída confirmada pelo titular; sem datas acrescentadas.
export const experience = [
  {
    category: "Robótica",
    photo: teamPhoto,
    title: "Fênix Furious · Equipe de robótica",
    description:
      "Programação em Python com Pybricks para LEGO SPIKE Prime, aplicando controle PID e orientação a objetos. Participação no Torneio Brasil de Robótica, com trabalho em equipe e tomada de decisões durante as provas.",
    relatedProject: "seguidor-de-linha-pid",
    linkLabel: "Conhecer o controle PID",
  },
  {
    category: "Formação",
    title: "Desenvolvimento de Sistemas",
    description:
      "Curso técnico de Desenvolvimento de Sistemas concluído na Firjan SENAI SESI São Gonçalo. Participação em projetos de software, robótica, hackathons e olimpíadas, em atividades individuais e em equipe.",
  },
  {
    category: "Hackathon",
    title: "NASA Space Apps Challenge",
    description:
      "Participação no desenvolvimento do Aurora Quest: uma experiência educacional para aproximar crianças de informações espaciais e fenômenos solares.",
    relatedProject: "aurora-quest",
    linkLabel: "Explorar o Aurora Quest",
  },
] as const;
