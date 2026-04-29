---
name: DESIGNSNACK
description: Portfolio of Tommy Veit, Design Engineer — Swiss precision, typographic authority, proof-first.
colors:
  bg-primary: "#111827"
  bg-deep: "#06080E"
  text-primary: "#FFFFFF"
  steel-mist: "#768B9B"
  text-muted: "#E5E5E5"
  card-light: "#FAFAF9"
  card-dark: "#0E0E10"
  available: "#4ADE80"
typography:
  display:
    fontFamily: "Urbanist, ui-sans-serif, sans-serif"
    fontSize: "clamp(64px, 9.5vw, 140px)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Urbanist, ui-sans-serif, sans-serif"
    fontSize: "clamp(32px, 4.5vw, 64px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Urbanist, ui-sans-serif, sans-serif"
    fontSize: "clamp(17px, 2vw, 32px)"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "Urbanist, ui-sans-serif, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
  tag:
    fontFamily: "Urbanist, ui-sans-serif, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.12em"
rounded:
  pill: "9999px"
  card: "12px"
  photo: "16px"
  shape: "24px"
spacing:
  section-x-mobile: "20px"
  section-x-tablet: "40px"
  section-x-desktop: "84px"
  section-y-sm: "64px"
  section-y-md: "96px"
  section-y-lg: "160px"
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.bg-primary}"
    rounded: "{rounded.pill}"
    padding: "24px 40px"
    typography: "{typography.headline}"
  button-primary-hover:
    textColor: "{colors.steel-mist}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "24px 40px"
  button-ghost-hover:
    textColor: "{colors.steel-mist}"
  nav-link:
    textColor: "{colors.text-primary}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.steel-mist}"
  tag-chip:
    backgroundColor: "rgba(255,255,255,0.08)"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
    typography: "{typography.tag}"
---

# Design System: DESIGNSNACK

## 1. Overview

**Creative North Star: "The Proof of Work"**

This is a portfolio where the site itself is the argument. Every design decision is a demonstration of what a Design Engineer does — the typography commands authority rather than requesting attention, the spacing is deliberate rather than templated, the motion is polite rather than performative. Nothing is given for free.

The system is built on a single dark base: near-black body (`#111827`) with a deeper accent surface (`#06080E`) that creates tonal depth without shadows. One accent colour, Overcast Steel (`#768B9B`), appears only on hover states, secondary labels, and utility chrome. Its restraint is the point — when it appears, it means something. Type at extreme scale carries the visual weight that lesser systems achieve through decoration.

This is not a "dark mode portfolio." The physical scene: a senior partner at a Swiss bank opens a laptop in a meeting room, mid-afternoon, evaluating an engagement. The interface reads immediately and holds its ground. Nothing asks to be noticed. Everything rewards attention.

**Key Characteristics:**
- Single-font system (Urbanist) across all weights and scales
- Tonal depth through surface layering, not shadows
- Display type at 140px max — typography is the primary design element
- One accent colour, appearing on ≤10% of any surface
- Motion eases out sharply (`cubic-bezier(0.22, 1, 0.36, 1)`) — responsive, not theatrical
- Geometric SVG shapes in `#06080E` float on `#111827` as structural background texture

## 2. Colors: The Overcast Palette

Two near-blacks and one blue-grey. The palette has no warm tones and no saturated colour. Restraint is precision here, not caution.

### Primary
- **Deep Ink Night** (`#111827`): Body background and primary text on light surfaces. The ground of the entire system. Every other surface is either darker or lighter than this.

### Secondary
- **Midnight Pitch** (`#06080E`): The deepest surface — contact section, footer, mobile menu overlay, and all geometric background shapes. Creates structural depth without shadows. When a section uses this background, it signals a shift in register: utility or resolution, not storytelling.

### Tertiary
- **Overcast Steel** (`#768B9B`): The sole accent. Used exclusively on: hover states for interactive text and nav links, secondary meta text (footer, utility labels), and the email address in the mobile menu. Never appears at rest on headlines or body copy. Its appearance signals interaction or hierarchy reduction.

### Neutral
- **Stark White** (`#FFFFFF`): Primary text on dark backgrounds. Button primary fill. Logo on dark surfaces. Full contrast against both near-blacks.
- **Ash Mist** (`#E5E5E5`): Sublines, body text, work card descriptions. The readable step below full white — lower priority, still legible.
- **Bone Cream** (`#FAFAF9`): Light work card background (Joyo). The only warm-leaning surface; appears only inside a contained card, never as a page background.
- **Dark Slate** (`#0E0E10`): Dark work card background (Finnova). One step above Midnight Pitch — used as a contained surface, not a page ground.
- **Available Green** (`#4ADE80`): Single-use availability signal in the footer. Never used decoratively. Its meaning is literal.

### Named Rules
**The One Voice Rule.** Overcast Steel (`#768B9B`) is used on ≤10% of any given screen. It appears on hover, on secondary labels, on utility chrome. It never competes with headlines. Its rarity is the mechanism.

**The No-Warmth Rule.** Every background surface has zero warm chroma. Light surfaces (`#FAFAF9`) appear only inside contained work cards, never as page grounds. The site lives in the cool register.

## 3. Typography

**Display Font:** Urbanist (via `next/font/google`), with `ui-sans-serif, sans-serif` fallback
**Body Font:** Urbanist (same stack)
**Label/Mono Font:** Urbanist (no mono exceptions — the requirements doc explicitly rules them out)

**Character:** A single typeface at extreme scale contrast. Urbanist at 900 weight compressed tight (`-0.05em`) creates a monolithic slab; the same face at 500 weight reads as approachable body prose. The span from `0.86` line-height to `1.55` is the entire typographic system.

### Hierarchy
- **Display** (900, `clamp(64px, 9.5vw, 140px)`, lh `0.86`, ls `-0.05em`): Hero headlines only. Two-line composition. Lines sit tighter than normal — the gap between lines is narrower than the cap height. The scale commands the viewport.
- **Headline** (900, `clamp(32px, 4.5vw, 64px)`, lh `1.1`, ls `-0.03em`): Section headings, contact heading, mobile menu items. Same weight, reduced scale. Section headings appear right-aligned in some sections to break predictable left-flush convention.
- **Body** (500, `clamp(17px, 2vw, 32px)`, lh `1.55`): Sublines, about copy, work card descriptions. Medium weight for legibility at fluid scale. No max `ch` cap applied — the max-width container (`max-w-[864px]`) handles line length.
- **Label** (500, `13px`, lh `1.4`): Footer meta, availability text, link labels. Fixed size — these elements live outside the fluid scale system.
- **Tag** (600, `11–13px`, uppercase, ls `0.12em`): Work card engagement type tags. Semibold with wide tracking to read clearly at small size.

### Named Rules
**The Single-Face Rule.** Urbanist everywhere, zero exceptions. No monospace sections, no fallback decorative faces. Typographic hierarchy comes from weight and scale contrast alone.

**The Tight Display Rule.** Display headings use `letter-spacing: -0.05em` and `line-height: 0.86`. These are not defaults — they are intentional compressions that make the type feel architectural rather than set.

## 4. Elevation

This system is tonal and flat. There are no `box-shadow` declarations anywhere in the codebase. Depth is created entirely through surface layering: `#06080E` shapes recede behind `#111827` body text, lighter card surfaces (`#FAFAF9`, `#0E0E10`) lift against their context by being contained and bordered by darker surroundings.

### Tonal Layering Vocabulary
- **Ground** (`#111827`): The page base. Everything sits on or in front of this.
- **Recessed** (`#06080E`): Geometric SVG shapes positioned behind content, plus contained sections (contact, footer). Appears darker = reads as recessed, without any shadow.
- **Lifted light** (`#FAFAF9`): Joyo work card — a bright contained surface that lifts toward the viewer through high contrast against the dark body.
- **Lifted dark** (`#0E0E10`): Finnova work card — lifted by being a discrete contained surface, not by being lighter.
- **Dividers**: `rgba(255,255,255,0.10)` for structural dividers (footer border-top); `rgba(255,255,255,0.08)` for subtle list separators (mobile menu items).

### Named Rules
**The Shadow-Free Rule.** No `box-shadow` is permitted. Depth is structural, not atmospheric. If you are reaching for a shadow, reconsider whether a background tint change achieves the same depth without the decorative weight.

## 5. Components

### Buttons
Confident and unadorned. Pill shapes, clean fills, a single colour shift on hover. No transition except `transition-colors`. The hover state does not translate, scale, or glow.

- **Shape:** Full pill (`border-radius: 9999px`)
- **Primary (white):** White fill (`#FFFFFF`), near-black text (`#111827`), `font-bold`. Padding scales with viewport: `px-6 py-4 text-[18px]` → `lg:px-10 lg:py-6 lg:text-[32px]`. Hover: text shifts to Overcast Steel (`#768B9B`), fill stays white.
- **Ghost:** `border: 1px solid rgba(255,255,255,0.20)`, white text, same pill shape and padding. Hover: text and border both shift to Overcast Steel.
- **No disabled state documented** — this is a portfolio, not a form-heavy product.

### Tags / Chips
Small uppercase identifiers used on work cards to label engagement type and duration.

- **Style:** Pill shape, `font-semibold`, `font-size: 11–13px`, `letter-spacing: 0.12em`, uppercase. On dark cards: `background: rgba(255,255,255,0.08)`, `color: #E5E5E5`. On light cards: `background: rgba(0,0,0,0.06)`, `color: #374151`.
- **Purpose:** Classification only — never interactive.

### Work Cards
The signature component of the site. Full-height stacking scroll cards, each filling the viewport, driven by Framer Motion `useScroll` + `useTransform`. Two surface variants: light (Joyo) and dark (Finnova, Laws & Patterns).

- **Shape:** `border-radius: 12px`, `overflow: hidden`
- **Structure:** Image/screenshot fills the upper flex region; a footer bar at the bottom carries the tag, description, and CTA button.
- **Footer bar background:** dark variant `#0A0A0F`; light variant `#F0EFEE` — one step removed from the card background for subtle internal contrast.
- **Scroll behaviour:** Cards stack with `position: sticky`, scale from `1` down to `0.93–0.915` as the next card slides over. No bounce, no spring — `cubic-bezier(0.22, 1, 0.36, 1)` throughout.

### Navigation
- **Desktop:** Absolute-positioned, does not stick. `font-semibold`, `17–24px`. Links are plain text — no underline, no background, no pill. Hover: colour shift to Overcast Steel (`transition-colors`).
- **Mobile:** Full-screen overlay on `#080B12`, triggered by animated hamburger (two bars rotate to ×). Nav items are Display-weight type (`font-black`, `clamp(36px, 10vw, 56px)`), separated by `border-bottom: rgba(255,255,255,0.08)`. The email address floats at the bottom of the overlay in Overcast Steel as a persistent CTA.

### Geometric Decor
The background texture system. Large SVG shapes (rectangles, nested rectangles, circles) in `#06080E` placed behind content via `z-index: -1`. They bleed off-screen edges and rotate slightly. Their presence creates spatial rhythm between sections without any decorative colour. They are background infrastructure, not illustration.

## 6. Do's and Don'ts

### Do:
- **Do** use Overcast Steel (`#768B9B`) exclusively for hover states, secondary labels, and utility chrome. Never for headlines, body copy, or decorative accents.
- **Do** use `letter-spacing: -0.05em` and `line-height: 0.86` for Display-size type. These are the values in the code — do not loosen them.
- **Do** use `cubic-bezier(0.22, 1, 0.36, 1)` for all Framer Motion transitions. It reads as sharp-exit exponential ease.
- **Do** let section headings break the left-flush convention when it creates visual rhythm — right-aligned headings appear intentionally in Selected Work.
- **Do** use tonal surface layering (`#06080E` on `#111827`) to create depth. Depth is structural, not atmospheric.
- **Do** keep buttons to `transition-colors` only. No translateY, scale, or glow on hover.
- **Do** vary section vertical padding. The scale runs from `py-16` to `py-[160px]` — uniform padding is monotony.

### Don't:
- **Don't** use `box-shadow` anywhere. If you are reaching for a shadow, use a background tint change instead.
- **Don't** add gradient text (`background-clip: text` + gradient). The requirements doc explicitly bans this.
- **Don't** use Inter, system-ui, or any font other than Urbanist. The single-face rule is absolute.
- **Don't** use purple gradients, neon accents, or glassmorphism. These are listed by name in PRODUCT.md as anti-references.
- **Don't** build identical card grids (icon + heading + text, repeated). This is a named anti-pattern.
- **Don't** use `border-left` or `border-right` greater than 1px as a coloured stripe on any component. Rewrite with full borders or background tints.
- **Don't** use the hero-metric template (big number, small label, supporting stats, gradient accent). About section uses isolated large numbers as typographic anchors — they are typographically dominant type, not metric cards.
- **Don't** use standard agency portfolio structure: hero + work grid + contact form. The stacking scroll cards, enormous contact email, and typographic-first hero all deliberately reject this template.
- **Don't** use Tailwind UI defaults (shadcn components, zinc palette, standard rounded-lg cards). Every component in this system is hand-authored.
- **Don't** add motion that makes the user wait or fights their scroll. Entrance animations are polite — `opacity: 0` to `1` with a `y: 32` translate, nothing more.
- **Don't** apply a generic container (`max-w-7xl mx-auto`) to sections. Each section manages its own horizontal padding directly via the `px-5 / md:px-10 / lg:px-[84px]` scale.
