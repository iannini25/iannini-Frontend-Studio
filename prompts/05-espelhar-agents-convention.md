# Prompt 05 — Espelhar a convenção `.agents/skills` (opcional)

> **Você não precisa disto** para o Claude Code funcionar — ele já descobre tudo em
> `.claude/skills/` e `.claude/agents/`. Use só se quiser a estrutura canônica dupla da
> convenção agentskills.io (`.agents/skills/` como fonte + symlinks em `.claude/skills/`),
> por exemplo para compatibilizar com o CLI `npx skills`.

---

**Prompt:**

```
Contexto: hoje o kit tem a fonte única em .claude/skills/. Quero espelhar para a convenção
agentskills.io: canônico em .agents/skills/ + symlinks em .claude/skills/.

Tarefa (Node, multiplataforma — junction no Windows):
1. Crie a pasta .agents/skills/ se não existir.
2. Para cada pasta de skill em .claude/skills/<nome>:
   a. Mova o conteúdo real para .agents/skills/<nome>/ (canônico).
   b. Crie um symlink/junction .claude/skills/<nome> -> ../../.agents/skills/<nome>:
      node -e "require('fs').symlinkSync(require('path').resolve('.agents/skills/<nome>'), require('path').resolve('.claude/skills/<nome>'), 'junction')"
3. Mantenha impeccable como está se ela foi instalada pela CLI própria dela.
4. Valide que o Claude Code ainda enxerga todas as skills em .claude/skills/.

Cuidado: symlinks podem não sobreviver a zip/cópia entre sistemas — se mover o projeto,
rode este prompt de novo no destino.
```

---

> Recomendação prática: no Windows/VS Code, a fonte única em `.claude/skills/` (como o kit
> já vem) costuma dar menos dor de cabeça que symlinks. Só espelhe se tiver um motivo real.
