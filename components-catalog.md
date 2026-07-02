# components-catalog.md — Catálogo de Componentes Externos

> Catálogo local de componentes de referência para **adaptar** aos projetos do estúdio.
> Fonte da estratégia: `CATALOGO.md` §4 (Fontes externas de componentes) e
> `prompts/03-catalogar-componentes-externos.md`.
>
> **Regra de ouro — nunca colar cru.** Cada item aqui é um *ponto de partida de alta
> qualidade*, não um recorte para colar. Ao usar, mantenha a estrutura/qualidade e troque
> **cor · conteúdo · tipografia · motion · dados** para o design system do projeto (ver
> `SISTEMA.md`). E respeite as regras duras do `CLAUDE.md` §4: uma fonte de ícones por
> projeto, nada de Inter/Roboto como display, um único motor de animação por elemento,
> `prefers-reduced-motion` sempre.

---

## 0. Como este catálogo foi montado

**PARTE A** — 6 repos open-source clonados (shallow, `--depth 1`, em 2026-07-01) para
`_ref/` e lidos arquivo a arquivo por um cataloger dedicado por repo. Tamanho em disco:

| Repo | `_ref/` | Tamanho | Stack | Como puxar (1 componente) |
|---|---|---|---|---|
| **react-bits** | `_ref/react-bits/` | 101M | React 19 · JS/TS · CSS/Tailwind (4 variantes) · registry copy-paste | `npx shadcn@latest add @react-bits/<Nome>-TS-TW` |
| **cult-ui** | `_ref/cult-ui/` | 451M | React 19 · Next 16 · TS · Tailwind v4 · `motion` · registry shadcn | `npx shadcn@latest add https://cult-ui.com/r/<nome>.json` |
| **shadcn-ui** | `_ref/shadcn-ui/` | 121M | React 19 · Next 16 · TS · Tailwind v4 · Radix/Base UI · CLI registry | `npx shadcn@latest add <nome>` |
| **lightswind** | `_ref/lightswind/` | 5.6M | React 18/19 · TS · Tailwind · `framer-motion`+GSAP+WebGL · CLI copy-paste | `npx lightswind@latest add <nome>` (após `init`) |
| **shadergradient** | `_ref/shadergradient/` | 87M | React · `three`+`@react-three/fiber` · pacote npm | `npm i @shadergradient/react @react-three/fiber three` |
| **watermelon** | `_ref/watermelon/` | 20M | React 19 · Vite · TS · Tailwind 4 · `motion` · registry shadcn | `npx shadcn@latest add https://registry.watermelon.sh/r/<nome>.json` |

> `awesome-design-md` (73 marcas) já vem vendorado no kit em
> `.claude/skills/awesome-design-md/design-md/` — ver `CATALOGO.md` §3.

**PARTE B** — registries instaláveis (comandos anotados, **não** instalados) — ver §16.
**PARTE C** — galerias (copiar por componente do site; registradas como fonte) — ver §17.

> **Nota sobre `_ref/`.** Esta pasta do kit **não é um repositório git**, então não há
> `.gitignore` para atualizar aqui. **Ao copiar o kit para um projeto real, adicione
> `_ref/` ao `.gitignore` do projeto** — versione apenas este `components-catalog.md`.
> Os clones são referência local descartável (reclonáveis pelo `prompts/03`).

**Legenda:** 🔴 = depende de lib pesada (three/r3f, framer-motion/motion, gsap, ogl,
matter-js, recharts). 🟢 = CSS/JS puro, sem lib de animação. Caminhos em `código`.

**Índice por tipo:**
[1. Blocos de seção prontos](#1-blocos-de-seção-prontos-hero--cta--pricing--feature--stats--footer--login--dashboard) ·
[2. Bento](#2-bento) · [3. Botão](#3-botão) · [4. Card](#4-card) ·
[5. Marquee / logo loop / carrossel](#5-marquee--logo-loop--carrossel) ·
[6. Background / 3D / shader](#6-background--3d--shader) · [7. Gradiente](#7-gradiente) ·
[8. Texto animado](#8-texto-animado) · [9. Scroll-effect](#9-scroll-effect) ·
[10. Navegação](#10-navegação-dock--island--menu--command--tabs--sidebar) ·
[11. Loader / skeleton](#11-loader--skeleton) · [12. Form / input](#12-form--input) ·
[13. Cursor](#13-cursor) · [14. Image-effect](#14-image-effect) ·
[15. Overlays & utilitários](#15-overlays--utilitários) · [16. Registries (PARTE B)](#16-registries-instaláveis-parte-b) ·
[17. Galerias (PARTE C)](#17-galerias-parte-c) · [18. Libs pesadas → equivalentes leves](#18-dependências-pesadas--equivalentes-mais-leves) ·
[19. Top 10 mais reutilizáveis](#19-top-10-mais-reutilizáveis)

---

## 1. Blocos de seção prontos (hero · cta · pricing · feature · stats · footer · login · dashboard)

Seções inteiras, prop-driven. Ótimo esqueleto de conversão — troque copy/dados/tokens.

- 🔴 **Hero blocks (`hero-1` … `hero-43`)** — *watermelon* · deps: `motion`, `react-icons`,
  `lucide-react` · `_ref/watermelon/src/data/contents/blocks/hero/`
  — 43 heros full-screen com navbar, headline animada, CTA-pílula e social links.
  **Adaptar:** copy/CTA/links, tokens de cor e a fonte de display; enxugue o intro de motion.
- 🔴 **Hero Liquid Metal** (+ irmãos `hero-dithering`, `hero-heatmap`, `hero-color-panel`,
  `hero-static-radial-gradient`) — *cult-ui* · deps: `@paper-design/shaders-react` ·
  `_ref/cult-ui/apps/www/registry/default/ui/hero-liquid-metal.tsx`
  — hero split com painel shader WebGL (metal líquido) + CTA + badges de stack.
  **Adaptar:** `colorBack`/`colorTint` do shader e a copy/CTA (usa Button+Badge do shadcn).
- 🟢 **CTA blocks (`cta-1` … `cta-5`)** — *watermelon* · deps: — · `_ref/watermelon/src/data/contents/blocks/cta/`
  — seções de conversão com blob gradiente em `clip-path`, ícone, título e botão.
  **Adaptar:** copy, link do botão, cor do blob (a superfície `primary/10` segue seu token).
- 🟢 **Pricing blocks (`pricing-1` … `pricing-5`)** — *watermelon* · deps: `react-icons`,
  `lucide-react` · `_ref/watermelon/src/data/contents/blocks/pricing/`
  — planos em cards, checklist de features, badge e plano recomendado em destaque.
  **Adaptar:** dados dos planos, tier em destaque e cor de acento.
- 🟢 **Feature blocks (`feature-1` … `feature-5`)** — *watermelon* · deps: `react-icons` ·
  `_ref/watermelon/src/data/contents/blocks/feature/`
  — seções de destaque de feature pareando ícone-card + copy de benefício, layout editorial.
- 🟢 **Stats blocks (`stats-1` … `stats-4`)** — *watermelon* · deps: `react-icons` ·
  `_ref/watermelon/src/data/contents/blocks/stats/`
  — vitrine de métricas com ícones de rating, marcas e ênfase numérica animada.
- 🟢 **Footer blocks (`footer-1` … `footer-31`)** — *watermelon* · deps: `lucide-react` ·
  `_ref/watermelon/src/data/contents/blocks/footer/`
  — 31 footers: de link-row minimal a sitemap multi-coluna com newsletter e social.
- 🟢 **Login / Signup blocks (`login-01..05`, `signup-01..05`)** — *shadcn-ui* · deps: `radix-ui` ·
  `_ref/shadcn-ui/apps/v4/registry/new-york-v4/blocks/login-03/`
  — páginas de auth (card central, painel-imagem split, fundo mudo). As variantes split
  (`login-02/04`) já entregam layout premium imagem+form de conversão.
- 🔴 **Dashboard-01 block** — *shadcn-ui* · deps: `recharts`, `@dnd-kit/*`, `@tanstack/react-table` ·
  `_ref/shadcn-ui/apps/v4/registry/new-york-v4/blocks/dashboard-01/`
  — dashboard completo: app-sidebar colável, KPI section-cards, area chart interativo e
  data-table sortável (dnd-kit). **Reuse** o grid de section-cards como bento e a data-table sozinha.
- 🟢 **Navigation blocks (`navigation-1` … `navigation-7`)** — *watermelon* · deps: `radix-ui`,
  `lucide-react` · `_ref/watermelon/src/data/contents/blocks/navigation/`
  — navbars responsivas com dropdown, badges e drawer mobile (Sheet + accordion).

---

## 2. Bento

- 🔴 **MagicBento** — *react-bits* · deps: `gsap` · `_ref/react-bits/src/ts-default/Components/MagicBento/MagicBento.tsx`
  — bento **sem buraco** com spotlight do cursor, glow de partícula, border-glow e tilt no hover.
  **Adaptar:** `cardData`, `glowColor` para o acento; ligue/desligue `enableStars/enableTilt/enableMagnetism`.
- 🟢 **BentoGrid** — *lightswind* · deps: — · `_ref/lightswind/Components/bento-grid.tsx`
  — bento responsivo gapless a partir de um array `cards[]` (título, descrição, ícone, node de fundo, span).
  **Adaptar:** array de cards, `columns`/`rowHeight` e `className` de span por card. **O bento "seguro" default.**
- 🔴 **Bento grids (`bento-01`, `bento-02`)** — *watermelon* · deps: `motion`, `@hugeicons/*` ·
  `_ref/watermelon/src/data/contents/blocks/bento/`
  — grids gapless com cards inset-shadow, cluster de avatares, ícones animados e célula de mapa inline.

---

## 3. Botão

- 🟢 **StarBorder** — *react-bits* · deps: — · `_ref/react-bits/src/ts-default/Animations/StarBorder/StarBorder.tsx`
  — pílula com glow de "estrela cadente" percorrendo a borda (CSS puro). **Adaptar:** `color`,
  `speed`, o elemento `as` (button/a) e recolorir a superfície interna.
- 🟢 **texture-button** — *cult-ui* · deps: `@radix-ui/react-slot` · `_ref/cult-ui/apps/www/registry/default/ui/texture-button.tsx`
  — botão com gradiente/borda em camadas (primary/accent/destructive/secondary/minimal/icon), look inset tátil.
  **Adaptar:** stops `from/to` por variante. Tailwind+CVA, funciona light/dark.
- 🟢 **cosmic-button** — *cult-ui* · deps: — · `_ref/cult-ui/apps/www/registry/default/ui/cosmic-button.tsx`
  — borda de gradiente cônico girando no hover. **Adaptar:** precisa colar os keyframes `cosmic-spin` no CSS global; recolorir o cônico.
- 🟢 **bg-animate-button** — *cult-ui* · deps: — · `_ref/cult-ui/apps/www/registry/default/ui/bg-animate-button.tsx`
  — presets de fundo animado (gooey, shine, rotate…). **Adaptar:** escolher preset + cor e trocar o label.
- 🔴 **metal-button** — *cult-ui* · deps: `metal-fx` (WebGL) · `_ref/cult-ui/apps/www/registry/default/ui/metal-button.tsx`
  — Button do shadcn dentro de um anel "metal líquido" animado. **Adaptar:** label/ícone; ajustar shader via `metalFxClassName`.
- 🟢 **GradientButton** — *lightswind* · deps: — · `_ref/lightswind/Components/gradient-button.tsx`
  — borda/fill de gradiente cônico multi-stop + halo de glow opcional; sizes sm–xl, outline/ghost.
  **Adaptar:** `gradientColors[]`, `animationSpeed`, `glowEffect`. CSS puro.
- 🔴 **MagneticButton** — *lightswind* · deps: `framer-motion` · `_ref/lightswind/Components/magnetic-button.tsx`
  — conteúdo puxado ao cursor com spring (magnético). **Adaptar:** stiffness/strength do spring; envolve qualquer CTA.
- 🟢 **ShimmerButton** — *watermelon* · deps: — · `_ref/watermelon/src/data/contents/animated-components/shimmer-button/base.tsx`
  — varredura de luz translúcida no hover, só transform (sem timers JS). **Adaptar:** tokens bg/text e a cor `via-white/20`; duração ~700ms.
- 🔴 **MorphingButton** — *watermelon* · deps: `motion`, `react-icons` · `_ref/watermelon/src/data/contents/animated-components/morphing-button/original.tsx`
  — botão que morfa em painel de confirmação/notificação no clique. **Adaptar:** ícone, labels, conteúdo expandido; spring.
- 🟢 **Button** (primitivo) — *shadcn-ui* · deps: `class-variance-authority`, `radix-ui` ·
  `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/button.tsx`
  — botão polimórfico, 6 variantes × 8 sizes, `asChild` via Radix Slot. **A fundação** — o mapa CVA é o ponto único de restyle.
- 🟢 **Badge / pílula** — *shadcn-ui* · deps: `class-variance-authority`, `radix-ui` ·
  `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/badge.tsx`
  — pílula/tag com 6 variantes e `asChild` (vira link). Use para eyebrow de hero, tag "New", status chips.

---

## 4. Card

- 🟢 **SpotlightCard** — *react-bits* · deps: — · `_ref/react-bits/src/ts-default/Components/SpotlightCard/SpotlightCard.tsx`
  — spotlight radial que segue o cursor via CSS var. Muito leve. **Adaptar:** `spotlightColor` + conteúdo. Ótimo p/ feature/pricing.
- 🟢 **texture-card** — *cult-ui* · deps: — · `_ref/cult-ui/apps/www/registry/default/ui/texture-card.tsx`
  — sistema de card (root/header/title/body/footer) com fundo de ruído sutil e chrome de borda dupla.
- 🟢 **minimal-card** — *cult-ui* · deps: — (`next/image`) · `_ref/cult-ui/apps/www/registry/default/ui/minimal-card.tsx`
  — card editorial imagem-no-topo (image/title/description) com inner-shadow suave. **Nota:** usa `next/image` (específico de Next).
- 🟢 **MagicCard** — *lightswind* · deps: — · `_ref/lightswind/Components/magic-card.tsx`
  — reveal de blur (filtro SVG) que segue o cursor, "spotlightando" o conteúdo. Barato p/ grids.
- 🟢 **GlowingCards** — *lightswind* · deps: — · `_ref/lightswind/Components/glowing-cards.tsx`
  — container + cards onde um glow radial rastreia o mouse por todo o grupo, `glowColor` por card. Bom p/ feature/pricing rows.
- 🟢 **Card** (primitivo) — *shadcn-ui* · deps: — · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/card.tsx`
  — shell composável (Header/Title/Description/Action/Content/Footer) com container-queries. **Base ideal p/ tiles de bento e feature cards.**
- 🔴 **TiltedCard** — *react-bits* · deps: `motion` · `_ref/react-bits/src/ts-default/Components/TiltedCard/TiltedCard.tsx`
  — tilt 3D em perspectiva no hover com spring + caption/overlay opcional.
- 🔴 **CardSwap** — *react-bits* · deps: `gsap` · `_ref/react-bits/src/ts-default/Components/CardSwap/CardSwap.tsx`
  — cards empilhados que ciclam/trocam em 3D. Ótimo p/ mostrar features/produto num canto do hero.
- 🔴 **cutout-card** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/cutout-card.tsx`
  — card imagem com cantos entalhados, motion no hover, labels/pins inset e camada de ações reveladas. Usa `next/image`.
- 🔴 **CardSwipe** — *watermelon* · deps: `motion` · `_ref/watermelon/src/data/contents/animated-components/card-swipe/original.tsx`
  — pilha estilo Tinder, drag com rotação/opacity mapeadas à distância, swipe-to-advance.
- 🔴 **RevealingCards** — *watermelon* · deps: `framer-motion` · `_ref/watermelon/src/data/contents/animated-components/revealing-cards/original.tsx`
  — pilha sobreposta arrastável: puxar um card revela as camadas atrás.
- 🔴 **WigglingCards** — *watermelon* · deps: `motion` · `_ref/watermelon/src/data/contents/animated-components/wiggling-cards/original.tsx`
  — grupo com micro-motion de "wiggle" contínuo + pop no hover.

---

## 5. Marquee / logo loop / carrossel

- 🟢 **LogoLoop** — *react-bits* · deps: — · `_ref/react-bits/src/ts-default/Animations/LogoLoop/LogoLoop.tsx`
  — marquee de logos infinito e seamless com fade nas bordas, pause-on-hover, direção/velocidade ajustáveis. **Sem lib.**
  **Adaptar:** array de logos (node ou img), `speed`/`direction`, `logoHeight`, `gap`, cor do `fadeOut`.
- 🟢 **SlidingLogoMarquee** — *lightswind* · deps: `lucide-react` · `_ref/lightswind/Components/sliding-logo-marquee.tsx`
  — marquee de logos/depoimentos com blur nas bordas, pause-on-hover, play/pause, horizontal ou vertical.
- 🟢 **Carousel** (primitivo) — *shadcn-ui* · deps: `embla-carousel-react` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/carousel.tsx`
  — carrossel acessível h/v com teclado + prev/next (Embla). Plugin `embla-carousel-autoplay` → feel de marquee.
- 🔴 **ScrollVelocity** — *react-bits* · deps: `motion` · `_ref/react-bits/src/ts-default/TextAnimations/ScrollVelocity/ScrollVelocity.tsx`
  — texto/linhas que rolam e distorcem (skew) conforme a velocidade do scroll. Cabeçalho editorial disruptivo.
- 🔴 **TextScrollMarquee** — *lightswind* · deps: `framer-motion`, `@motionone/utils` · `_ref/lightswind/Components/text-scroll-marquee.tsx`
  — marquee de texto reativo à velocidade do scroll (`baseVelocity`, `direction`).
- 🔴 **logo-carousel** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/logo-carousel.tsx`
  — parede de logos que embaralha SVGs em N colunas com fade/scale escalonado. Data-driven.
- 🔴 **Marquee testimonial row** — *watermelon* · deps: `motion` · `_ref/watermelon/src/data/contents/templates/landing-01/landing/testimonial.tsx`
  — marquee horizontal infinito de depoimentos (array duplicado, x 0%→-50%) com cards de vidro.

---

## 6. Background / 3D / shader

> ⚠️ A maioria aqui é **pesada** (WebGL). Ver §18 para equivalentes leves. Regra do kit:
> `backdrop-blur` só em fixed/sticky, e só um motor de animação por elemento.

- 🟢 **ShaderBackground** — *lightswind* · deps: — (WebGL2 cru) · `_ref/lightswind/Components/shader-background.tsx`
  — fragment-shader GLSL fullscreen (plasma estilo Shadertoy) com influência do mouse e uniform `u_color`. **Leve** (sem lib, é GPU).
- 🟢 **grid-beam** — *cult-ui* · deps: — · `_ref/cult-ui/apps/www/registry/default/ui/grid-beam.tsx`
  — feixes de luz viajando sobre um grid em canvas, com presets de paleta, divisores SVG e hook headless `useGridBeam`. **Sem lib gráfica pesada.**
- 🟢 **Globe** — *lightswind* · deps: `cobe` (~5kb) · `_ref/lightswind/Components/globe.tsx`
  — globo WebGL pontilhado rotativo com markers e cores por-hex. `cobe` é minúsculo. Drag-to-spin.
- 🔴 **Aurora** — *react-bits* · deps: `ogl` · `_ref/react-bits/src/ts-default/Backgrounds/Aurora/Aurora.tsx`
  — fita de aurora/gradiente fluindo em WebGL. Backdrop premium escuro. **Adaptar:** `colorStops`, amplitude/blend/speed; baixa opacidade atrás do conteúdo.
- 🔴 **Particles** — *react-bits* · deps: `ogl` · `_ref/react-bits/src/ts-default/Backgrounds/Particles/Particles.tsx`
  — campo de partículas flutuante reativo ao mouse. **Adaptar:** `particleColors`, count, size, speed; `moveParticlesOnHover`.
- 🔴 **LightRays** — *react-bits* · deps: `ogl` · `_ref/react-bits/src/ts-default/Backgrounds/LightRays/LightRays.tsx`
  — raios de luz direcionais animados de uma origem configurável. Hero atmosférico.
- 🔴 **Beams** — *react-bits* · deps: `three`, `@react-three/fiber`, `@react-three/drei` · `_ref/react-bits/src/ts-default/Backgrounds/Beams/Beams.tsx`
  — feixes de luz volumétricos / god-rays em cena Three.js. Hero cinematográfico.
- 🔴 **DotGrid** — *react-bits* · deps: `gsap`, `gsap/InertiaPlugin` · `_ref/react-bits/src/ts-default/Backgrounds/DotGrid/DotGrid.tsx`
  — grid de pontos interativo que se espalha com inércia no hover/click. Superfície de motion minimalista.
- 🔴 **PlasmaGlobe** — *lightswind* · deps: `ogl` · `_ref/lightswind/Components/plasma-globe.tsx`
  — globo de plasma/energia animado num triângulo fullscreen (shader). Centro de hero escuro.
- 🔴 **canvas-fractal-grid** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/canvas-fractal-grid.tsx`
  — dot-grid fullscreen em canvas com gradiente animado e distorção de onda/ripple no mouse. (Variante bg: `bg-animated-fractal-dot-grid`.)
- 🔴 **shader-lens-blur** — *cult-ui* · deps: `three`, `jotai`, `motion` · `_ref/cult-ui/apps/www/registry/default/ui/shader-lens-blur.tsx`
  — fragment-shader fullscreen (three.js cru) com lens-blur e distorção reativa ao hover. Theme-aware.
- 🔴 **ShaderGradientCanvas** — *shadergradient* · deps: `@react-three/fiber`, `three` · `_ref/shadergradient/packages/shadergradient/src/ShaderGradientCanvas.tsx`
  — wrapper `<Canvas>` R3F que monta a cena WebGL com lazy-load (IntersectionObserver), `pixelDensity`/`fov`.
- 🔴 **ShaderGradient** — *shadergradient* · deps: `@react-three/fiber`, `three`, `query-string` · `_ref/shadergradient/packages/shadergradient/src/ShaderGradient/ShaderGradient.tsx`
  — o renderer principal do mesh-gradient 3D: `color1-3`, `type` (plane/sphere/waterPlane), `uSpeed/uStrength/uDensity`; ou `control='query'` + `urlString` do shadergradient.co.
- 🔴 **FramerShaderGradient** — *shadergradient* · deps: `framer`, `@react-three/fiber`, `three` · `_ref/shadergradient/packages/shadergradient/src/FramerShaderGradient.tsx`
  — wrapper para Framer (property controls). Fora do Framer, use `ShaderGradient` direto.
- 🔴 **ShaderGradientStateless** — *shadergradient* · deps: `zustand`, `framer` · `_ref/shadergradient/packages/ui/src/components/Shared/ShaderGradientStateless/ShaderGradientStateless.tsx`
  — versão com store (zustand) semeada por query params; o motor por trás de shadergradient.co/customize. Só quando quiser gradiente editável/compartilhável por URL.

---

## 7. Gradiente

- 🟢 **AuroraBackground** — *lightswind* · deps: — · `_ref/lightswind/Components/aurora-background.tsx`
  — folha de aurora/gradiente fullscreen por keyframes CSS + cônicos repetidos, envolve `children`. **Adaptar:** stops via CSS var; `showRadialGradient` p/ máscara spotlight. **Alternativa leve ao ShaderGradient.**
- 🔴 **bg-animated-gradient** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/bg-animated-gradient.tsx`
  — fundo radial/linear que cicla suavemente entre stops configuráveis. Atrás de qualquer hero/section.
- 🟢 **presets** — *shadergradient* · deps: — · `_ref/shadergradient/packages/shadergradient/src/presets.ts`
  — 10 looks prontos (Halo, Pensive, Mint, Interstella, Nighty night, Viola, Universe, Sunset, Mandarin, Cotton Candy) como objetos de props. Espalhe `{...presets.mint.props}` e sobrescreva `color1-3`.
- 🔴 **Shaders (`defaults`/`positionMix`/`cosmic`/`glass`)** — *shadergradient* · deps: `three` · `_ref/shadergradient/packages/shadergradient/src/shaders/index.ts`
  — conjuntos GLSL por shape; `cosmic` (holográfico/nebula) e `glass` (transmissão/refração — look "liquid glass").

---

## 8. Texto animado

- 🟢 **AuroraTextEffect** — *lightswind* · deps: — · `_ref/lightswind/Components/aurora-text-effect.tsx`
  — heading display preenchido por blobs de cor de aurora animados + blur, 100% CSS. **Adaptar:** 4 stops, `fontSize`, `blurAmount`.
- 🟢 **gradient-heading** — *cult-ui* · deps: `@radix-ui/react-slot` · `_ref/cult-ui/apps/www/registry/default/ui/gradient-heading.tsx`
  — heading com texto em gradiente (`bg-clip`), escalas de size/weight/variant via CVA, polimórfico. CSS puro, sem runtime.
- 🔴 **SplitText** — *react-bits* · deps: `gsap`, `gsap/ScrollTrigger`, `gsap/SplitText` · `_ref/react-bits/src/ts-default/TextAnimations/SplitText/SplitText.tsx`
  — quebra o heading em chars/words/lines e escalona a entrada no scroll. **Adaptar:** `splitType`, keyframes from/to, `stagger`, `threshold`. (Combina com a skill `scroll-cinematic`.)
- 🔴 **text-animate** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/text-animate.tsx`
  — reveal por caractere com 8 presets (fadeInUp, popIn, rollIn, whipIn, calmInUp…), dispara in-view.
- 🔴 **RotatingText** — *react-bits* · deps: `motion` · `_ref/react-bits/src/ts-default/TextAnimations/RotatingText/RotatingText.tsx`
  — cicla uma lista de palavras no lugar com enter/exit por caractere escalonado.
- 🔴 **typewriter** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/typewriter.tsx`
  — digita/apaga uma lista rotativa de strings com cursor piscando.
- 🔴 **ShinyText** — *react-bits* · deps: `motion` · `_ref/react-bits/src/ts-default/TextAnimations/ShinyText/ShinyText.tsx`
  — varredura de brilho sobre os glifos. Eyebrow/label premium. *(lightswind tem um equivalente, ver abaixo.)*
- 🔴 **ShinyText** — *lightswind* · deps: `framer-motion` · `_ref/lightswind/Components/shiny-text.tsx`
  — shine por máscara de gradiente (variant framer-motion). Ideal p/ eyebrow/label.
- 🔴 **CountUp** — *lightswind* · deps: `framer-motion` · `_ref/lightswind/Components/count-up.tsx`
  — número que anima de 0 ao alvo ao entrar em view, com prefix/suffix, decimais, separador. Ótimo p/ linhas de stats/métrica.

---

## 9. Scroll-effect

> Para scroll cinematográfico completo (pin, scroll-vídeo, parallax, Lenis), a fonte
> oficial do kit é a skill **`scroll-cinematic`** (GSAP + ScrollTrigger + Lenis). Estes são
> pontos de partida prontos.

- 🟢 **ScrollStack** — *lightswind* · deps: — · `_ref/lightswind/Components/scroll-stack.tsx`
  — cards que fixam e empilham/escalam no scroll (matemática de scroll pura, **sem GSAP**). **Adaptar:** array de cards, `cardHeight`/`scrollPerCard`; troque as URLs Pexels default.
- 🟢 **useInView** — *shadergradient* · deps: — · `_ref/shadergradient/packages/shadergradient/src/hooks/useInView.ts`
  — hook IntersectionObserver minúsculo (retorna `isInView` + ref). Reutilize p/ lazy-mount de qualquer seção cara. `threshold`/`rootMargin`.
- 🔴 **ScrollStack** — *react-bits* · deps: `lenis` · `_ref/react-bits/src/ts-default/Components/ScrollStack/ScrollStack.tsx`
  — cards que fixam e empilham no scroll com Lenis (reveal estilo Apple). `itemDistance`, `stackPosition`, `scaleEndPosition`, blur.
- 🔴 **ScrollIsland** — *watermelon* · deps: `motion`, `react-use-measure` · `_ref/watermelon/src/data/contents/animated-components/scroll-island/original.tsx`
  — widget dynamic-island que portala ao topo, rastreia o progresso do scroll e expande num sumário. **Remova** o guard de `pathname` hardcoded.

---

## 10. Navegação (dock · island · menu · command · tabs · sidebar)

- 🟢 **Navigation Menu** — *shadcn-ui* · deps: `radix-ui`, `class-variance-authority` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/navigation-menu.tsx`
  — mega-menu / top-nav Radix com dropdowns animados. A espinha do header de site.
- 🟢 **Tabs** — *shadcn-ui* · deps: `radix-ui`, `class-variance-authority` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/tabs.tsx`
  — tabs Radix com pílula ativa animada. Toggle de pricing, switcher de features, conteúdo segmentado.
- 🟢 **Command (⌘K)** — *shadcn-ui* · deps: `cmdk`, `radix-ui` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/command.tsx`
  — command palette / menu buscável com fuzzy filter, grupos e atalhos; inclui `CommandDialog` (overlay ⌘K).
- 🟢 **Sidebar** — *shadcn-ui* · deps: `radix-ui`, `class-variance-authority` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/sidebar.tsx`
  — sistema completo de app-sidebar colável: provider + estado persistido em cookie, fallback mobile (Sheet), rail, modo icon-collapse e 20+ subpartes.
- 🔴 **Dock (macOS)** — *react-bits* · deps: `motion` · `_ref/react-bits/src/ts-default/Components/Dock/Dock.tsx`
  — dock com magnify-on-hover (spring) e labels. Barra flutuante de app/nav.
- 🔴 **dock** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/dock.tsx`
  — dock estilo macOS com ícones magnificados por spring via context compartilhado.
- 🔴 **Dock** — *lightswind* · deps: `framer-motion` · `_ref/lightswind/Components/Dock.tsx`
  — dock magnificador por proximidade do cursor (motion values).
- 🔴 **Dock (macOS)** — *watermelon* · deps: `motion`, `@hugeicons/*` · `_ref/watermelon/src/data/contents/animated-components/dock/original.tsx`
  — dock com magnify-on-hover; troque o icon set e os dados.
- 🔴 **dynamic-island** — *cult-ui* · deps: `motion` · `_ref/cult-ui/apps/www/registry/default/ui/dynamic-island.tsx`
  — Dynamic Island iOS: pílula que morfa entre estados compact/expanded com shared-layout spring + state machine.

---

## 11. Loader / skeleton

- 🟢 **Skeleton** — *shadcn-ui* · deps: — · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/skeleton.tsx`
  — placeholder de carregamento (div com `animate-pulse`, `bg-accent`). Componha na forma do conteúdo real. Zero-dep.
- 🟢 **Spinner** — *shadcn-ui* · deps: `lucide-react` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/spinner.tsx`
  — spinner acessível (`role=status`). **Nota do kit:** troque o ícone Lucide por Iconsax/Phosphor (regra `CLAUDE.md` §4).
- 🟢 **Meteors** — *lightswind* · deps: — · `_ref/lightswind/Components/meteors.tsx`
  — campo de "meteoros" CSS/JS com delays aleatórios + partículas de splash no impacto. Atrás de um hero.

---

## 12. Form / input

- 🟢 **Form** — *shadcn-ui* · deps: `react-hook-form`, `radix-ui` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/form.tsx`
  — camada de integração com react-hook-form (FormField/Item/Label/Control/Message) que fia validação, ids e aria. **Adaptar:** resolver zod/valibot + schema.
- 🟢 **Input OTP** — *shadcn-ui* · deps: `input-otp` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/input-otp.tsx`
  — input de código OTP com caret animado, slots por dígito e separadores. Verificação/2FA de conversão.
- *(Login/Signup blocks completos → ver §1.)*

---

## 13. Cursor

- 🔴 **TargetCursor** — *react-bits* · deps: `gsap` · `_ref/react-bits/src/ts-default/Animations/TargetCursor/TargetCursor.tsx`
  — retículo/mira custom que "encaixa" os cantos em elementos marcados com uma classe alvo. **Adaptar:** `targetSelector`, `spinDuration`, cor.
- 🔴 **SmoothCursor** — *lightswind* · deps: `framer-motion` · `_ref/lightswind/Components/smooth-cursor.tsx`
  — cursor custom com spring que rotaciona na direção do movimento. Monte uma vez no root.

---

## 14. Image-effect

- 🟢 **GlareHover** — *react-bits* · deps: — · `_ref/react-bits/src/ts-default/Animations/GlareHover/GlareHover.tsx`
  — varredura de brilho diagonal no hover; CSS puro; funciona em cards, imagens, botões. **Adaptar:** `glareColor`, `glareSize`, duração.
- 🟢 **distorted-glass** — *cult-ui* · deps: — · `_ref/cult-ui/apps/www/registry/default/ui/distorted-glass.tsx`
  — faixa glassmorphism com filtro SVG fractal-noise que distorce/borra a fronteira entre duas seções. CSS + SVG, sem custo de runtime JS.
- 🟢 **dither-image** — *cult-ui* · deps: `dither-plugin` (util Tailwind) · `_ref/cult-ui/apps/www/registry/default/ui/dither-image.tsx`
  — figura Next.js com dither Bayer só-CSS (Safari-safe) e overlays de reveal parcial.
- 🟢 **ImageTrailEffect** — *lightswind* · deps: — · `_ref/lightswind/Components/image-trail-effect.tsx`
  — rastro que spawna e desvanece uma sequência de imagens conforme o cursor move (refs puros).
- 🔴 **CircularGallery** — *react-bits* · deps: `ogl` · `_ref/react-bits/src/ts-default/Components/CircularGallery/CircularGallery.tsx`
  — galeria WebGL curva, arrastável, com bend/curvatura e inércia. Vitrine de portfólio disruptiva.
- 🔴 **RadialCarousel** — *watermelon* · deps: `motion`, `lucide-react` · `_ref/watermelon/src/data/contents/animated-components/radial-carousel/original.tsx`
  — carrossel de imagens em arco/radial com detail view fullscreen expansível.
- 🔴 **PostProcessing (Halftone/grain)** — *shadergradient* · deps: `three` · `_ref/shadergradient/packages/shadergradient/src/ShaderGradient/PostProcessing/PostProcessing.tsx`
  — pass do EffectComposer que adiciona halftone/grain RGB sobre o gradiente. Toggle `grain='on'`.

---

## 15. Overlays & utilitários

- 🟢 **Accordion** — *shadcn-ui* · deps: `radix-ui`, `lucide-react` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/accordion.tsx`
  — accordion Radix animado (keyframes up/down) + chevron rotativo. O primitivo de FAQ/disclosure. **Nota:** exige os keyframes de accordion no seu `globals`.
- 🟢 **Dialog** — *shadcn-ui* · deps: `radix-ui` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/dialog.tsx`
  — modal Radix com fade/zoom, portal e botão de fechar. Base p/ modal de signup, lightbox de vídeo, confirmação.
- 🟢 **Drawer** — *shadcn-ui* · deps: `vaul` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/drawer.tsx`
  — drawer bottom/side (Vaul) com drag-to-dismiss. Contraparte mobile do Dialog: nav mobile, painel de filtros.
- 🟢 **Sonner Toaster** — *shadcn-ui* · deps: `sonner`, `next-themes`, `lucide-react` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/sonner.tsx`
  — host de toast pré-tematizado (Sonner) sincronizado com next-themes. **Nota:** troque o icon set (o kit bane Lucide grosso).
- 🔴 **Chart (ChartContainer + Tooltip/Legend)** — *shadcn-ui* · deps: `recharts` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/ui/chart.tsx`
  — wrapper Recharts theme-aware: injeta CSS color vars por série a partir de um `ChartConfig`, + Tooltip/Legend polidos. Base dos 70 exemplos.
- 🔴 **Chart types (area/bar/line/pie/radar/radial)** — *shadcn-ui* · deps: `recharts` · `_ref/shadcn-ui/apps/v4/registry/new-york-v4/charts/`
  — 70 receitas copy-paste em 6 famílias, cada uma um Card+chart autocontido. `chart-area-interactive.tsx` traz um Select de range reutilizável.
- 🔴 **BorderBeam** — *lightswind* · deps: `framer-motion` · `_ref/lightswind/Components/border-beam.tsx`
  — feixe de gradiente animado percorrendo a borda de qualquer pai (loop de transform). Dentro de um container relativo arredondado, acentua cards/botões.
- 🔴 **GooeyMenu** — *watermelon* · deps: `motion` · `_ref/watermelon/src/data/contents/animated-components/gooey-menu/original.tsx`
  — menu com filtro goo SVG que abre de uma pílula num painel de stats com merge líquido.
- 🔴 **DialogStack** — *watermelon* · deps: `motion`, `lucide-react` · `_ref/watermelon/src/data/contents/animated-components/dialog-stack/original.tsx`
  — sistema de modais empilhados com offset de profundidade que avançam por steps.
- 🔴 **WaveformScrub** — *watermelon* · deps: `framer-motion`, `react-icons` · `_ref/watermelon/src/data/contents/animated-components/waveform-scrub/original.tsx`
  — scrubber de waveform (áudio) com drag-to-seek e feedback de altura de barra animado.
- 🔴 **ShaderGradient — Materials / Geometry / Lights / CameraControl / useCameraAnimation / formatUrlString** — *shadergradient* · deps: `three`, `camera-controls`, `@react-spring/three`, `query-string` · `_ref/shadergradient/packages/shadergradient/src/ShaderGradient/`
  — peças internas do ShaderGradient (material GLSL via `onBeforeCompile`; geometrias plane/sphere/waterPlane; luzes/HDR env; controle de câmera com spring; util de query-string). Úteis para builds custom de gradiente 3D.

---

## 16. Registries instaláveis (PARTE B)

> Comandos **anotados, não executados**. Instale por componente, sob demanda, no projeto.

| Registry | Comando (1 componente) | Observação |
|---|---|---|
| **shadcn/ui** | `npx shadcn@latest add <nome>` | Ex.: `button carousel accordion`; blocks: `dashboard-01`, `login-03`; charts: `chart-area-interactive`. A fundação. |
| **React Bits** | `npx shadcn@latest add @react-bits/<Nome>-<Variante>` | Variante ∈ `JS-CSS \| JS-TW \| TS-CSS \| TS-TW`. Ex.: `@react-bits/Aurora-TS-TW`. Também via `jsrepo`. |
| **cult-ui** | `npx shadcn@latest add https://cult-ui.com/r/<nome>.json` | Ex.: `.../r/hero-liquid-metal.json`. `registryDependencies` puxam base do shadcn (button/badge/carousel). |
| **lightswind** | `npx lightswind@latest init` → `npx lightswind@latest add <nome>` | Nome = arquivo kebab-case (ex.: `globe`, `border-beam`). |
| **watermelon** | `npx shadcn@latest add https://registry.watermelon.sh/r/<nome>.json` | Ex.: `hero-1.json`, `dock.json`, `shimmer-button.json`. Alguns têm variante `{nome}-base.json` (Base-UI). |
| **ShaderGradient** | `npm i @shadergradient/react @react-three/fiber three three-stdlib camera-controls` | Pacote npm (não é registry). Import: `{ ShaderGradientCanvas, ShaderGradient }`. |
| **Skiper UI** | `npx shadcn add @skiper-ui/skiper40` | Efeitos/componentes prontos via registry (`@skiper-ui/<id>`). Ver `CATALOGO.md` §4.1. |
| **21st.dev** | `npx shadcn@latest add "https://21st.dev/r/<autor>/<componente>"` | Efeitos, temas e templates da comunidade. |

---

## 17. Galerias (PARTE C)

> **Não clonáveis em massa** — cada componente é copiado individualmente do site e
> **adaptado**. Registradas aqui como fonte (URL + categorias). Ref.: `CATALOGO.md` §4.2.

| Fonte | URL | Categorias / o que tem | Licença/nota |
|---|---|---|---|
| **Uiverse** | `uiverse.io` | `/buttons` `/cards` `/loaders` `/inputs` `/checkboxes` `/switches` `/forms` `/patterns` `/tooltips` `/elements` · `/design/` (design systems) | Comunidade **MIT**. Copie o CSS/Tailwind do elemento e adapte. |
| **Aceternity UI** | `ui.aceternity.com` | `/components` · `/templates` | React + **Framer Motion** + Tailwind (🔴). Parte grátis, parte pro. Recrie o efeito. |
| **Magic Pattern** | `magicpattern.design` | `/community` `/templates` `/community/packs` `/community/shapes` `/tools` | Geradores de padrão/gradiente/shape → exporta SVG/CSS. Ótimo p/ backgrounds/texturas. |
| **Lukacho UI** | `ui.lukacho.com` | `/components` · `/templates` | Copie e adapte. |
| **Sprint** | `sprrrint.com` | Library (`/whats-new`) | Referência de componentes. |
| **animmasterlib** | `animmasterlib.dev` | Componentes estilo **Awwwards** | Plano PRO barato (o usuário topa pagar se valer). Se assinar, baixar via método da doc e catalogar. |
| **Refero** | `styles.refero.design` | `/ai-agents/design-md-examples` · `/ai-agents/design-prompts` | Exemplos DESIGN.md + prompts de design. Complementa o pack de 73 marcas. |

---

## 18. Dependências pesadas → equivalentes mais leves

Marcadas 🔴 acima. Ao trazer para um projeto, prefira o mais leve que entregue o efeito —
e **nunca dois motores de animação no mesmo elemento** (`CLAUDE.md` §4).

| Lib pesada | Onde aparece | Quando vale | Equivalente mais leve |
|---|---|---|---|
| **three.js + @react-three/fiber (+drei/postprocessing)** | Beams, shader-lens-blur, **todo o shadergradient**, PlasmaGlobe | Só quando o "momento cinematográfico" 3D justifica o peso (1 por página) | **WebGL2 cru** (`ShaderBackground` lightswind, 🟢) · **`ogl`** (bem menor) · gradiente CSS (`AuroraBackground`, `bg-animated-gradient`) |
| **ogl** | Aurora, Particles, LightRays, CircularGallery, PlasmaGlobe | Backgrounds shader mais baratos que three | Canvas 2D p/ partículas simples · `AuroraBackground` (CSS) p/ aurora estática |
| **gsap (+ScrollTrigger/SplitText/Inertia)** | SplitText, DotGrid, CardSwap, MagicBento, TargetCursor | Scroll-driven e split de texto (é a stack da skill `scroll-cinematic`) | Skill **`animejs`** (split/stagger/timeline) · CSS `@keyframes` p/ loops simples · Web Animations API |
| **framer-motion / `motion`** | maioria de cult-ui/lightswind/watermelon | Layout/shared-element, spring físico, gestos (drag) | CSS transitions/`@keyframes` p/ hover/entrada · skill **`animejs`** p/ orquestração · WAAPI |
| **lenis** | ScrollStack (react-bits) | Smooth scroll global de site imersivo | Versão sem-Lenis existe (`ScrollStack` do **lightswind**, 🟢, só matemática de scroll) |
| **recharts** | Chart + 70 charts, Dashboard-01 | Dashboards/SaaS com muitos gráficos | SVG inline p/ 1-2 sparklines · skill **`ui-ux-pro-max`** (25 charts) p/ padrões |
| **matter-js** | listado no react-bits (física) | Física real (colisão/gravidade) | Só se o efeito exigir; senão spring de CSS/anime.js |
| **cobe** (~5kb) | Globe (lightswind) | Globo pontilhado | **Já é leve** — mantenha |
| **embla / vaul / cmdk / input-otp** | Carousel / Drawer / Command / Input OTP (shadcn) | Primitivos acessíveis | **Já são leves** — mantenha |

---

## 19. Top 10 mais reutilizáveis

Para os 4 estilos do `SISTEMA.md`: **premium · minimalista · conversão · disruptivo**.
Priorizei versatilidade e baixo peso (🟢 quando dá).

1. 🟢 **Primitivos shadcn/ui** — Button · Card · Badge · Accordion · Dialog · Tabs · Form —
   *shadcn-ui*. A fundação acessível de **todos** os estilos. O mapa CVA é o ponto de restyle.
2. 🟢 **BentoGrid** (lightswind) + 🔴 **MagicBento** (react-bits) — o "momento bento" sem buraco.
   *Premium · minimalista · conversão.* Use o BentoGrid (0-dep) por padrão; MagicBento quando quiser o glow.
3. 🟢 **LogoLoop** (react-bits, 0-dep) — marquee de logos / prova social seamless.
   *Conversão · premium.* Alternativa: `SlidingLogoMarquee` (lightswind).
4. 🟢 **SpotlightCard** / **GlowingCards** (0-dep) — cards de feature/pricing com glow no cursor.
   *Premium.* Base leve para as seções de valor.
5. 🟢 **AuroraBackground** (lightswind, CSS) / 🔴 **ShaderGradient** — backdrop de hero.
   *Premium · disruptivo.* Comece pelo CSS; suba pro WebGL só se o hero pedir o "wow".
6. 🔴 **SplitText** (react-bits/gsap) / **text-animate** (cult-ui/motion) — reveal de headline.
   *Premium · disruptivo.* Combina com a skill `scroll-cinematic`.
7. 🟢 **Blocos watermelon** — hero (43) · cta · pricing · feature · footer (31).
   *Conversão.* Esqueleto de landing inteira; troque copy/dados/tokens.
8. 🔴 **shadcn Charts** (recharts) — 70 receitas + wrapper theme-aware.
   *Premium SaaS / dashboard.* Casa com `ui-ux-pro-max`.
9. 🔴 **Dock** / **dynamic-island** (cult-ui) — interação-assinatura de produto.
   *Disruptivo · produto.* Um "elemento-assinatura" memorável (ver `design-director`).
10. 🟢 **Set de botões-CTA** — StarBorder · ShimmerButton · GradientButton (todos 0-dep).
    *Conversão.* O CTA primário com brilho/gradiente sem carregar lib de animação.

> Menções honrosas: **GlareHover** / **distorted-glass** (polish de imagem, 🟢),
> **CountUp** (linhas de stat), **Command ⌘K** (busca de produto),
> **Marquee testimonial** / **logo-carousel** (prova social).

---

*Gerado por `prompts/03-catalogar-componentes-externos.md` em 2026-07-01. Reclone os repos
com o mesmo prompt para atualizar. **Lembre-se: adaptar, nunca colar cru.***
