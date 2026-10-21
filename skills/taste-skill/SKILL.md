---
name: taste-skill
description: "Senior UI/UX design engineering directives from git (Leonxlnx/taste-skill) that architect premium, anti-slop frontend interfaces, overriding LLM generic biases with explicit design dials, quiet panels, aligned figures, and editorial layout variance."
---

# Taste Skill: Anti-Slop Frontend Architecture (Leonxlnx/taste-skill)

> "AI coding agents suffer from statistical bias toward generic templates: centered heroes, giant meaningless headlines, 3 identical cards in a row, and purple-indigo slop. Taste Skill overrides these defaults with deliberate design dials and production-grade frontend engineering."

---

## 🎛️ The Three Design Dials

Before writing UI code, declare the design dials for the project:

### 1. DESIGN_VARIANCE (1 to 10)
- **1-3 (Strict Utility)**: Monospace, tabular grids, terminal/dashboard style.
- **4-6 (Clean SaaS/Product)**: Consistent baseline grids, subtle asymmetry, clear visual anchor points.
- **7-8 (Editorial / Brand Marketplace)**: Asymmetrical feature anchors, magazine-inspired typographic scale, staggered cards, split-ledgers, distinctive brand cadence. *(Used for AutoAce Zed: Dial 7.5)*.
- **9-10 (Experimental / Brutalist)**: Deliberately breaking grids, oversized display typography, raw borders.

### 2. VISUAL_DENSITY (1 to 10)
- **"Quiet panels, aligned figures, colour spent on data"**
- Avoid empty fluff or oversized padding that wastes viewport space.
- Figures, currencies, license plates, and metrics must use tabular/monospace numerals with crisp alignment.
- Low-contrast background surfaces (`#F8FAFC`, `#0B192C`, `#10243E`) with hairline borders (`border-slate-200/80` or `border-white/10`).
- Accent color is reserved for actionable triggers and live verification data—not gratuitous decorative blobs.

### 3. MOTION_INTENSITY (1 to 10)
- **Tactile feedback**: Subtle micro-interactions, `active:scale-[0.98]` on buttons, spring modals, smooth tab indicator transitions.
- No slow, floating, distracting scroll animations. Motion must feel instant, physical, and purposeful (150ms–250ms ease-out).

---

## 🚫 Anti-Slop Prohibitions (Bias Corrections)

1. **NO "3 Equal Cards in a Row"**:
   - Cliché: Three identical generic boxes with identical icons and generic lorem text.
   - Rule: Use hierarchy. Have a **Featured Anchor Card** with comprehensive specs or live metrics, flanked by companion cards or an aligned grid with varying levels of detail.
2. **NO Generic Centered Hero Blobs**:
   - Cliché: Giant centered text on a blurry rainbow mesh with two centered round pills.
   - Rule: Anchor the hero with purposeful domain utilities (search console, live demand ledger, real market inputs, verified credentials).
3. **NO Electric/Neon Slop**:
   - Cliché: Blinding cyan/magenta/electric blue gradients on dark gray.
   - Rule: Sophisticated palette with deep, authentic brand colors (e.g. Deep Executive Navy `#1B365D`, Midnight Canvas `#0B192C`, Slate Ice `#F0F4F8`).
4. **NO Pill Overuse**:
   - Cliché: Every element wrapped in a pill shape with equal weight.
   - Rule: Reserve pill tags strictly for status chips; use crisp rectangular or rounded-xl geometry for primary interactive elements.
5. **NO Flexbox Percentage Math Bugs**:
   - Use CSS Grid (`grid-cols-12` or explicit responsive column templates) for structural balance.

---

## 📐 Application in AutoAce Zed

- **Domain Tone**: Executive Zambian Automotive Marketplace (Trust, RTSA whitebook compliance, ZRA customs duty transparency).
- **Typography**: Plus Jakarta Sans (`-0.03em` display tracking) + Monospace/Tabular numerals for Zambian Kwacha (ZMW) amounts and number plates.
- **Palette**: Executive Navy Blue (`#1B365D`), Midnight Navy (`#0B192C`), Ice Navy (`#F0F4F8`), and Forest Emerald (`#047857`) for verified RTSA status.
- **Layout Variance**: Spotlight Market Anchor vehicle card paired with real-time Zambian demand ledger.
