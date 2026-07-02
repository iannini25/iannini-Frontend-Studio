# Frontend Studio Kit

Biblioteca reutilizável de **skills + agentes** para o **Claude Code** (VS Code) gerar
sites e interfaces **muito acima do padrão** — profissional, minimalista, premium,
disruptivo, landing de vendas, portfólio, SaaS ou institucional — sem cara de "site de IA".

Você abre este pacote, pede o site, e o Claude Code usa toda a biblioteca (direção de
design, técnicas de scroll cinematográfico, tipografia, 74 referências de marca, catálogo
de componentes) para entregar algo de estúdio.

---

## O que tem dentro

- **25 skills** de design, motion, tipografia, componentes prontos, código e geração de imagem.
- **3 agentes** que trabalham em conjunto (orquestrador + motion + qualidade de código).
- **74 `DESIGN.md`** de marcas de ponta (Apple, Stripe, Linear, Vercel, Ferrari, Nike…).
- **Roteador** que escolhe a combinação certa de skills por tipo de projeto.
- **Sistema de fontes** que usa as fontes do **seu** computador + biblioteca curada.
- **Prompts prontos** para as etapas de terminal (instalar skills, ingerir fontes,
  catalogar componentes externos, iniciar projeto).

---

## Instalação (VS Code + Claude Code)

**Opção 1 — usar como raiz do projeto (mais simples):**
1. Descompacte e abra a pasta `frontend-studio/` no VS Code.
2. Abra o Claude Code. Pronto — ele descobre `.claude/skills/` e `.claude/agents/` sozinho.

**Opção 2 — usar em um projeto existente:**
1. Copie para dentro do seu projeto: a pasta `.claude/`, e os arquivos de topo
   (`CLAUDE.md`, `SISTEMA.md`, `CATALOGO.md`, `FONTES.md`), a pasta `prompts/`, o
   `skills-lock.json` e (se for usar anime.js offline) `vendor/`.
2. Abra o Claude Code no projeto.

Sem build, sem config. A descoberta é automática: skills em `.claude/skills/<nome>/SKILL.md`,
agentes em `.claude/agents/<nome>.md`.

---

## Dependências

**O kit em si não precisa de instalação** — skills e agentes são markdown que o Claude
Code lê direto. As dependências abaixo são para os fluxos opcionais:

| Ferramenta | Para quê | Quando |
|---|---|---|
| **Python 3.10+** + `pip install -r requirements.txt` | `fonttools` + `brotli`: inspeção das suas fontes e conversão WOFF2 (`prompts/02`, skill `fonts-system`). Os scripts da `ui-ux-pro-max` usam só a stdlib. | Uma vez, antes do `prompts/02`. |
| **Node.js 18+** | `npx skills` (reinstalar skills do lock), `npx impeccable` (CLI de polish), `npx shadcn`/`npx lightswind` (puxar componentes do catálogo). Nada para instalar antes — o `npx` baixa sob demanda. | Sob demanda. |
| **git** | Clonar os repos de referência do `prompts/03`. | Só no `prompts/03`. |
| **ffmpeg** *(opcional)* | Fatiar vídeo em frames para scroll-vídeo (skill `scroll-cinematic`). | Só se fizer herói com scroll-vídeo. |

Nos sites gerados, GSAP/Lenis entram via CDN e o anime.js já vem vendorado em
`vendor/anime/` — nenhum `npm install` obrigatório.

---

## Quickstart

1. (Opcional, uma vez) rode os prompts de setup da pasta `prompts/`:
   - `02-ingerir-minhas-fontes.md` → cataloga suas fontes locais.
   - `03-catalogar-componentes-externos.md` → clona/registra bancos de componentes.
2. Para criar um site, cole `prompts/04-novo-projeto.md` no Claude Code, preencha o brief,
   e deixe o agente **design-director** conduzir.

Exemplo mínimo do que dizer:
> "Use o Frontend Studio Kit (comece pelo design-director). Quero uma **landing de vendas**
> para um SaaS de logística B2B, tom sóbrio e premium, com um **herói cinematográfico**.
> Stack HTML+GSAP. Aqui estão os textos reais: …"

---

## Mapa dos arquivos

| Arquivo | Para quê |
|---|---|
| `CLAUDE.md` | Manual de operação (fluxo padrão + regras). **Leia primeiro.** |
| `SISTEMA.md` | Roteador: qual skill/agente por tipo de projeto + receitas. |
| `CATALOGO.md` | Inventário completo: skills, agentes, 74 marcas, fontes externas de componentes. |
| `FONTES.md` | Onde ficam suas fontes por SO + biblioteca curada por estilo. |
| `prompts/` | Prompts prontos p/ o Claude Code (setup e kickoff). |
| `.claude/skills/` | As 25 skills (+ pack de 74 marcas). |
| `.claude/agents/` | design-director, anime-motion, clean-code-reviewer. |
| `vendor/anime/` | anime.js v4.4.1 (ground truth da skill `animejs`). |
| `skills-lock.json` | Rastreia as skills vindas do GitHub (CLI `npx skills`). |
| `requirements.txt` | Dependências Python do pipeline de fontes (`fonttools`, `brotli`). |
| `showcase/` | Demo viva do kit: uma página, quatro linguagens (rode um servidor local e abra). |

---

## Filosofia

O padrão de um LLM é "página de IA": Inter como display, Lucide grosso, gradiente roxo,
hero de 6 linhas, bento com buraco. **Tudo aqui existe para quebrar isso.** Direção antes
de código, uma estética por projeto, tipografia com caráter, motion com peso, mobile que
colapsa de verdade, e a régua final: *se pareceria igual a qualquer outro prompt, está
errado — recomece pela direção.*

Detalhes de tudo isso: `CLAUDE.md` → `SISTEMA.md` → `CATALOGO.md`.
