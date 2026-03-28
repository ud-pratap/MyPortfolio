# Design Brief — 2026 Web Design Guidelines

Reference this file when building frontend interfaces. Use alongside the /frontend-design skill.
Example prompt: "Build a landing page for X. Reference design-brief.md for aesthetic direction."

---

## Typography — Use These, Not Defaults

Never accept Inter, Roboto, Arial, or system sans-serif as the only typeface. Choose from:

**Display / Headlines:**
- GT Sectra — calligraphic precision, editorial authority
- Sohne — confident modern grotesque
- Monument Extended — brutalist structural confidence
- Editorial New — narrow serif, retro meets contemporary
- Playfair Display — classic editorial weight

**Body / UI:**
- Neue Montreal — versatile grotesque with character
- Bricolage Grotesque — warmth and personality
- Aeonik — neo-grotesque with geometric foundation
- DM Sans / DM Serif Display — strong free pairing

**Monospace (for technical contexts):**
- JetBrains Mono, Fira Code, Berkeley Mono

**The rule:** Pair a distinctive headline font with a clean body font. Mix serif + sans-serif intentionally. Use variable fonts when available for performance and fluid weight control.

---

## Color — Beyond Purple Gradients

### Palette Construction
Build palettes on **elevated neutrals** as the foundation — not pure white (#FFF). Use warm sand, stone, oatmeal, muted clay, or gentle taupe as backgrounds. These read as premium, reduce eye strain, and work across light/dark modes.

### Primary Accent Directions (pick one)
- **Blue-green / Deep teal** — oceanic, modern, the consensus accent of 2026
- **Eco-inspired** — moss green, terracotta, clay, copper, warm browns
- **Retro** — burnt sienna, dusty coral, faded teal, sunflower yellow
- **High-contrast monochrome** — near-black on warm off-white with one electric accent

### Color Rules
- One dominant color with sharp accents beats timid, evenly-distributed palettes
- Every color should serve a **semantic purpose** (action, feedback, emphasis) — not decoration
- Use CSS custom properties as tokens: `--color-action-primary`, `--color-surface`, `--color-text-muted`
- Build in OKLCH when possible for perceptual uniformity
- Hyper-saturated accents (electric blue, neon green, punchy coral) work when used sparingly for CTAs and focal points

### Never
- Purple-to-blue gradients as primary palette
- Tailwind's default indigo/violet as the base
- Timid pastels distributed evenly with no hierarchy

---

## Layout — Break the Template

### Anti-Patterns to Avoid
- Centered hero + three-column icon grid + testimonial cards + pricing table (the universal AI layout)
- Uniform card grids with identical padding, radius, and heights throughout
- Mathematically perfect, tension-free spacing everywhere
- Bento grids (now oversaturated as an AI default)

### Instead
- **Vary layout structure section to section** — different sections should have different compositions
- **Force asymmetry** — off-center focal points, varied column widths, intentional grid-breaking
- **Content dictates structure** — not everything needs to be a card
- **Overlap and layer** — elements bleeding across sections, overlapping images and text
- **Generous negative space OR controlled density** — commit to one, don't split the difference

### Spacing & Radius Hierarchy
- Build a deliberate hierarchy: small radius for buttons/inputs (4px), medium for cards (8-12px), large for containers/modals (16-24px)
- Spacing should feel **considered, not computed** — intentional variation, not uniform padding everywhere
- Use an 8px base grid but apply it with variation

---

## Texture, Depth & Materiality

This is the #1 counter to the AI-smooth aesthetic. Flat, pristine surfaces scream "generated."

- **Grain and noise** — subtle noise textures on backgrounds or gradient overlays. CSS: use SVG filters or pseudo-elements with grain
- **Glassmorphism** — frosted-glass effects (`backdrop-filter: blur()`) for navigation, modals, overlays. Use selectively, not as blanket treatment
- **Dithered gradients** — mimicking 8-bit constraints reads as intentional and distinctive
- **Mixed-media elements** — combine photography with vector, add hand-drawn annotations or texture layers
- **Soft shadows with intention** — vary shadow blur, spread, and color per element scale. Shadows should match a consistent light source

---

## Modern CSS Techniques (2026)

Use these to make implementations feel current:

```css
/* Fluid typography — eliminates breakpoint complexity */
font-size: clamp(1rem, 0.5rem + 1.5vw, 1.5rem);

/* Scroll-driven animations — performant, no JS */
animation-timeline: view();

/* Container queries — components adapt to their container */
@container (min-width: 400px) { ... }

/* Parent selection — reduce JS for state-driven styling */
.form-group:has(:focus-within) { ... }

/* Dynamic viewport units — fix mobile chrome issues */
min-height: 100dvh;

/* Respect user preferences — non-negotiable */
@media (prefers-reduced-motion: reduce) { ... }
@media (prefers-color-scheme: dark) { ... }
```

Also: use native `<dialog>`, `popover` attribute, and View Transitions API where applicable.

---

## Copy & Voice — The Invisible Design Layer

Generic copy is as much an AI tell as purple gradients.

### Banned Phrases
- "Seamlessly integrate", "Unlock the potential", "Revolutionize your workflow"
- "Build the future of X", "Scale without limits", "Empower your team"
- "Cutting-edge", "Game-changing", "Holistic", "Robust", "Leverage"

### Instead
- Write with a **specific personality** — opinionated, casual, precise, witty, anything but neutral
- Use **real specifics** — actual numbers, concrete benefits, named outcomes
- **Microcopy is a design element** — button labels, empty states, error messages, loading text, and tooltips should all have voice
- Every headline should pass the test: "Could a competitor use this exact line?" If yes, rewrite it.

---

## Dark Mode (When Applicable)

- Never use pure black (#000). Use warm dark grays (#121212 to #1E1E1E)
- Replace box shadows with **surface elevation** — higher elements get slightly lighter surfaces
- Increase font weight one level and add subtle letter-spacing for light-on-dark text
- Test contrast: 4.5:1 minimum for body text, 3:1 for large headings
- Design dark mode as a first-class experience, not an afterthought color inversion

---

## Pre-Delivery Checklist

Before considering any frontend complete, verify:

- [ ] No Inter, Roboto, or Arial as primary font
- [ ] No purple-to-blue gradient as dominant color
- [ ] Not using pure white (#FFF) or pure black (#000) as primary background
- [ ] Layout varies between sections (not all cards/grids)
- [ ] Border-radius varies by element scale (not uniform everywhere)
- [ ] At least one texture/depth element (grain, glass, shadow, overlay)
- [ ] Copy uses specific language, not generic buzzwords
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Color choices serve semantic purpose, not decoration
- [ ] The design has a point of view — it could NOT be any brand's website
