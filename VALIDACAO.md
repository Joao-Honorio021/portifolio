# Validação — integração de fotografias e links

Validação local em 13/09/2026, com build de produção e Edge headless.

## Resultado

| Página | 360 px | 768 px | 1024 px | 1440 px |
| --- | --- | --- | --- | --- |
| `/` | OK | OK | OK | OK |
| `/projetos` | OK | OK | OK | OK |
| `/projetos/seguidor-de-linha-pid` | OK | OK | OK | OK |

- HTTP 200 nas 12 combinações; nenhuma rolagem horizontal pelo scrollWidth da raiz.
- Todas as imagens carregadas e decodificadas, com alt não vazio. Descrições conferidas com o conteúdo das imagens.
- Capturas inspecionadas para hierarquia, proporções, ausência de recorte das fotografias e disposição responsiva.
- Foco visível observado; menu em 360 px aberto com Enter, navegado com Tab e fechado com Escape, devolvendo foco ao botão.
- `prefers-reduced-motion: reduce` emulado: rolagem automática, com regras existentes de remoção de transições e animações preservadas.
- Sem erros JavaScript capturados. Lint, TypeScript e build aprovados.
- Os quatro links fornecidos aparecem nas páginas corretas, abrem em nova aba e têm `noopener noreferrer`. A disponibilidade dos destinos externos não foi comprovada: a ferramenta web não conseguiu acessá-los.
- Evidências e capturas em `artifacts/validation/`; relatório de dados em `results.json`. Script reproduzível em `scripts/validate-photos.mjs`.

## Enquadramento e conteúdo

Retrato integral 796 × 531 em moldura retangular, limitado a 450 px no desktop e 480 px no tablet, antes da biografia no mobile. Foto coletiva integral 4:3, sem cortar os rostos nas bordas. Robô integral 9:16, limitado a 320 px de largura no mobile. `next/image` com dimensões reais, sizes por contexto e lazy loading. `object-fit: contain`, `object-position: center` e altura automática preservam as proporções.

A arte de apresentação não é exibida por conter idade histórica impressa. Fotografias não são apresentadas como prova de resultados ou do algoritmo executado. Não foram acrescentadas datas, prêmios, métricas ou disponibilidade. Status pendentes foram mantidos; repositório do Zap Menu e demonstração do PID seguem como Em breve.

Corrigidos também os rótulos e textos alternativos das capturas do Zap Menu e Aurora Quest. Durante a tarefa, o SVG do Aurora Quest deixou de existir; a referência foi atualizada para o PNG presente no projeto.

## Arquivos criados ou alterados

- `src/data/photos.ts`: metadados tipados das fotografias.
- `src/data/experience.ts`: seleção da foto da equipe.
- `src/data/projects.ts`: fotografias, links, identificação e dimensões das imagens.
- `src/data/project-template.ts`: modelo tipado para novos projetos, sem publicação automática.
- `src/types/project.ts`: contrato com fotografias e dimensões por imagem de galeria.
- `src/components/ui/photo.tsx`: renderização reutilizável de fotografias, como Server Component.
- `src/components/sections/about.tsx`: retrato editorial.
- `src/components/sections/experience.tsx`: registro coletivo.
- `src/components/projects/project-card.tsx`: imagens informativas com alt e rótulo correto.
- `src/app/projetos/[slug]/page.tsx`: galeria fotográfica separada do diagrama.
- `src/app/globals.css`: molduras, proporções e galeria responsiva.
- `scripts/validate-photos.mjs`: validação de layout, imagens, menu e links.
- `README.md`: inventário, substituição de imagens e cadastro de futuros projetos.
- `VALIDACAO.md` e `artifacts/validation/`: resultados e evidências.

Não foram executados Lighthouse, auditoria completa WCAG, leitor de tela ou testes em Safari/Firefox. Nenhuma publicação externa foi realizada.

## Revisão editorial e níveis de tecnologia — 13/09/2026

O briefing posterior confirmou a formação concluída, o início com mods de Minecraft aos 10 anos, as funcionalidades e tecnologias dos projetos e os níveis individuais de domínio. Hero, Sobre, trajetória, metadados sociais e textos dos três projetos foram atualizados. Cards agora concentram descrição curta, tecnologias e links; detalhes permanecem nos estudos de caso.

Níveis exibidos: React e Next.js intermediários; JavaScript, TypeScript, Python e Node.js avançados; Java e C# intermediários; SQL avançado. Demais competências sem nível inferido. Os dados estão tipados em `src/data/skills.ts`.

A integração DONKI/GST da NASA foi confirmada por leitura da rota no repositório do Aurora Quest. A implementação consulta a janela dos últimos 30 dias, retorna o último evento da resposta e revalida os dados a cada hora. Não foi verificada a disponibilidade da API no deploy.

Nova validação em produção local: **20 combinações** — `/`, `/projetos` e os três estudos de caso, em 360, 768, 1024 e 1440 px. Todas com HTTP 200, sem overflow horizontal, imagens quebradas, alt vazio ou erros JavaScript. Menu por teclado e movimento reduzido verificados pelo script existente. Níveis inspecionados visualmente nas quatro larguras. Lint, TypeScript e build aprovados.

Arquivos desta revisão: `src/data/profile.ts`, `src/data/skills.ts`, `src/data/projects.ts`, `src/data/experience.ts`, `src/components/sections/hero.tsx`, `src/components/sections/about.tsx`, `src/components/projects/project-card.tsx`, `src/app/projetos/[slug]/page.tsx`, `src/app/opengraph-image.tsx`, `src/app/globals.css`, `scripts/validate-photos.mjs`, `README.md`, este relatório e as evidências em `artifacts/validation/`.
