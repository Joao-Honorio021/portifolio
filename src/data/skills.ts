export type SkillLevel = "Básico" | "Intermediário" | "Avançado";

export interface Skill {
  name: string;
  level: SkillLevel;
  note?: string;
}

interface SkillGroup {
  title: string;
  caption: string;
  items: readonly Skill[];
}

// Níveis informados pelo titular, incluindo as competências anteriormente sem nível.
export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Front-end",
    caption: "Interfaces e experiência",
    items: [
      { name: "React", level: "Intermediário" },
      { name: "Next.js", level: "Intermediário" },
      { name: "JavaScript", level: "Avançado" },
      { name: "TypeScript", level: "Avançado" },
      { name: "Interfaces responsivas", level: "Intermediário" },
    ],
  },
  {
    title: "Back-end",
    caption: "Lógica e integrações",
    items: [
      { name: "Python", level: "Avançado" },
      { name: "Node.js", level: "Avançado" },
      { name: "Java", level: "Intermediário" },
      { name: "C#", level: "Intermediário" },
      { name: "FastAPI", level: "Intermediário" },
      { name: "APIs REST", level: "Intermediário" },
    ],
  },
  {
    title: "Banco de dados",
    caption: "Dados bem organizados",
    items: [
      { name: "SQL", level: "Avançado" },
      { name: "PostgreSQL", level: "Intermediário" },
      { name: "MySQL", level: "Avançado" },
      { name: "SQLite", level: "Intermediário" },
    ],
  },
  {
    title: "Ferramentas e práticas",
    caption: "Do problema à entrega",
    items: [
      { name: "Git", level: "Avançado" },
      { name: "GitHub", level: "Avançado" },
      { name: "Modelagem de dados", level: "Intermediário" },
      { name: "Controle PID", level: "Intermediário" },
      { name: "Docker", level: "Básico" },
      { name: "Linux", level: "Básico" },
      { name: "Padrões de projeto (Design Patterns)", level: "Intermediário", note: "Em aperfeiçoamento" },
    ],
  },
];
