# Prompt 04 — Novo projeto (kickoff)

> Cole no Claude Code para iniciar qualquer site. Preencha os `<...>` e o `design-director`
> conduz o resto. Um template, todos os tipos de site.

---

**Prompt:**

```
Use o Frontend Studio Kit. Comece pelo agente design-director (.claude/agents/design-director.md),
siga o fluxo do CLAUDE.md e a receita correspondente no SISTEMA.md.

BRIEF
- Tipo de site: <profissional | institucional | minimalista | premium | SaaS | landing de vendas | portfólio | disruptivo>
- Negócio/segmento: <ex.: fintech B2B / estúdio de arquitetura / app de saúde / SaaS de logística>
- O que a página precisa fazer (1 objetivo): <vender | capturar lead | impressionar | informar | converter trial>
- Público: <quem vai ler>
- Tom/vibe: <ex.: sóbrio e confiável / ousado e cinematográfico / clean editorial>
- Referências (opcional): <marcas do pack (ver CATALOGO.md §3) ou links>
- Restrições: <stack (HTML puro / React+Next), fontes obrigatórias, cores da marca, etc.>
- Conteúdo real: <cole textos/dados reais se tiver; se não, me pergunte ou liste hipóteses — não invente dados>

ENTREGA ESPERADA
1. Passe de direção (design-director): arquétipo visual escolhido, par de fontes (via
   fonts-system/FONTES.md), elemento-assinatura, e quais skills vai combinar.
2. Estrutura de seções (marque 1-2 com "momento cinematográfico").
3. Código completo (full-output-enforcement: arquivos inteiros, sem placeholder), já com a
   skill de estilo aplicada, tipografia real, ícones de uma fonte só, macro-whitespace.
4. Motion via scroll-cinematic e/ou anime-motion (só transform/opacity, prefers-reduced-motion,
   mobile colapsa).
5. Passe de polish com impeccable e checklist final do SISTEMA.md.

Quero resultado de estúdio de ponta, não template genérico. Se faltar algo do brief,
liste as hipóteses que assumiu antes de codar.
```

---

**Atalhos úteis depois:**
- *"Gere um DESIGN.md pro projeto"* → skill `stitch-design-taste` (ou copie de `awesome-design-md/design-md/<marca>/`).
- *"Preciso das imagens de referência"* → `imagegen-frontend-web` (1 por seção).
- *"Faça o herói com scroll-vídeo"* → skill `scroll-cinematic` (técnica C) + Higgsfield (se MCP conectado).
- *"Revise o código"* → agente `clean-code-reviewer`.
