# SISTEMA.md — Roteador do Estúdio

Como combinar as skills e agentes para cada pedido. O agente `design-director` usa
este documento para montar o "time" certo. Você também pode citar uma receita direto:
*"use a receita Landing de Vendas do SISTEMA.md"*.

---

## 1. As camadas (mental model)

O estúdio tem **5 camadas**. Um bom site passa por todas, nesta ordem:

| Camada | O que decide | Skills/Agentes |
|---|---|---|
| **1. Direção** | público, arquétipo visual, fontes, assinatura | `design-director` (agente) → escolhe UMA skill de estilo |
| **2. Conhecimento** | paletas, pares de fonte, padrões, referência de marca | `ui-ux-pro-max`, `awesome-design-md` (74 marcas), `FONTES.md` |
| **3. Build** | o código em si | skill de estilo escolhida + `image-to-code` (se partir de imagem) |
| **4. Motion** | animação | `scroll-director`/`scroll-cinematic` (scroll/GSAP) · `anime-motion`/`animejs` (código) · `jitter/svgator/iconsax` (assets) |
| **5. Polish + QA** | craft, crítica, código limpo, completude | `design-critic` (executa `impeccable`), `copy-chief` (textos), `redesign-existing-projects`, `clean-code`+`clean-code-reviewer`, `full-output-enforcement` |

**Sempre ativas (transversais):** `full-output-enforcement` (nunca truncar) e
`clean-code` (todo código).

---

## 2. As skills de estilo (camada 1) — escolha UMA como base

Cada projeto ancora em **uma** direção estética. Não empilhe duas (viram ruído).

| Skill | Vibe | Melhor para |
|---|---|---|
| `high-end-visual-design` | Apple/Linear-tier, Double-Bezel, vidro OLED, molas | SaaS premium, tech, produto caro, "cara de agência $150k" |
| `gpt-taste` | Awwwards, AIDA, bento sem buraco, GSAP forte, editorial largo | Landing de conversão, marketing, sites com muito movimento |
| `minimalist-ui` | Editorial mono quente, flat, pastéis muram, sem gradiente | Institucional, docs, workspace, portfólio limpo, "clean premium" |
| `industrial-brutalist-ui` | Brutalista, tipografia crua, contraste alto | Disruptivo, cultural, arte, statement |
| `design-taste-frontend` | Anti-slop contextual (lê o brief e infere) | Quando não tem certeza do estilo — deixa a skill decidir |
| `scroll-cinematic` | Scrollytelling, scroll-vídeo, pin, parallax | Qualquer site que precise de "momento cinematográfico" |

> `design-taste-frontend` é o **coringa**: se o brief não fixa estilo, use-a — ela lê o
> brief e escolhe a direção (e pode terminar puxando as regras de uma das outras).

---

## 3. Receitas por tipo de projeto

Cada receita = pilha de skills na ordem de uso. `[+]` = adicione conforme o brief.

### Site profissional / institucional (limpo, confiável, mas não genérico)
```
Direção:  design-director → minimalist-ui (base)
Conhec.:  ui-ux-pro-max (paleta + par de fonte) · awesome-design-md (ex.: stripe, linear, notion)
Fontes:   fonts-system → serifa editorial + grotesk (ver FONTES.md "Institucional")
Build:    minimalist-ui (bento flat, 1px borders, macro-whitespace)
Motion:   scroll-cinematic (reveals sutis G + parallax leve) — SEM exagero
Polish:   impeccable (quieter) · clean-code
```

### Site premium (SaaS / produto tech / "cara de agência cara")
```
Direção:  design-director → high-end-visual-design (base)
Conhec.:  ui-ux-pro-max · awesome-design-md (ex.: vercel, framer, raycast, superhuman)
Fontes:   fonts-system → Geist/Clash Display + mono (ver FONTES.md "Premium/Tech")
Build:    high-end-visual-design (Double-Bezel, nav ilha de vidro, botão-no-botão)
Motion:   anime-motion (entradas com mola, magnetic hover) + scroll-cinematic (pin/parallax)
Imagem:   imagegen-frontend-web (1 comp por seção) se precisar de referência visual
Polish:   impeccable (craft/overdrive) · clean-code
```

### Landing page de vendas (conversão máxima)
```
Direção:  design-director → gpt-taste (base — já é AIDA)
Conhec.:  ui-ux-pro-max (paleta de alto contraste) · FONTES.md "Marketing"
Estrutura: AIDA (Atenção/Hero → Interesse/Bento → Desejo/GSAP → Ação/CTA+preço)
Build:    gpt-taste (hero 2-3 linhas, bento denso, CTAs duplos, marquee de prova social)
Motion:   scroll-cinematic (text-reveal scrub, pin, card stacking) + anime-motion (contadores)
Copy:     agente copy-chief + skill conversion-copywriting (diagnóstico de consciência/sofisticação, mecanismo nomeado, blueprint seção a seção)
Polish:   impeccable · full-output-enforcement (página inteira, todas as seções)
```

### Site extremamente disruptivo / "cara de designer" (statement, Awwwards)
```
Direção:  design-director → industrial-brutalist-ui OU high-end-visual-design + gpt-taste
Conhec.:  awesome-design-md (ex.: nike, spacex, playstation, x.ai) para linguagem ousada
Fontes:   fonts-system → display de fundição, variável/wonky (Fraunces, Clash, Zodiak)
Build:    o estilo escolhido, com 1-2 momentos cinematográficos fortes
Motion:   scroll-cinematic (scroll-vídeo em canvas — herói) + fio SVG (DrawSVG) + SplitText
Assets:   brandkit / imagegen se precisar de imagens art-directed; Higgsfield p/ scroll-vídeo
Polish:   impeccable (bolder/overdrive) · clean-code
```

### Portfólio
```
Direção:  design-director → design-taste-frontend (lê o brief) OU minimalist-ui
Conhec.:  awesome-design-md (ex.: raycast, superhuman); FONTES.md "Editorial"
Build:    galeria com pin horizontal (scroll-cinematic técnica D) + reveals
Motion:   scroll-cinematic + anime-motion (hover magnético nos projetos)
Polish:   impeccable · clean-code
```

### SaaS / Dashboard / app de produto
```
Nota:     design-taste-frontend é p/ landing/portfólio, NÃO p/ dashboard denso.
Direção:  ui-ux-pro-max (tem guidelines de produto, charts, stacks) + high-end-visual-design
Conhec.:  ui-ux-pro-max (25 tipos de chart, 13 stacks, UX guidelines) · awesome-design-md (linear, posthog, supabase)
Build:    high-end-visual-design p/ shell/marketing + ui-ux-pro-max p/ telas de produto
Motion:   anime-motion (transições FLIP de layout, micro-interações) — motion discreto
Polish:   impeccable · clean-code · clean-code-reviewer (código de produto = qualidade dura)
```

### Redesign de site/app existente
```
Direção:  redesign-existing-projects (auditoria primeiro — identifica padrões de IA genérica)
Conhec.:  awesome-design-md (referência da nova linguagem)
Build:    aplica o estilo-alvo SEM quebrar função; funciona com qualquer CSS/framework
Polish:   impeccable · clean-code
```

### Gerar só imagens (mockups/referências, sem código)
```
Web:      imagegen-frontend-web (1 imagem horizontal POR seção — 8 seções = 8 imagens)
Mobile:   imagegen-frontend-mobile (telas em moldura de iPhone)
Marca:    brandkit (boards de identidade, sistema de logo, deck de marca)
```

### Gerar DESIGN.md para o projeto (design system em markdown)
```
stitch-design-taste → gera DESIGN.md anti-genérico p/ o Claude Code (ou Google Stitch) seguir.
Alternativa: copie um DESIGN.md de awesome-design-md/design-md/<marca>/ e adapte.
```

---

## 4. Motion — qual sistema (regra dura)

| Preciso de… | Use |
|---|---|
| Scroll-vídeo (frames em canvas), pin, parallax, smooth scroll (Lenis), text-reveal no scroll | `scroll-cinematic` |
| Animação orquestrada por código: timeline, stagger, draggable, morph/draw SVG, split/scramble de texto, FLIP, partículas | `anime-motion` (agente) → `animejs` |
| Ícone animado pequeno (Lottie) | `iconsax-icons` |
| Ilustração/logo vetorial exportada do SVGator | `svgator-animations` |
| Vídeo/motion graphics do Jitter | `jitter-motion` |

`scroll-cinematic` (GSAP) e `animejs` (anime.js) **podem coexistir na mesma página** —
mas nunca no **mesmo elemento** (dois motores brigando por `transform`). Divida por
região: GSAP no herói/scroll, anime.js nas micro-interações.

---

## 5. Onde puxar componentes prontos (para adaptar, não copiar cru)

Use a skill **`component-libraries`** — ela dispara sozinha quando você precisar de um
componente/efeito pronto e diz **qual biblioteca tem o quê** (índice por caso de uso, com
nomes reais e comandos reais de instalação): React Bits, Cult UI, Lightswind,
ShaderGradient e shadcn/ui. Registro completo de todas as fontes (incl. galerias não
clonáveis: Uiverse, Aceternity, 21st, Magic Pattern…) em `CATALOGO.md` §"Fontes externas
de componentes". Para clonar os repos e estudar o código localmente:
`prompts/03-catalogar-componentes-externos.md`. **Sempre adapte** ao design system do
projeto — nunca cole o componente cru.

---

## 6. Checklist final (todo projeto, antes de entregar)

- [ ] Passou pela camada de **Direção** (não caiu no default genérico)
- [ ] Nenhuma fonte banida (Inter/Roboto/Arial) como display; fontes via `fonts-system`
- [ ] Uma fonte de ícones só; sem emoji de UI
- [ ] Macro-whitespace (seções respirando, `py-24`+)
- [ ] Motion só em `transform`/`opacity`; `prefers-reduced-motion` respeitado
- [ ] Mobile colapsa (assimetrias → `w-full`, `100dvh` no lugar de `100vh`)
- [ ] Passou pelo checklist da skill de estilo usada
- [ ] `clean-code` (varreu odores) + `full-output-enforcement` (arquivos inteiros)
- [ ] Impressão final: "estúdio de ponta", não "template com fonte bonita"
