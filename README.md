# Portfólio — João Victor Lima Honorio

Portfólio profissional de desenvolvimento de software, com apresentação pessoal, competências técnicas e estudos de caso de aplicações web e robótica.

O site foi pensado para uma leitura rápida: a página principal apresenta os projetos selecionados e a trajetória profissional; cada projeto possui uma página própria com problema, solução, funcionalidades e decisões técnicas.

## Índice

- [Visão geral do site](#visão-geral-do-site)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como executar](#como-executar)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Como o conteúdo funciona](#como-o-conteúdo-funciona)
- [Como adicionar projetos](#como-adicionar-projetos)
- [Competências e níveis](#competências-e-níveis)
- [Imagens e fotografias](#imagens-e-fotografias)
- [Contatos, domínio e publicação](#contatos-domínio-e-publicação)
- [Acessibilidade e desempenho](#acessibilidade-e-desempenho)
- [Validação e manutenção](#validação-e-manutenção)

## Visão geral do site

### Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Apresentação, projetos fixados, Sobre, competências, trajetória, processo de desenvolvimento e contato |
| `/projetos` | Catálogo completo de projetos |
| `/projetos/[slug]` | Estudo de caso individual, com descrição, funcionalidades, decisões, aprendizados, imagens e links |

O botão **Ver projeto** abre o estudo de caso dentro do portfólio. Nessa página, **Acessar projeto** leva à demonstração externa, quando cadastrada. **Ver repositório** abre o código no GitHub. Links externos abrem em nova aba.

### Projetos cadastrados

| Projeto | Proposta | Tecnologias do projeto |
| --- | --- | --- |
| ZapMenu | Delivery com carrinho, cálculos de frete e troco, envio do pedido pelo WhatsApp e catálogo gerenciado por planilha | HTML, CSS e JavaScript |
| Aurora Quest | Plataforma educacional infantil sobre atividade solar, com conteúdo em vídeo e temas para daltonismo | Next.js, React e API DONKI da NASA |
| Seguidor de Linha com PID | Robô com correções contínuas de trajetória, desenvolvido no contexto da equipe de robótica e do TBR | Python, Pybricks, LEGO SPIKE Prime, PID e POO |

Essas aplicações são projetos apresentados pelo portfólio. Suas funcionalidades não são executadas dentro deste repositório: por exemplo, o portfólio não precisa de uma chave da NASA para exibir o estudo de caso do Aurora Quest.

### Identidade visual

A interface mantém uma estética tecnológica minimalista, com fundo escuro, superfícies em grafite, destaque verde e fontes Geist e Geist Mono.

| Elemento | Cor |
| --- | --- |
| Fundo | `#0A0A0C` |
| Superfície | `#111115` |
| Destaque | `#00FFC2` |

Os tokens e as regras de responsividade ficam em `src/app/globals.css`.

## Tecnologias utilizadas

| Tecnologia | Papel no portfólio |
| --- | --- |
| Next.js 16 — App Router | Rotas, renderização, metadados e otimização de imagens |
| React 19 | Composição dos componentes |
| TypeScript | Contratos dos dados e verificação de tipos |
| Tailwind CSS 4 e CSS | Estilos, tokens visuais e layouts responsivos |
| Lucide React | Ícones da interface |
| ESLint | Verificação estática do código |

As versões exatas estão em `package.json` e `package-lock.json`.

## Como executar

### Requisitos

- Node.js **22 ou superior**.
- npm.
- Acesso à internet para instalar dependências e baixar as fontes na primeira compilação.

### Desenvolvimento

Na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para carregar os contatos configurados, copie `.env.example` para `.env.local`. No PowerShell:

```powershell
Copy-Item .env.example .env.local
```

O arquivo de exemplo contém os canais profissionais; a URL pública do portfólio deve ser preenchida quando o domínio for definido. O site também funciona localmente sem essa configuração.

### Produção local

```bash
npm run build
npm start
```

Para escolher outra porta:

```bash
npm run start -- --port 3001
```

### Comandos disponíveis

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run dev:restricted` | Alternativa para ambientes Windows que bloqueiam subprocessos do servidor |
| `npm run build` | Gera a versão de produção e verifica os tipos |
| `npm start` | Serve a versão de produção já compilada |
| `npm run lint` | Executa o ESLint, sem permitir avisos |
| `npm run typecheck` | Verifica os tipos sem gerar arquivos JavaScript |
| `npm run check:publish` | Confere domínio e canais profissionais para publicação |

Se `npm run dev` retornar `spawn EPERM` em um ambiente restrito, use `npm run dev:restricted`. Essa alternativa escuta em `127.0.0.1`; reinicie o servidor após mudar variáveis de ambiente ou `next.config.ts`.

## Estrutura de pastas

```text
public/
├── img/                         # Fotografias pessoais e da robótica
└── projects/                    # Capturas de interface e diagrama PID
scripts/
├── check-publish.mjs             # Verificação de domínio e contatos
├── dev-restricted.mjs            # Servidor alternativo para ambiente restrito
└── validate-photos.mjs           # Validação de navegador e capturas
src/
├── app/
│   ├── page.tsx                 # Página principal
│   ├── layout.tsx               # Estrutura global, fontes e metadados
│   ├── globals.css              # Estilos e responsividade
│   ├── projetos/
│   │   ├── page.tsx             # Catálogo
│   │   └── [slug]/page.tsx      # Estudo de caso dinâmico
│   ├── opengraph-image.tsx      # Imagem de compartilhamento
│   ├── twitter-image.tsx        # Reutiliza a imagem de compartilhamento
│   ├── sitemap.ts              # URLs para mecanismos de busca
│   ├── robots.ts               # Regras de rastreamento
│   ├── not-found.tsx           # Página não encontrada
│   └── error.tsx               # Tratamento de erros
├── components/
│   ├── layout/                 # Cabeçalho, navegação e rodapé
│   ├── sections/               # Seções da página principal
│   ├── projects/               # Card reutilizável de projeto
│   └── ui/                     # Botões, títulos e fotografias
├── data/
│   ├── profile.ts              # Apresentação e biografia
│   ├── projects.ts             # Cadastro central dos projetos
│   ├── project-template.ts     # Modelo para um novo projeto
│   ├── skills.ts               # Competências, níveis e observações
│   ├── experience.ts           # Formação e trajetória
│   └── photos.ts               # Metadados das fotografias
├── lib/
│   ├── config.ts               # Leitura das variáveis de ambiente
│   └── metadata.ts             # Metadados das páginas
└── types/
    └── project.ts              # Contrato do cadastro de projetos
```

## Como o conteúdo funciona

Os componentes leem o conteúdo dos arquivos em `src/data/`. Assim, alterações de texto, níveis, fotografias e projetos podem ser feitas sem reescrever a interface.

| O que você quer alterar | Onde editar |
| --- | --- |
| Nome, cargo, Hero e Sobre | `src/data/profile.ts` |
| Disponibilidade profissional | `availability` em `src/data/profile.ts`; `null` oculta a mensagem |
| Projetos, tecnologias, status e links | `src/data/projects.ts` |
| Formação e experiências | `src/data/experience.ts` |
| Tecnologias e níveis de domínio | `src/data/skills.ts` |
| Caminhos, dimensões, alt e legendas de fotos | `src/data/photos.ts` |
| Contatos e domínio | `.env.local` ou variáveis da hospedagem |
| Cores, espaçamentos e layouts | `src/app/globals.css` |

### Projetos na página principal: `fixed`

Cada projeto possui uma propriedade booleana obrigatória:

```ts
fixed: true, // Aparece na página principal e no catálogo.
```

```ts
fixed: false, // Continua no catálogo e mantém sua página individual.
```

A lista `fixedProjects` é derivada do array `projects`. Todos os itens com `fixed: true` aparecem na página principal, **sem limite de três** e na ordem do cadastro. Os três projetos atuais estão fixados.

Se nenhum projeto estiver fixado, a seção de projetos selecionados não é renderizada. O catálogo continua disponível em `/projetos`.

## Como adicionar projetos

1. Abra `src/data/project-template.ts` e copie o objeto para o array `projects` em `src/data/projects.ts`.
2. Substitua os textos do modelo pelos dados reais. O arquivo de modelo não é publicado automaticamente.
3. Defina um `slug` único, em letras minúsculas e com hífens, como `meu-novo-projeto`. Ele forma a URL `/projetos/meu-novo-projeto`.
4. Adicione a imagem em `public/projects/` e cadastre suas dimensões, descrição e legenda.
5. Configure `fixed`, status, tecnologias e URLs.
6. Execute as verificações e refaça o build.

### Campos principais

| Campo | Conteúdo |
| --- | --- |
| `title`, `category` | Nome e categoria do projeto |
| `shortDescription` | Uma ou duas frases para o card |
| `fullDescription` | Texto completo; use `\n\n` para separar parágrafos |
| `problem`, `solution`, `context` | Problema, solução e contexto |
| `highlights` | Funcionalidades apresentadas no estudo de caso |
| `technologies` | Tecnologias realmente utilizadas |
| `technicalDecisions` | Lista de objetos com `title` e `description` |
| `challenges`, `results` | Desafios e resultados ou aprendizados confirmados |
| `responsibility` | Descrição da participação individual |
| `responsibilityConfirmed` | `false` mantém o aviso de detalhamento pendente |
| `status` | `Concluído`, `Em desenvolvimento` ou `A confirmar` |
| `fixed` | Define a presença na página principal |
| `projectUrl`, `repositoryUrl` | URLs externas opcionais |
| `image`, `imageWidth`, `imageHeight` | Caminho e dimensões reais da imagem principal |
| `imageAlt`, `imageCaption`, `imageLabel` | Descrição, legenda e identificação como captura ou diagrama |
| `gallery` | Imagens com `src`, `width`, `height`, `alt` e `caption` |
| `photos` | Fotografias opcionais, que podem ser importadas de `photos.ts` |

Ao salvar um projeto, o catálogo, os cards e o estudo de caso utilizam o mesmo cadastro. No build, `generateStaticParams` gera as páginas individuais; o sitemap também utiliza os projetos quando há domínio configurado. Não é necessário criar um componente ou uma pasta para cada novo projeto.

URLs ausentes permanecem como **Em breve**. Atualmente, estão cadastrados os deploys do ZapMenu e Aurora Quest e os repositórios do Aurora Quest e PID. O repositório do ZapMenu e o deploy do PID ainda não foram fornecidos.

## Competências e níveis

As competências são agrupadas em Front-end, Back-end, Banco de dados e Ferramentas e práticas, no arquivo `src/data/skills.ts`.

Cada item possui um nome, um nível obrigatório e uma observação opcional:

```ts
{ name: "React", level: "Intermediário" },
{ name: "Python", level: "Avançado" },
{ name: "Docker", level: "Básico" },
{
  name: "Padrões de projeto (Design Patterns)",
  level: "Intermediário",
  note: "Em aperfeiçoamento",
},
```

Os níveis aceitos são **Básico**, **Intermediário** e **Avançado**. A interface apresenta rótulos de texto, sem barras ou porcentagens. Os níveis são informados pelo titular e não representam certificações.

## Imagens e fotografias

### Fotografias em `public/img/`

| Arquivo | Dimensões | Onde aparece |
| --- | --- | --- |
| `foto_minha.jpg` | 796 × 531 | Seção Sobre |
| `foto_com_toda_equipe_fenixfurious.jpg` | 4032 × 3024 | Experiência em robótica e galeria do PID |
| `foto_Do_robo.jpg` | 720 × 1280 | Galeria do PID |
| `foto_de_apresentaçao_na_equipe_fenixfurious.jpg` | 1080 × 1080 | Não exibida, pois contém idade histórica impressa |

Para substituir uma fotografia, atualize o arquivo e os metadados em `src/data/photos.ts`. Use a largura e a altura reais e descreva o conteúdo visível no texto alternativo. Legendas devem informar apenas contexto confirmado.

O componente `PhotoFigure`, em `src/components/ui/photo.tsx`, usa `next/image`, dimensões explícitas, `sizes` e carregamento lazy. As fotografias mantêm a proporção original, com altura automática, `object-fit: contain` e posição central. A galeria não possui carrossel: usa duas colunas em telas maiores e uma no mobile.

### Imagens em `public/projects/`

| Arquivo | Tipo | Dimensões |
| --- | --- | --- |
| `zapmenu.png` | Captura de interface | 1919 × 1079 |
| `auroraquest.png` | Captura de interface | 1915 × 1079 |
| `pid.svg` | Diagrama ilustrativo | 960 × 600 |

Caminhos, dimensões e descrições dessas imagens ficam em `src/data/projects.ts`. Fotografias, capturas de interface e diagramas possuem identificações distintas.

## Contatos, domínio e publicação

Configure as variáveis abaixo em `.env.local` para uso local ou no painel da hospedagem para produção:

| Variável | Valor esperado |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origem HTTPS real do portfólio, sem caminho, parâmetros ou fragmento |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail profissional |
| `NEXT_PUBLIC_GITHUB_URL` | URL completa do perfil no GitHub |
| `NEXT_PUBLIC_LINKEDIN_URL` | URL completa do perfil no LinkedIn |

Esses valores são públicos. Após alterar variáveis `NEXT_PUBLIC_*` em produção, refaça o build.

### Indexação

- **Sem domínio configurado:** o site usa `noindex, nofollow`, bloqueia rastreamento em `robots.txt` e gera sitemap vazio.
- **Com domínio configurado:** metadados, canonical, sitemap e dados estruturados utilizam a URL cadastrada.

As imagens de compartilhamento são geradas com `next/og` a partir dos dados de `profile.ts`.

### Verificação antes de publicar

```bash
npm run check:publish
npm run lint
npm run typecheck
npm run build
```

`check:publish` verifica a configuração de domínio e contatos; não publica o site nem comprova os dados editoriais. Ele pode falhar por configuração incompleta mesmo quando o build funciona. Use uma hospedagem compatível com Next.js e configure nela as variáveis públicas.

### Deploy no Cloudflare Workers

O projeto inclui a configuração do OpenNext para Cloudflare:

- `wrangler.jsonc`: define o Worker `portifolio`, os assets e a otimização de imagens;
- `open-next.config.ts`: configura o adaptador OpenNext;
- `public/_headers`: aplica cache longo aos arquivos estáticos versionados;
- `.open-next/`: bundle gerado localmente e ignorado pelo Git.

No painel do Cloudflare, use:

| Campo | Valor |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

O script `postbuild` é executado automaticamente depois do build do Next.js e gera `.open-next/worker.js`. O comando de deploy encontra o bundle pronto e publica o Worker. Para publicar diretamente pelo terminal, `npm run deploy` executa o processo completo.

Para gerar e testar o bundle local sem publicar:

```bash
npx opennextjs-cloudflare build
npx wrangler deploy --dry-run
```

## Acessibilidade e desempenho

- Server Components por padrão; navegação interativa e tratamento de erros usam Client Components.
- Menu operável por teclado, com fechamento por Escape e retorno do foco ao botão.
- Link para pular ao conteúdo e estilos de foco visível.
- Textos alternativos nas imagens informativas.
- Layouts responsivos e respeito a `prefers-reduced-motion`.
- Imagens com `next/image` e fontes com `next/font`, servidas localmente após a compilação.
- Estudos de caso pré-renderizados e metadados específicos por página.

O arquivo `next.config.ts` também concentra cabeçalhos HTTP e opções experimentais de workers para compatibilidade com o ambiente de desenvolvimento restrito. A checagem de tipos permanece ativa.

## Validação e manutenção

Os resultados das verificações anteriores e suas limitações estão em `VALIDACAO.md`. As evidências de navegador ficam em `artifacts/validation/`.

O script `scripts/validate-photos.mjs` verifica a página principal, o catálogo e os três estudos de caso em **360, 768, 1024 e 1440 px**. Ele confere carregamento e alt das imagens, overflow horizontal, menu por teclado e presença dos links externos; também gera capturas de tela e um relatório JSON.

Para executá-lo, é necessário ter Playwright disponível e Microsoft Edge instalado. Playwright não faz parte das dependências padrão do projeto.

Com um servidor de produção na porta 3001 e Playwright disponível para importação:

```bash
node scripts/validate-photos.mjs
```

No PowerShell, uma configuração alternativa pode ser feita assim:

```powershell
$env:BASE_URL = 'http://localhost:3002'
$env:PLAYWRIGHT_MODULE = 'C:/caminho/para/playwright/index.mjs'
node scripts/validate-photos.mjs
```

`BASE_URL` é opcional e usa `http://localhost:3001` por padrão. `PLAYWRIGHT_MODULE` é opcional e permite apontar para uma instalação do Playwright fornecida pelo ambiente.

Ao cadastrar novos projetos, atualize também as rotas e os links esperados nesse script caso queira incluí-los na validação. As verificações de navegador não substituem uma auditoria completa de acessibilidade ou medições de desempenho em produção.
