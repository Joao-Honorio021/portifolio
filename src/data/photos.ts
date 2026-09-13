export interface Photo {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export const personalPhoto: Photo = {
  src: "/img/foto_minha.jpg",
  width: 796,
  height: 531,
  alt: "João Victor sorrindo, com edifícios e uma praia ao fundo.",
};

export const teamPhoto: Photo = {
  src: "/img/foto_com_toda_equipe_fenixfurious.jpg",
  width: 4032,
  height: 3024,
  alt: "Grupo reunido para uma selfie, com camisetas de equipe e um painel colorido ao fundo.",
  caption: "Registro da participação na equipe de robótica.",
};

export const robotPhoto: Photo = {
  src: "/img/foto_Do_robo.jpg",
  width: 720,
  height: 1280,
  alt: "Robô montado com peças verdes e pretas, rodas, engrenagens e cabos sobre uma base do Torneio Brasil de Robótica.",
  caption: "Registro do robô no contexto da equipe de robótica.",
};
