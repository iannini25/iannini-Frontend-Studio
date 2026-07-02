# Prompt 01 — Instalar / atualizar as skills do GitHub

> Cole no Claude Code (terminal do VS Code) num projeto novo, se quiser reinstalar as
> skills do zero ou atualizá-las. **Não é obrigatório** — o kit já vem com todas as skills
> dentro de `.claude/skills/`. Use isto só para puxar versões novas ou reconstruir o lock.

---

**Prompt:**

```
Contexto: este projeto usa o Frontend Studio Kit. As skills que vieram do GitHub estão
rastreadas em skills-lock.json (gerenciado pelo CLI `npx skills`). As skills locais
(animejs, clean-code, iconsax-icons, jitter-motion, svgator-animations, scroll-cinematic,
fonts-system) NÃO entram no lock e já estão em .claude/skills/.

Tarefa:
1. Leia skills-lock.json e liste as skills do GitHub e suas fontes.
2. Para (re)instalar/atualizar todas de uma vez, rode no terminal:
   npx skills install
   (isso lê o lock e instala em .claude/skills/, criando os symlinks conforme a convenção do CLI)
3. Se eu quiser adicionar uma nova skill do GitHub:
   npx skills add <owner/repo>
   (atualiza o lock e instala sozinho)
4. Ao terminar, confirme quais skills existem em .claude/skills/ e compare com o lock,
   apontando qualquer divergência.

Não remova nem sobrescreva as skills locais listadas acima.
```

---

**Fontes rastreadas no lock (para referência):**
- `Leonxlnx/taste-skill` → brandkit, design-taste-frontend(+v1), full-output-enforcement,
  gpt-taste, high-end-visual-design, image-to-code, imagegen-frontend-web/mobile,
  industrial-brutalist-ui, minimalist-ui, redesign-existing-projects, stitch-design-taste.
- `emilkowalski/skill` → emil-design-eng.

> `ui-ux-pro-max` e `impeccable` foram instaladas por fora (impeccable tem CLI própria:
> `npx impeccable`). Já estão no kit; não precisam de reinstalação.
