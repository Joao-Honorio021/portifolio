import type { Photo } from "@/data/photos";

export interface Project {
  photos?: readonly Photo[];
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  problem: string;
  solution: string;
  responsibility: string;
  responsibilityConfirmed: boolean;
  highlights: string[];
  technologies: string[];
  image: string;
  imageLabel: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  imageCaption: string;
  status: "Concluído" | "Em desenvolvimento" | "A confirmar";
  fixed: boolean;
  projectUrl?: string;
  repositoryUrl?: string;
  context: string;
  technicalDecisions: { title: string; description: string }[];
  challenges: string[];
  results: string[];
  gallery: (Photo & { caption: string })[];
}
