# Prompt 02 — Ingerir minhas fontes locais

> Cole no Claude Code para ele varrer sua pasta de fontes, inspecionar cada uma, converter
> para WOFF2 e gerar um `fonts-manifest.json` que as skills consultam. Faça isto **uma vez**
> e reaproveite em todo projeto (ou aponte para uma pasta central sua).

**Antes:** defina sua pasta de fontes. Recomendado criar um repositório só seu, ex.:
- Windows: `D:\Fontes\` (ou `%LOCALAPPDATA%\Microsoft\Windows\Fonts`)
- macOS: `~/Fontes/` (ou `~/Library/Fonts`)
- Linux: `~/Fontes/` (ou `~/.local/share/fonts`)

---

**Prompt:**

```
Contexto: use a skill fonts-system (.claude/skills/fonts-system/SKILL.md) e o FONTES.md.
Minha pasta de fontes é: <COLE O CAMINHO AQUI>

Tarefa:
1. Instale as libs: pip install fonttools brotli
2. Varra a pasta (recursivo) e liste todos os .ttf/.otf/.ttc/.woff/.woff2.
3. Para cada arquivo, extraia com fontTools:
   - família e subfamília (nameID 1/2 e 16/17), nome PostScript (6)
   - pesos/estilos disponíveis; se é variável, o range de eixos (wght, etc.)
   - cobertura de acentos PT-BR (á, ã, ç, é, í, ó, õ, ú) e nº total de glifos
4. Converta cada fonte web-relevante para WOFF2 numa pasta ./fonts-woff2/ do projeto
   (não sobrescreva os originais).
5. Gere ./fonts-manifest.json com um array de objetos:
   { "arquivo", "familia", "subfamilia", "postscript", "variavel": bool, "eixos",
     "pesos", "ptbr_ok": bool, "glifos", "woff2": "caminho relativo" }
6. Classifique cada fonte por uso provável (display / corpo / mono) e por estilo sugerido
   (Institucional, Premium/Tech, Marketing, Editorial, Disruptivo, Mobile) — use as
   categorias do FONTES.md como referência.
7. Gere um specimen.html mostrando cada família em vários tamanhos/pesos com o pangrama
   PT-BR "Um pequeno jabuti xereta viu dez cegonhas felizes", para eu escolher visualmente.

Ao terminar: me diga quantas fontes catalogou, quais têm cobertura PT-BR completa, e as 5
que você mais recomenda como display para projetos premium (justifique em 1 linha cada).
```

---

**Depois:** com o `fonts-manifest.json` pronto, ao pedir um site você pode dizer *"use uma
fonte display do meu manifest para o estilo X"* e o Claude Code monta o `@font-face`
(referenciado ou base64) conforme a skill `fonts-system`.
