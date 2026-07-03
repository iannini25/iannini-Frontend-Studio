# CATALOGO.md — Inventário do Estúdio

Tudo que existe no kit + onde buscar mais. Para o **roteamento** (qual usar em cada
projeto) veja `SISTEMA.md`; aqui é a **referência**: o que cada recurso é, quando e por
que usar.

Índice: [1. Skills](#1-skills) · [2. Agentes](#2-agentes) · [3. Pack de marcas (74
DESIGN.md)](#3-pack-de-marcas--74-designmd) · [4. Fontes externas de componentes](#4-fontes-externas-de-componentes) ·
[5. Cores, gradientes e assets](#5-cores-gradientes-e-assets) · [6. Melhores práticas](#6-melhores-práticas)

---

## 1. Skills

Todas em `.claude/skills/<nome>/SKILL.md`. Descoberta automática pelo Claude Code.

### Direção de design / "taste" (o núcleo — escolha UMA como base por projeto)
| Skill | O que é | Quando usar |
|---|---|---|
| **design-taste-frontend** | Anti-slop contextual (flagship, 1206 linhas). Lê o brief e infere a direção; design systems reais; audit-first em redesign. | Landing/portfólio/redesign quando você **não** quer fixar o estilo — deixa a skill decidir. Coringa. |
| **design-taste-frontend-v1** | A v1 original, preservada. | Só se precisar de compatibilidade exata com o comportamento antigo. |
| **high-end-visual-design** | "$150k agency": Double-Bezel (cards aninhados), motor de variância, botão-no-botão, nav ilha de vidro, cubic-bezier custom. Bane Inter/Lucide. | SaaS/produto premium, tech, "cara de agência cara", Apple/Linear-tier. |
| **gpt-taste** | Engenheiro Awwwards + GSAP. Randomização via Python p/ variância, estrutura AIDA, bento sem buraco (`grid-flow-dense`), hero 2-3 linhas, bane meta-labels ("SECTION 01"). | Landing de conversão, marketing, sites com muito movimento. |
| **emil-design-eng** | Filosofia de UI polish e decisões de animação do Emil Kowalski. Os detalhes invisíveis que fazem software parecer ótimo. | Micro-interações, refino de componentes, "por que isso parece barato?". |
| **stitch-design-taste** | Gera arquivos `DESIGN.md` anti-genéricos (linguagem do Google Stitch). | Quando quer um design system em markdown p/ o projeto seguir. |

### Estilos específicos
| Skill | O que é | Quando usar |
|---|---|---|
| **minimalist-ui** | Editorial mono quente, flat, bento com borda 1px, pastéis muram, sem gradiente, sem pílula gigante. | Institucional, docs, workspace, "clean premium", portfólio sóbrio. |
| **industrial-brutalist-ui** | Brutalista: tipografia crua, contraste alto, estrutura exposta. | Disruptivo, cultural, arte, statement. |

### Scroll e motion
| Skill | O que é | Quando usar |
|---|---|---|
| **scroll-cinematic** *(novo)* | GSAP 3.13+ (grátis, todos os plugins) + ScrollTrigger + Lenis 1.3.x + scroll-vídeo em canvas + pipeline FFmpeg/Higgsfield. Técnicas A–I com código. | Qualquer "momento cinematográfico": scroll-vídeo, pin, parallax, smooth scroll, text-reveal, traço SVG. |
| **animejs** | Referência anime.js v4.4.1, verificada contra `vendor/anime/`. 15 docs de referência + recipes. | Animação orquestrada por código: timeline, stagger, draggable, morph/draw SVG, split/scramble, FLIP, partículas. |
| **iconsax-icons** | Sistema de ícones Iconsax + template de ícone animado (Lottie). | Quando o projeto adota Iconsax como fonte de ícones. |
| **svgator-animations** | Player p/ animações vetoriais exportadas do SVGator. | Ilustração/logo vetorial interativa exportada do SVGator. |
| **jitter-motion** | Player p/ vídeo/Lottie exportado do Jitter. | Motion graphics/vídeo transparente sobre o layout. |

### Fontes (novo)
| Skill | O que é | Quando usar |
|---|---|---|
| **fonts-system** *(novo)* | Onde ficam suas fontes locais por SO, inspeção com fonttools, conversão WOFF2, `@font-face` (referenciado/base64), curadoria por estilo. | Sempre que escolher/aplicar tipografia ou usar suas fontes baixadas. |

### Copy de conversão (novo)
| Skill | O que é | Quando usar |
|---|---|---|
| **conversion-copywriting** *(novo)* | Sistema de persuasão do estúdio: Schwartz (consciência/sofisticação), Halbert+Georgi (fome/RMBC/mecanismo), Ogilvy (headlines/fatos), Sutherland (psico-lógica/microcopy), Godin+Kotler (posicionamento), escola brasileira (voz). 7 referências + blueprint seção a seção + ponte nicho→fonte/paleta/posição. | Toda copy de venda/conversão: headline, oferta, prova, objeções, FAQ, CTA. O agente `copy-chief` executa. |

### Responsividade (novo)
| Skill | O que é | Quando usar |
|---|---|---|
| **responsive-design** *(novo)* | Sistema de reflow mobile (reorganizar, não encolher): catálogo de como cada seção vira no celular (cards → carrossel/2-col/lista/accordion, nunca "trem de card"), o que matar no toque (hover/parallax/pin/cursor/tilt/blur), toque ≥44px, dvh/safe-area, imagens responsivas, performance e QA em 360px. SKILL.md + `reference/recipes.md` (código copiável CSS puro + Tailwind). | Sempre no build e antes do QA; qualquer coisa de mobile/tablet/breakpoint. O agente `responsive-engineer` executa. |

### Conhecimento / base de dados
| Skill | O que é | Quando usar |
|---|---|---|
| **ui-ux-pro-max** | Base pesquisável: 67 estilos, 96 paletas, 57 pares de fonte, 25 charts, 99 UX guidelines, 13 stacks (React/Next/Vue/Svelte/SwiftUI/RN/Flutter/Tailwind/shadcn). CSVs + scripts Python. | Escolher paleta/fonte, telas de produto/dashboard, revisar UX, gráficos. |
| **awesome-design-md** | 74 `DESIGN.md` de marcas de ponta (ver §3). | Copiar a linguagem visual de uma marca como ponto de partida. |
| **component-libraries** *(novo)* | Catálogo REAL dos bancos open-source (React Bits, Cult UI, Lightswind, ShaderGradient, shadcn), indexado por caso de uso: fundo de herói, efeito de texto, card, navbar, botão, scroll, 3D, cursor, galeria, marquee, loader, form. Nomes reais + comandos reais de instalação + pegadinhas + protocolo de adaptação. | Sempre que precisar de um componente/efeito pronto para adaptar. Fecha o ciclo do §4. |

### Processo / QA (transversais)
| Skill | O que é | Quando usar |
|---|---|---|
| **impeccable** | Motor de craft/crítica/polish com CLI própria (`npx impeccable`), iteração ao vivo no browser, detector de padrões, storage de crítica. Modos: craft/audit/bolder/quieter/overdrive/polish/delight. | Polir e criticar UI existente; elevar "de bom pra excepcional". |
| **redesign-existing-projects** | Audita design atual, identifica padrões de IA genérica, aplica padrão premium sem quebrar função. Qualquer CSS/framework. | Redesign de site/app já existente. |
| **image-to-code** | Design→código a partir de imagem: gera a imagem de referência, analisa e implementa fiel. | Tarefas visuais onde partir de uma imagem-alvo ajuda. |
| **full-output-enforcement** | Proíbe truncamento e placeholders (`// ...`, "resto segue o padrão"). Entrega arquivos inteiros. | Sempre ativa. |
| **clean-code** | Padrão Código Limpo (Robert C. Martin) + checklist de odores (`reference/odores.md`) + livro completo em `reference/`. | Todo código escrito/revisado/refatorado. |

### Geração de imagem
| Skill | O que é | Quando usar |
|---|---|---|
| **brandkit** | Boards de guidelines de marca, sistema de logo, deck de identidade (imagens premium). | Criar identidade/marca do projeto. |
| **imagegen-frontend-web** | 1 imagem horizontal POR seção (8 seções = 8 imagens); variedade de composição/CTA. | Referências visuais de landing/site p/ recriar em código. |
| **imagegen-frontend-mobile** | Telas de app em moldura de iPhone, consistência multi-tela. | Conceitos de app mobile (só imagens, não código). |

---

## 2. Agentes

Em `.claude/agents/<nome>.md`. Agentes orquestram skills.

| Agente | Papel | Quando usar |
|---|---|---|
| **design-director** | Orquestrador. Lê o brief, define direção (público/arquétipo/fontes/assinatura), escolhe as skills e conduz as 5 camadas (direção→estrutura→build→motion→polish→QA). | **No início de todo projeto de site/página.** É o ponto de entrada. |
| **anime-motion** | Especialista em motion com anime.js v4. Lê a skill `animejs` + referências + o source em `vendor/anime/`. | Delegar qualquer "animar X" por código JS. |
| **scroll-director** *(novo)* | Especialista na stack GSAP/ScrollTrigger/SplitText/Lenis (skill `scroll-cinematic`). Espelho do anime-motion para a região do scroll. | Delegar qualquer efeito dirigido pela rolagem: scroll-vídeo, pin, parallax, scrub, text-reveal. |
| **design-critic** *(novo)* | Crítico/QA adversarial: varre o build contra o checklist da skill de estilo + anti-slop + SISTEMA.md §6, computa contraste WCAG de verdade, reporta achado→arquivo:linha→fix. Executor da `impeccable`. | **Antes de dar qualquer página como pronta.** E em "revise/critique o design". |
| **copy-chief** *(novo)* | Chefe de copy PT-BR. Executa a skill `conversion-copywriting`: diagnóstico Schwartz (consciência/sofisticação), identificação de nicho, mineração de reviews, mecanismo nomeado, blueprint seção a seção, proposta de forma (fonte/paleta/posição). Zero clichê de IA, dado real ou hipótese rotulada. | Escrever/revisar qualquer texto visível e montar a copy inteira de landing de vendas. |
| **responsive-engineer** *(novo)* | Engenheiro de responsividade (skill `responsive-design`). Reflow seção a seção no mobile (cards → carrossel/2-col/lista/accordion), remove efeitos ruins no toque, acerta toque/dvh/safe-area/imagens, QA em 360px. | **Ao final de todo build, antes do QA;** e sempre que algo "não fica bom no celular". |
| **clean-code-reviewer** | Guardião da qualidade de código (skill `clean-code`). Revisa por heurísticas (G/F/N), refatora em passos pequenos. | Revisar diffs/PRs, refatorar, escrever código no padrão. |

---

## 3. Pack de marcas — 74 DESIGN.md

Em `.claude/skills/awesome-design-md/design-md/<marca>/`. Cada pasta tem um `DESIGN.md`
(tokens, tipografia, cores, regras) de uma marca real. **Uso:** copie o `DESIGN.md` de uma
marca para a raiz do projeto e peça *"faça uma página nesta linguagem visual"*. Escolha
pela vibe:

- **Carros / luxo:** `ferrari`, `lamborghini`, `bugatti`, `bmw`, `bmw-m`, `tesla`, `renault`.
- **Dev tools / infra:** `vercel`, `supabase`, `sentry`, `posthog`, `clickhouse`, `mongodb`, `hashicorp`, `warp`, `opencode.ai`, `replicate`, `composio`, `mintlify`, `resend`, `sanity`, `webflow`, `cursor`, `expo`.
- **IA:** `claude`, `cohere`, `elevenlabs`, `minimax`, `mistral.ai`, `runwayml`, `x.ai`, `together.ai`, `ollama`, `voltagent`.
- **Fintech:** `stripe`, `binance`, `coinbase`, `kraken`, `revolut`, `wise`, `mastercard`.
- **Consumer / produto:** `apple`, `airbnb`, `nike`, `starbucks`, `spotify`, `playstation`, `meta`, `pinterest`, `uber`, `figma`, `framer`, `notion`, `linear.app`, `raycast`, `superhuman`, `lovable`, `cal`, `airtable`, `slack`, `intercom`, `clay`, `miro`.
- **Editorial / mídia:** `theverge`, `wired`.
- **Legado / retro:** `dell-1996`, `nintendo-2001`, `hp`, `ibm`.
- **Outras:** `nvidia`, `vodafone`, `shopify`, `spacex`.

> Atualizar/expandir: repo `github.com/VoltAgent/awesome-design-md` (já vendorado aqui).
> Referência viva: `getdesign.md`.

---

## 4. Fontes externas de componentes

O kit foca em **direção + técnica**. Para bancos de componentes prontos, o fluxo é:
**puxar → catalogar → adaptar** (nunca colar cru — o Claude Code adapta cor/conteúdo/
tipografia/motion ao design system do projeto). Automação: `prompts/03-catalogar-componentes-externos.md`.

> **A skill `component-libraries` encapsula as fontes 4.1 abaixo** como catálogo de
> disparo automático — com o índice por caso de uso (qual lib tem qual componente, nome
> real, comando real). Esta seção é o registro completo, incluindo as galerias 4.2.

### 4.1 Open-source (Claude Code clona/instala direto)
| Fonte | Como puxar | Bom para |
|---|---|---|
| **shadcn/ui** — `ui.shadcn.com` | `npx shadcn@latest add <componente>` · repo `github.com/shadcn-ui/ui` · blocks e charts em `/blocks` `/charts` | Base de componentes acessíveis, blocos, charts. A fundação. |
| **React Bits** — `reactbits.dev` | repo `github.com/DavidHDev/react-bits` (clonar e estudar `showcase`) | Componentes animados/criativos React. |
| **Cult UI** — `cult-ui.com` | repo `github.com/nolly-studio/cult-ui` (registry estilo shadcn) · docs `/docs` | Componentes e efeitos com caráter. |
| **Watermelon UI** — `ui.watermelon.sh` | repo `github.com/WatermelonCorp/watermelon-platform` · install `/installation` | UI moderna. |
| **Lightswind** — `lightswind.com` | repo `github.com/codewithMUHILAN/Lightswind-UI-Library` · `/components` | **3D** e componentes chamativos. |
| **ShaderGradient** — `shadergradient.co` | repo `github.com/ruucm/shadergradient` · `npm i shadergradient` | Gradientes 3D animados (backgrounds de herói). |
| **Skiper UI** — `skiper-ui.com` | `npx shadcn add @skiper-ui/skiper40` (registry) · `/components` | Efeitos e componentes prontos via registry. |
| **21st.dev** — `21st.dev` | registry shadcn: `npx shadcn@latest add "https://21st.dev/r/..."` · `/community/components` `/themes` `/templates` | Efeitos, temas e templates da comunidade. |

### 4.2 Galerias (copiar por componente do site — não são clonáveis em massa)
| Fonte | O que tem | Como usar |
|---|---|---|
| **Uiverse** — `uiverse.io` | Comunidade open-source (MIT): `/buttons` `/cards` `/loaders` `/inputs` `/checkboxes` `/switches` `/forms` `/patterns` `/tooltips`, `/elements`, e `/design/` (design systems). | Abra a categoria, copie o CSS/Tailwind do elemento, **adapte** ao projeto. |
| **Aceternity UI** — `ui.aceternity.com` | `/components` e `/templates` (React + Framer Motion + Tailwind; parte grátis, parte pro). | Copie o componente da doc; recrie o efeito e adapte. |
| **Magic Pattern** — `magicpattern.design` | `/community` `/templates` `/community/packs` `/community/shapes` `/tools` (geradores de padrão/gradiente/shape). | Gere backgrounds/shapes/padrões; exporte SVG/CSS. |
| **Lukacho UI** — `ui.lukacho.com` | `/components` e `/templates`. | Copie e adapte. |
| **Sprint** — `sprrrint.com` | Library (`/whats-new`). | Referência de componentes. |
| **animmasterlib** — `animmasterlib.dev` | Componentes estilo Awwwards (tem plano PRO barato — o usuário topou pagar se valer). | Estudar a doc; se assinar PRO, baixar via o método que a doc indicar e catalogar. |
| **Refero** — `styles.refero.design` | `/ai-agents/design-md-examples` (exemplos DESIGN.md) e `/ai-agents/design-prompts` (prompts de design com IA) + busca de prompts. | Inspiração de design + prompts prontos. Complementa o pack de 74 marcas. |

> **Nota honesta:** as galerias JS (4.2) não dão para "baixar tudo" de uma vez por
> varredura automática — cada componente é copiado individualmente do site. O
> `prompts/03` orienta o Claude Code a clonar os repos open-source (4.1) e registrar as
> galerias (4.2) num catálogo do projeto, sempre **adaptando** ao contexto.

---

## 5. Cores, gradientes e assets

| Ferramenta | O que faz | Uso no fluxo |
|---|---|---|
| **uicolors.app** | Gera escala Tailwind (50–950) a partir de uma cor. | Montar a paleta do projeto (tokens). |
| **cssgradient.io** | Gerador de gradientes CSS que combinam. | Backgrounds, mesh, radiais. |
| **ShaderGradient** — `shadergradient.co` | Gradientes 3D animados (WebGL). | Background de herói premium (ver §4.1 p/ instalar). |
| **Magic Pattern tools** | Geradores de padrão/shape/gradiente. | Texturas e SVGs de fundo. |
| **Spline** — `spline.design` | Cenas 3D no navegador, exporta p/ React/web. | Objeto 3D interativo no herói. |
| **LottieFiles** — `lottiefiles.com` | Animações Lottie prontas. | Combina com skills `iconsax-icons`/`jitter-motion`. |
| **shots.so** | Mockups/screenshots bonitos; estudar a lógica de composição de shots. | Estudar distribuição de elementos; mockups de apresentação. |

> Paletas prontas por estilo também na skill `ui-ux-pro-max` (96 paletas). Fontes: `FONTES.md`.

---

## 6. Melhores práticas

**Sempre**
- Comece pelo `design-director` → direção antes de código.
- Uma direção estética (uma skill de estilo) por projeto — não empilhe.
- Macro-whitespace, hero 2-3 linhas, container largo.
- Motion só em `transform`/`opacity`; `backdrop-blur` só em fixed/sticky; `prefers-reduced-motion` sempre.
- Mobile colapsa de verdade; `100dvh` no lugar de `100vh`.
- `clean-code` + `full-output-enforcement` no fim.

**Nunca**
- Inter/Roboto/Arial/Open Sans como display.
- Misturar duas fontes de ícones; emoji como ícone de UI.
- Dois motores de animação no mesmo elemento (GSAP + anime.js brigando por transform).
- Colar componente externo cru sem adaptar ao design system.
- Deixar imagem de conteúdo/hero só na caixa (quadrado/retângulo/círculo com raio uniforme) sem tratamento de forma — clip-path/máscara/blob/sangria/duotone (CLAUDE.md §4). Avatar/logo/thumbnail seguem a convenção.
- Truncar output (`// ...`, "resto segue o padrão").
- Dados falsos ("John Doe", "Acme Corp", stats inventadas) — peça o dado real ou liste a hipótese.

**Reuso de componente (o que o usuário pediu):** ao trazer um componente de uma fonte da
§4, o Claude Code deve **manter a qualidade/estrutura** e trocar cor, conteúdo, tipografia,
identidade e motion para o contexto do projeto atual. O componente é um ponto de partida de
alta qualidade, não um recorte a colar.
