# CLAUDE.md — Frontend Studio Kit

> Biblioteca reutilizável de **skills + agentes** para gerar sites e interfaces
> **acima do padrão** com o Claude Code dentro do VS Code. Abra esta pasta como
> raiz do projeto (ou copie `.claude/` para dentro dele) e o Claude Code descobre
> tudo sozinho.

Este arquivo é o **manual de operação**. Leia `SISTEMA.md` para o roteador
(qual skill/agente usar em cada tipo de projeto) e `CATALOGO.md` para o inventário
completo. Fontes: `FONTES.md`. Automação/terminal: pasta `prompts/`.

---

## 0. Regra-zero: nada de layout genérico

Este kit existe por um motivo: **o resultado padrão de um LLM é "página de IA"** —
Inter/Roboto como display, ícones Lucide grossos, gradiente roxo, cards com borda
colorida à esquerda, hero de 6 linhas, bento com buracos, botão com texto invisível.
Tudo aqui é para **quebrar esses defaults**. Se um output pareceria igual ao de
qualquer outro prompt, ele está errado — recomece pela direção de design.

---

## 1. Como o Claude Code deve trabalhar (fluxo padrão)

Quando o usuário pedir um site/página/componente, **não saia codando**. Siga:

1. **Direção primeiro.** Rode o agente `design-director` (`.claude/agents/design-director.md`).
   Ele lê o brief, define a direção (público, trabalho da página, arquétipo visual,
   par de fontes, elemento-assinatura) e escolhe **quais skills combinar**.
2. **Estrutura.** Liste seções e o que cada uma comunica. Decida quais têm
   "momento cinematográfico" (1–2 no máximo).
3. **Build.** Escreva o código já puxando as skills de taste da direção escolhida
   (ver `SISTEMA.md`). Fontes via `fonts-system` / `FONTES.md`. Ícones conforme a
   regra de ícones do projeto (§4). **Mobile-first** desde já (skill `responsive-design`):
   cada seção reflowa no mobile, sem "trem de card".
4. **Motion.** Animação orquestrada por código → agente `anime-motion` (anime.js);
   scroll-driven → agente `scroll-director` (GSAP/ScrollTrigger/Lenis) ou
   skill `scroll-cinematic` (GSAP/ScrollTrigger/Lenis/scroll-vídeo). Nunca anime o
   mesmo elemento por dois sistemas.
5. **Polish + QA.** Rode o agente `responsive-engineer` (reflow mobile seção a seção,
   remove efeitos ruins no toque, QA em 360px) e o agente `design-critic` (executa
   `impeccable` + checklist da skill de estilo + contraste WCAG) e/ou
   `redesign-existing-projects`. Textos visíveis passam pelo agente `copy-chief`. Código
   passa por `clean-code` (+ agente `clean-code-reviewer`).
6. **Completude.** `full-output-enforcement` está sempre ativa: entregue arquivos
   inteiros, sem `// ...`, sem "resto segue o padrão".

> Regra prática: **direção → estrutura → build → motion → polish → QA.**

---

## 2. Estrutura do pacote

```
frontend-studio/
├── CLAUDE.md              ← este arquivo (manual de operação)
├── SISTEMA.md             ← roteador: qual skill/agente por tipo de projeto + receitas
├── CATALOGO.md            ← inventário completo (skills, agentes, 74 marcas, fontes externas)
├── FONTES.md              ← onde ficam suas fontes locais por SO + biblioteca curada
├── README.md              ← como instalar/usar no VS Code
├── prompts/               ← prompts prontos para o Claude Code executar no terminal
├── vendor/anime/          ← anime.js v4.4.1 (ground truth da skill animejs; src + bundles)
├── components-catalog.md  ← catálogo de componentes externos (saída do prompts/03)
├── _ref/                  ← clones de referência dos repos de componentes (prompts/03; fora do git)
├── showcase/              ← demo viva do kit ("um kit, quatro linguagens")
├── fonts-manifest.json    ← manifest das suas fontes locais (saída do prompts/02; fora do git)
├── fonts-woff2/           ← suas fontes convertidas p/ web (prompts/02; fora do git)
└── .claude/
    ├── skills/           ← 28 skills + awesome-design-md (74 marcas) — FONTE ÚNICA
    └── agents/           ← agentes (7: director, scroll, motion, critic, copy, responsive, code)
```

**Descoberta:** o Claude Code lê skills em `.claude/skills/<nome>/SKILL.md` e agentes
em `.claude/agents/<nome>.md`. É só isto — sem build, sem config.

**Opcional (convenção agentskills.io):** se quiser a estrutura canônica
`.agents/skills/` + symlinks, rode `prompts/05-espelhar-agents-convention.md`. **Não faça
isso num repo que vai para o GitHub** — junctions/symlinks não sobrevivem a clone/zip;
a fonte única em `.claude/skills/` é o formato de distribuição.

---

## 3. Skills instaladas (resumo — detalhe em CATALOGO.md)

**Fundamentos (NOVO):** `design-foundations` — a camada do **porquê**
(Vignelli/Müller-Brockmann/Rand/Bass/Glaser/Scher + escola brasileira Wollner/Aloisio +
ponte fundamento→tendência 2026). O `design-director` a carrega ANTES das skills de estilo:
semântica → sistema → hierarquia → redução.

**Direção de design / "taste" (o núcleo):**
`design-taste-frontend` (flagship anti-slop) · `design-taste-frontend-v1` (compat) ·
`high-end-visual-design` ($150k agency, Double-Bezel) · `gpt-taste` (Awwwards + GSAP,
AIDA, bento sem buraco) · `emil-design-eng` (polish/interação, Emil Kowalski) ·
`stitch-design-taste` (gera DESIGN.md).

**Estilos específicos:** `minimalist-ui` (editorial mono quente) ·
`industrial-brutalist-ui` (brutalista).

**Scroll cinematográfico (NOVO):** `scroll-cinematic` — GSAP + ScrollTrigger + Lenis +
scroll-vídeo em canvas + pipeline Higgsfield + plugins GSAP agora grátis (SplitText,
DrawSVG, MorphSVG, ScrollSmoother).

**Fontes (NOVO):** `fonts-system` — usa suas fontes locais e monta `@font-face`.

**Componentes prontos (NOVO):** `component-libraries` — catálogo real, indexado por caso
de uso, dos bancos open-source (React Bits, Cult UI, Lightswind, ShaderGradient, shadcn):
qual lib tem o quê, nome real do componente, comando real de instalação, e o protocolo de
adaptação (nunca colar cru).

**Copy de conversão (NOVO):** `conversion-copywriting` — sistema de persuasão
(Schwartz/Halbert/Ogilvy/Georgi/Sutherland/Godin/Kotler + escola brasileira:
Olivetto, Silvio Santos, Hugo Veiga); o agente `copy-chief` executa.

**Responsividade (NOVO):** `responsive-design` — reflow mobile (não encolher): catálogo de
como cada seção vira no celular (cards → carrossel/2-col/lista/accordion, nunca "trem de
card"), o que matar no toque (hover/parallax/pin/cursor/tilt), toque/dvh/safe-area, imagens
e QA mobile; o agente `responsive-engineer` executa.

**Processo/QA:** `impeccable` (motor de craft/crítica/polish, tem CLI própria) ·
`redesign-existing-projects` (auditar e elevar) · `full-output-enforcement` (anti-truncamento) ·
`ui-ux-pro-max` (base de dados pesquisável: 67 estilos, 96 paletas, 57 pares de fonte) ·
`image-to-code` (design→código a partir de imagem).

**Geração de imagem:** `brandkit` (boards de marca/logo) · `imagegen-frontend-web`
(1 imagem por seção) · `imagegen-frontend-mobile` (telas de app).

**Código/animação:** `clean-code` (padrão Código Limpo) · `animejs` (referência v4.4.1) ·
`iconsax-icons` · `jitter-motion` · `svgator-animations`.

**Pack de dados:** `awesome-design-md/design-md/` — 74 DESIGN.md de marcas de ponta
(Apple, Stripe, Linear, Vercel, Ferrari, Nike, Framer, Notion, Tesla, SpaceX, Spotify…).
Copie o DESIGN.md de uma marca para o projeto e peça "faça uma página nesta linguagem".

**Agentes:** `design-director` (orquestrador — NOVO) · `anime-motion` (motion anime.js) ·
`clean-code-reviewer` (qualidade de código) · `scroll-director` (GSAP/scroll — NOVO) · `design-critic` (QA adversarial — NOVO) · `copy-chief` (copy PT-BR — NOVO) · `responsive-engineer` (responsividade mobile — NOVO).

---

## 4. Regras duras (configuráveis por projeto)

Estas regras são **opt-in por projeto** — o kit é genérico. Ative o que fizer sentido
no `CLAUDE.md` do projeto específico. Padrões recomendados:

- **Ícones.** Escolha UMA fonte de ícones por projeto e mantenha (nunca misture). Opções
  boas: Phosphor (Light/Bold), Iconsax (use a skill `iconsax-icons`), Lucide **fino** só se
  o estilo pedir. **Nunca emoji** como ícone de UI. As skills de taste **banem Lucide
  grosso, FontAwesome e Material** por padrão.
- **Fontes.** **Nunca** Inter/Roboto/Arial/Open Sans como display. Use `fonts-system` +
  `FONTES.md`. (Regra herdada de todas as skills de taste.)
- **Forma da imagem (fuja da caixa).** Ao inserir uma imagem de **conteúdo/hero/editorial**,
  o default preguiçoso é deixá-la quadrada, retangular ou circular com raio uniforme — isso
  grita "template". **Priorize moldar a imagem à composição:** `clip-path` (arco/dome,
  corte diagonal, hexágono, chevron, paralelogramo), **blob orgânico** (`border-radius`
  assimétrico tipo `42% 58% 55% 45%`), **máscara SVG / `mask-image`** com forma ou gradiente
  (bordas esfumadas que fundem com o fundo), **sangria/overflow** (a imagem vaza do container
  e quebra a caixa), rotação leve + sobreposição em outro elemento, duotone com `mix-blend`,
  ou imagem-dentro-do-texto (`background-clip: text`) no herói.
  - **Escolha 1-2 tratamentos por projeto e repita** (vira assinatura; formas aleatórias em
    cada imagem = ruído). O `design-director` define essa assinatura na direção.
  - **Não sacrifique o assunto:** o recorte não pode cortar rosto/produto de forma feia;
    respeite a "safe area" do sujeito. Reserve espaço com `aspect-ratio` (evita CLS).
  - **A forma tem que reflowar no mobile** (skill `responsive-design`): simplifique recortes
    agressivos em telas estreitas; a imagem nunca pode virar uma fatia ilegível.
  - **Exceção (mantêm a convenção):** avatares/foto de perfil (círculo), logos, thumbnails de
    UI densa e ícones — aí quadrado/círculo é o certo. A regra é para imagem **de conteúdo**,
    não para todo elemento.
- **Qualidade de código.** Todo código passa por `clean-code`; antes de dar um módulo como
  pronto, varra `.claude/skills/clean-code/reference/odores.md`.
- **Animação — qual sistema:** ícone Lottie → `iconsax-icons`; vetorial exportado do
  SVGator → `svgator-animations`; vídeo/motion do Jitter → `jitter-motion`; orquestração
  por código (DOM/scroll/timeline) → `animejs`/agente `anime-motion`; scroll-vídeo,
  pin, parallax, smooth scroll → `scroll-cinematic`. **Nunca dois sistemas no mesmo
  elemento** (conflito de transform).
- **Performance:** só anime `transform`/`opacity`; `backdrop-blur` só em fixed/sticky;
  respeite sempre `prefers-reduced-motion`.

---

## 5. skills-lock.json

`skills-lock.json` (raiz) rastreia as skills que vieram do GitHub via `npx skills`.
Serve para reinstalar/atualizar. Skills locais/próprias (`animejs`, `clean-code`,
`iconsax-icons`, `jitter-motion`, `svgator-animations`, `scroll-cinematic`,
`fonts-system`) **não** entram no lock. Para reinstalar tudo do zero num projeto novo:
`prompts/01-instalar-skills-github.md`.

---

## 6. Iniciar um projeto novo

Copie esta pasta como raiz (ou só `.claude/` + os `.md` de topo) e comece com o prompt
`prompts/04-novo-projeto.md`, preenchendo: tipo de site, negócio/segmento, público,
tom e referências. O `design-director` faz o resto.
