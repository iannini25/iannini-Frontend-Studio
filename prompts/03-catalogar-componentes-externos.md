# Prompt 03 — Catalogar componentes externos

> Cole no Claude Code para ele **clonar os repos open-source** e **registrar as galerias**
> num catálogo do projeto (`components-catalog.md` + pasta `_ref/`). Rode uma vez por
> máquina e reaproveite. Regra de ouro: **adaptar, nunca colar cru.**

---

**Prompt:**

```
Contexto: leia CATALOGO.md §4 (Fontes externas de componentes). Quero construir um catálogo
local de componentes de referência para adaptar aos meus projetos.

PARTE A — Open-source (clonar e estudar):
Clone (raso) para ./_ref/ e leia a estrutura de cada um, catalogando os componentes/efeitos
mais úteis (nome, o que faz, dependências, caminho do arquivo):
  git clone --depth 1 https://github.com/DavidHDev/react-bits          _ref/react-bits
  git clone --depth 1 https://github.com/nolly-studio/cult-ui          _ref/cult-ui
  git clone --depth 1 https://github.com/shadcn-ui/ui                   _ref/shadcn-ui
  git clone --depth 1 https://github.com/codewithMUHILAN/Lightswind-UI-Library _ref/lightswind
  git clone --depth 1 https://github.com/ruucm/shadergradient           _ref/shadergradient
  git clone --depth 1 https://github.com/WatermelonCorp/watermelon-platform _ref/watermelon
  git clone --depth 1 https://github.com/uiverse-io/galaxy              _ref/galaxy   (opcional: 3.802 snippets CSS)
(awesome-design-md já está vendorado no kit em .claude/skills/awesome-design-md/)

PARTE A.1 — Re-verificar (contar no filesystem, pós-clone; auditoria dos totais):
  react-bits:  for d in _ref/react-bits/src/content/*/; do echo "$d: $(ls $d|wc -l)"; done
  cult-ui:     ls _ref/cult-ui/apps/www/registry/default/ui | wc -l
  lightswind:  ls _ref/lightswind/Components/*.tsx | wc -l
  watermelon:  cat _ref/watermelon/src/data/contents/components/*/index.ts | grep -cE "id: ['\"]"
  shadcn:      ls _ref/shadcn-ui/apps/v4/registry/new-york-v4/ui | wc -l
Compare com o censo verificado (02/07/2026) em
  .claude/skills/component-libraries/reference/censo-verificado-2026-07.md
(referência: react-bits 134 · cult-ui 82 · lightswind 204 · watermelon 514+131 · shadcn 61 ui + 30 blocks).

PARTE B — Registries instaláveis (anote o comando, NÃO instale ainda):
  shadcn:   npx shadcn@latest add <componente>
  Skiper:   npx shadcn add @skiper-ui/skiper40   (e outros @skiper-ui/<id>)
  21st.dev: npx shadcn@latest add "https://21st.dev/r/<autor>/<componente>"

PARTE C — Galerias (copiar por componente do site; registrar como fonte):
Registre no catálogo estas fontes com URL e categorias (não são clonáveis em massa):
  Uiverse (uiverse.io) · Aceternity (ui.aceternity.com) · Magic Pattern (magicpattern.design)
  · Lukacho (ui.lukacho.com) · Sprint (sprrrint.com) · animmasterlib (animmasterlib.dev)
  · Refero (styles.refero.design).

Saída:
1. Gere ./components-catalog.md agrupado por tipo (hero, bento, botão, card, marquee,
   background/3D, gradiente, loader, form, navegação, scroll-effect, texto animado…). Para
   cada item: fonte, o que faz, dependências, como adaptar (o que trocar: cor/conteúdo/
   tipografia/motion), e caminho em _ref/ (ou URL, se for galeria).
2. Marque os que dependem de libs pesadas (three.js, framer-motion) e sugira equivalente
   mais leve quando fizer sentido.
3. Ao terminar, liste os 10 componentes/efeitos mais reutilizáveis para os estilos do
   SISTEMA.md (premium, minimalista, conversão, disruptivo).

IMPORTANTE: nada é colado cru nos projetos. Este catálogo é ponto de partida; ao usar um
componente, adapte ao design system do projeto (cor, conteúdo, tipografia, comportamento,
animação), mantendo a qualidade premium do original.
```

---

> Dica: adicione `_ref/` ao `.gitignore` do seu projeto se não quiser versionar os clones.
> O que importa versionar é o `components-catalog.md`.
