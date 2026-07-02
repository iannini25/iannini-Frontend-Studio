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
(awesome-design-md já está vendorado no kit em .claude/skills/awesome-design-md/)

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
