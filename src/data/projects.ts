import type { Project } from "@/types/project";
import { robotPhoto, teamPhoto } from "@/data/photos";

// Conteúdo e tecnologias confirmados pelo titular no briefing editorial.
// Integração NASA conferida em src/app/api/solar-story/route.js do repositório Aurora Quest.
// Status e atribuições pendentes não são inferidos de links ou funcionalidades.
export const projects: readonly Project[] = [
  {
    "slug": "zapmenu",
    "projectUrl": "https://zap-menu.netlify.app/",
    "title": "ZapMenu",
    "category": "Aplicação web",
    "shortDescription": "Sistema de delivery que automatiza pedidos e integra o processo de compra diretamente ao WhatsApp do estabelecimento.",
    "fullDescription": "O ZapMenu é um sistema de delivery desenvolvido para simplificar o processo de pedidos de pequenos estabelecimentos.\n\nO cliente monta seu pedido diretamente pelo site, informa endereço, forma de pagamento e necessidade de troco. O sistema calcula automaticamente os valores e o frete e gera uma mensagem organizada e formatada com todas as informações do pedido, pronta para ser enviada ao restaurante pelo WhatsApp.\n\nUm dos principais diferenciais é a facilidade de gerenciamento. Produtos, preços e outras informações podem ser atualizados pelo próprio estabelecimento através de uma planilha, sem necessidade de modificar o código do site.",
    "problem": "Pedidos recebidos por mensagem podem chegar incompletos e exigir conferência manual de itens, entrega e pagamento.",
    "solution": "O cliente monta o pedido no site, com cálculo de valores, frete e troco. O sistema reúne as informações em uma mensagem pronta para envio pelo WhatsApp.",
    "responsibility": "Desenvolvimento do sistema descrito. O detalhamento da contribuição individual será publicado após confirmação.",
    "responsibilityConfirmed": false,
    "highlights": [
      "Carrinho de compras",
      "Cálculo automático de valores e frete",
      "Cálculo de troco",
      "Seleção da forma de pagamento",
      "Pedido formatado para WhatsApp",
      "Gerenciamento do catálogo por planilha"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "image": "/projects/zapmenu.png",
    "imageLabel": "Captura de interface",
    "imageWidth": 1919,
    "imageHeight": 1079,
    "imageAlt": "Interface do Zap Menu com catálogo de lanches e carrinho aberto, campos de entrega e botão de envio pelo WhatsApp.",
    "imageCaption": "Captura de interface · catálogo e carrinho do Zap Menu",
    "status": "Concluído",
    "fixed": true,
    "context": "Criado para pequenos estabelecimentos que recebem pedidos pelo WhatsApp e precisam atualizar o cardápio sem depender de alterações no código.",
    "technicalDecisions": [
      {
        "title": "Catálogo gerenciado por planilha",
        "description": "Produtos e preços ficam separados da interface. O estabelecimento pode atualizar essas informações pela planilha, sem modificar o código do site."
      },
      {
        "title": "Cálculos durante a montagem do pedido",
        "description": "O sistema calcula valores, frete e troco antes de gerar a mensagem, reunindo as informações de compra e entrega no mesmo fluxo."
      },
      {
        "title": "Envio pelo WhatsApp",
        "description": "A mensagem formatada inclui os itens e os dados informados pelo cliente. A seleção da forma de pagamento registra a preferência no pedido; não equivale ao processamento de uma transação."
      }
    ],
    "challenges": [
      "Manter o catálogo consistente com os dados da planilha.",
      "Reunir produtos, entrega, pagamento e troco em uma mensagem clara para o estabelecimento."
    ],
    "results": [
      "Pedido organizado com itens, valores e informações de entrega e pagamento.",
      "Atualização do catálogo pelo estabelecimento, sem modificar o código."
    ],
    "gallery": [
      {
        "src": "/projects/zapmenu.png",
        "width": 1919,
        "height": 1079,
        "alt": "Catálogo de lanches com carrinho aberto e formulário de pedido.",
        "caption": "Captura de interface: catálogo, carrinho e formulário de pedido."
      }
    ]
  },
  {
    "slug": "aurora-quest",
    "projectUrl": "https://auroracast22.netlify.app/",
    "repositoryUrl": "https://github.com/Joao-Honorio021/hackthon-nasa",
    "title": "Aurora Quest",
    "category": "Educação e ciência",
    "shortDescription": "Plataforma educacional infantil que transforma dados sobre atividade solar em uma experiência acessível e interativa.",
    "fullDescription": "Aurora Quest é uma plataforma educacional infantil criada para tornar o aprendizado sobre tempestades solares mais acessível, visual e interativo.\n\nA aplicação consulta a API DONKI da NASA para apresentar o evento de tempestade geomagnética mais recente retornado na janela dos últimos 30 dias e explicar conceitos relacionados ao tema de maneira adequada ao público infantil.\n\nO projeto também possui recursos de acessibilidade, incluindo diferentes temas de cores desenvolvidos para melhorar a experiência de usuários com daltonismo.",
    "problem": "Informações sobre atividade solar costumam usar linguagem técnica, o que dificulta a compreensão pelo público infantil.",
    "solution": "A plataforma combina dados da NASA, conteúdo educativo e temas de cores para tornar a exploração das tempestades solares mais visual e compreensível.",
    "responsibility": "Participação no desenvolvimento da plataforma. A divisão de responsabilidades da equipe ainda precisa ser detalhada.",
    "responsibilityConfirmed": false,
    "highlights": [
      "Dados sobre atividade solar",
      "Consulta à API DONKI da NASA",
      "Conteúdo educacional em vídeo",
      "Experiência voltada para crianças",
      "Temas de cores para usuários com daltonismo"
    ],
    "technologies": [
      "Next.js",
      "React",
      "API DONKI da NASA"
    ],
    "image": "/projects/auroraquest.png",
    "imageLabel": "Captura de interface",
    "imageWidth": 1915,
    "imageHeight": 1079,
    "imageAlt": "Interface do Aurora Quest com menu lateral, título Storm Solar e botão para assistir a vídeos.",
    "imageCaption": "Captura de interface · página inicial do Aurora Quest",
    "status": "A confirmar",
    "fixed": true,
    "context": "Criado no contexto do NASA Space Apps Challenge, o projeto aproxima educação e tecnologia para apresentar informações espaciais a um público infantil.",
    "technicalDecisions": [
      {
        "title": "Next.js e React",
        "description": "A interface reúne navegação, conteúdo educativo e consulta a dados solares em componentes React, com uma rota de servidor no Next.js para acessar a API."
      },
      {
        "title": "Integração com a NASA",
        "description": "A rota consulta o endpoint DONKI/GST para os últimos 30 dias e retorna o evento mais recente da resposta. O acesso ocorre no servidor, com revalidação dos dados a cada hora."
      },
      {
        "title": "Temas para daltonismo",
        "description": "Diferentes temas de cores permitem ajustar a apresentação visual. O recurso complementa o conteúdo educativo e a navegação da plataforma."
      }
    ],
    "challenges": [
      "Apresentar conceitos sobre tempestades solares em uma linguagem adequada para crianças.",
      "Organizar os dados da API e oferecer alternativas de cores para diferentes necessidades de percepção visual."
    ],
    "results": [
      "Consulta a dados da NASA integrada a uma experiência educacional infantil.",
      "Temas de cores para daltonismo e conteúdo em vídeo como alternativas de apresentação."
    ],
    "gallery": [
      {
        "src": "/projects/auroraquest.png",
        "width": 1915,
        "height": 1079,
        "alt": "Página inicial do Aurora Quest com conteúdo sobre tempestades solares e acesso a vídeos.",
        "caption": "Captura de interface: introdução às tempestades solares e acesso ao conteúdo em vídeo."
      }
    ]
  },
  {
    "slug": "seguidor-de-linha-pid",
    "repositoryUrl": "https://github.com/Joao-Honorio021/Pid-line-follower",
    "photos": [
      robotPhoto,
      teamPhoto
    ],
    "title": "Seguidor de Linha com PID",
    "category": "Robótica",
    "shortDescription": "Robô autônomo desenvolvido em Python utilizando controle PID para obter maior precisão e estabilidade durante o percurso.",
    "fullDescription": "Robô seguidor de linha desenvolvido para participação no Torneio Brasil de Robótica (TBR).\n\nA programação foi realizada em Python utilizando Pybricks para controlar o LEGO SPIKE Prime. Um controlador PID realiza correções contínuas na trajetória, buscando maior precisão, estabilidade e eficiência durante o percurso.\n\nO software foi estruturado com Programação Orientada a Objetos para organizar o código e facilitar sua manutenção.\n\nO projeto também contribuiu para o desenvolvimento de trabalho em equipe, resolução rápida de problemas e tomada de decisões sob pressão durante as competições.",
    "problem": "O robô precisa acompanhar uma linha e responder às mudanças do percurso, reduzindo oscilações e mantendo estabilidade nas curvas.",
    "solution": "Python e Pybricks controlam o LEGO SPIKE Prime. O controlador PID transforma as leituras dos sensores em ajustes contínuos na velocidade dos motores.",
    "responsibility": "Atuação em programação na equipe Fênix Furious. A atribuição individual de cada parte do robô aguarda confirmação.",
    "responsibilityConfirmed": false,
    "highlights": [
      "Programação em Python com Pybricks",
      "Controle do LEGO SPIKE Prime",
      "Correções contínuas com PID",
      "Código organizado com POO",
      "Leitura de sensores e ajuste dos motores",
      "Participação no TBR com a equipe de robótica"
    ],
    "technologies": [
      "Python",
      "Pybricks",
      "LEGO SPIKE Prime",
      "PID",
      "POO"
    ],
    "image": "/projects/pid.svg",
    "imageLabel": "Diagrama ilustrativo",
    "imageWidth": 960,
    "imageHeight": 600,
    "imageAlt": "Diagrama do ciclo PID: sensores medem o erro, o controlador calcula a correção e os motores ajustam a trajetória.",
    "imageCaption": "Diagrama de controle ilustrativo · não é uma fotografia do robô",
    "status": "A confirmar",
    "fixed": true,
    "context": "Desenvolvido no contexto da robótica competitiva da equipe Fênix Furious, o projeto aplica programação, eletrônica e controle a um problema físico: seguir uma linha com estabilidade.",
    "technicalDecisions": [
      {
        "title": "Python e Pybricks",
        "description": "O programa utiliza Pybricks para controlar o LEGO SPIKE Prime, conectando a leitura dos sensores aos comandos dos motores."
      },
      {
        "title": "Controle PID",
        "description": "Os termos proporcional, integral e derivativo orientam as correções de trajetória. O ajuste dos ganhos considera a resposta do robô e as condições do percurso."
      },
      {
        "title": "Programação Orientada a Objetos",
        "description": "A estrutura orientada a objetos organiza o software e facilita a manutenção do código durante o desenvolvimento."
      }
    ],
    "challenges": [
      "Ajustar os parâmetros do controlador para responder às curvas sem oscilar excessivamente.",
      "Conciliar leituras dos sensores, tempo de execução e resposta mecânica dos motores."
    ],
    "results": [
      "Aplicação de PID, Python e orientação a objetos em um problema físico de controle.",
      "Prática de trabalho em equipe, resolução rápida de problemas e tomada de decisões sob pressão no contexto das competições."
    ],
    "gallery": [
      {
        "src": "/projects/pid.svg",
        "width": 960,
        "height": 600,
        "alt": "Ciclo ilustrativo de leitura, cálculo PID, correção dos motores e nova leitura.",
        "caption": "Malha de controle: medir → calcular → corrigir → medir novamente."
      }
    ]
  }
];

export const fixedProjects = projects.filter((project) => project.fixed);
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
