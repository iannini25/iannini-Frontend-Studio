# FONTES.md — Onde ficam suas fontes + biblioteca curada

Companion da skill `fonts-system`. Aqui: (1) onde o Claude Code acha suas fontes locais,
(2) uma biblioteca curada por estilo de projeto. Pares prontos de fonte também na skill
`ui-ux-pro-max` (57 pares).

---

## 1. Onde ficam suas fontes locais (por SO)

| SO | Pasta(s) |
|---|---|
| **Windows** | `C:\Windows\Fonts` · `%LOCALAPPDATA%\Microsoft\Windows\Fonts` |
| **macOS** | `~/Library/Fonts` · `/Library/Fonts` · `/System/Library/Fonts` |
| **Linux** | `~/.local/share/fonts` · `~/.fonts` · `/usr/share/fonts` |

**Sugestão:** crie um repositório só seu — ex. `~/Fontes/` (mac/linux) ou `D:\Fontes\`
(win) — e coloque lá as fontes que quer usar nos projetos. Aponte o Claude Code para essa
pasta com o prompt `prompts/02-ingerir-minhas-fontes.md`: ele varre, inspeciona (nome,
pesos, cobertura PT-BR), converte para WOFF2 e gera um `fonts-manifest.json` que as skills
consultam. Assim você reaproveita sua coleção em todo projeto.

Como usar suas fontes num projeto: skill `fonts-system` §2–4 (inspecionar, converter,
montar `@font-face` referenciado ou em base64).

---

## 2. Biblioteca curada por estilo

Regra dura: **nunca Inter/Roboto/Arial/Open Sans/Helvetica como display.** Formato de cada
linha: **Display** + *corpo* + `mono` (quando útil). `[Fontshare]` = grátis inclusive
comercial; `[Google]` = Google Fonts; `[fundição]` = você baixa e entrega o arquivo.

### Institucional / Confiável (limpo, sério, mas não genérico)
- **Newsreader** *+ Hanken Grotesk* [Google] — editorial calmo, confiável.
- **Fraunces** *+ Switzer* [Google/Fontshare] — serifa com caráter + grotesk neutra.
- **GT Sectra** *+ GT America* [fundição] — o combo "consultoria/finança de ponta".
- Mono para dados: **JetBrains Mono** [Google].

### Premium / Tech / SaaS ("cara de agência cara")
- **Clash Display** *+ Satoshi* `Geist Mono` [Fontshare/Google] — o preset premium.
- **General Sans** *+ General Sans* [Fontshare] — grotesk moderna, uma família só.
- **PP Neue Montreal** *+ PP Neue Montreal* `PP Fraktion Mono` [fundição] — Linear/agency-tier.
- **Geist** *+ Geist* `Geist Mono` [Google] — Vercel-tier, sóbrio e técnico.

### Marketing / Landing de vendas (impacto, conversão)
- **Cabinet Grotesk** *+ Switzer* [Fontshare] — display encorpado, corpo limpo.
- **Bricolage Grotesque** *+ Hanken Grotesk* [Google] — display expressivo, atual.
- **Unbounded** *+ Space Grotesk* [Google] — display variável de largura, ousado.
- Regra do hero: título 2–3 linhas, `clamp(3rem, 5vw, 5.5rem)`, container largo.

### Editorial / Portfólio (voz, sofisticação)
- **PP Editorial New** *+ PP Neue Montreal* [fundição] — o editorial "de galeria".
- **Instrument Serif** *+ Geist* [Google] — serifa de display dramática, corpo técnico.
- **Zodiak** *+ Ranade* [Fontshare] — serifa contemporânea + sans de leitura.
- **Fraunces** (eixo *SOFT/WONK*) *+ Satoshi* — quando quer personalidade na serifa.

### Disruptivo / Statement / Awwwards (ousado)
- **Melodrama** *+ Boska* [Fontshare] — display expressivo, contraste alto.
- **Basement Grotesque** *+ Neue Montreal* [fundição] — peso brutal, presença.
- **Space Grotesk** *+ Space Mono* [Google] — técnico-experimental, retrofuturista.
- **Panchang** *+ Switzer* [Fontshare] — display geométrico incomum.

### Mobile / App (legibilidade em tela pequena)
- **General Sans** *+ General Sans* [Fontshare] — hierarquia clara num só família.
- **Hanken Grotesk** *+ Hanken Grotesk* [Google] — legível, amigável, muitos pesos.
- **SF Pro / SF Compact** (iOS nativo) — quando é app iOS puro; corpo `#111`.
- Evite serifas finas de display no mobile.

### Monoespaçadas de caráter (código, dados, HUD, "keystrokes")
**JetBrains Mono, Geist Mono, Space Mono** [Google] · **Departure Mono, Martian Mono**
(retro/técnico) · **PP Fraktion Mono, GT America Mono** [fundição].

---

## 3. Dicas de aplicação

- Baixou uma variável? Aproveite o range num só `@font-face`: `font-weight: 200 700;`.
- Cheque acentos PT-BR antes (fonttools, skill `fonts-system` §2) — muita fonte de
  fundição vem sem `ç`/`ã` completos.
- `font-display: swap` sempre (evita texto invisível no carregamento).
- Título: tracking apertado (`-0.02em`…`-0.04em`), `line-height` ~1.1. Corpo: `line-height`
  ~1.6, cor charcoal (`#111`/`#1a1a1a`), nunca preto puro.
- Um projeto = no máximo 2–3 famílias (display + corpo + mono opcional). Mais que isso
  vira ruído.
