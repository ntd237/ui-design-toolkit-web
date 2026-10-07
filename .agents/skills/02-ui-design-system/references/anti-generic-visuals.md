# Anti-Generic Visual Standards (AI-Tell Avoidance)

Standards for eliminating the recognisable "AI-generated" visual signature (AI-tells) from designed interfaces. Apply during token engineering and component specification; audit during QA review using the checklist in section 6.

---

## 1. Brand-Derived Palette Rule

- The example palette in `token-spec-dtcg.md` (slate neutrals + Blue 600 accent) is a **default template, not a starting point**. Do not ship it unchanged unless the product brand genuinely uses blue.
- Derive the palette from a brand source (logo, brand guide, existing product):
  1. Start from the brand's primary hue; shift the neutral ramp (backgrounds, borders, text) toward that hue — warm neutrals for warm brands, cool slate only for genuinely cool/blue brands.
  2. Select the 10% accent from the brand color, then generate hover/active variants by adjusting lightness and chroma — not by picking a stock palette step.
  3. Verify the result does not collapse into the default AI look: blue-500/blue-600 accent on slate-50 background with slate-900 text.
- Feedback colors (success/warning/error) may follow convention, but must be tuned to harmonize with the brand hue.

## 2. Font Identity

- `Inter` and `Roboto` are the most recognisable default AI/webfont choices. Never make either the primary identity font; they are acceptable only as system fallbacks.
- Select the primary font from brand personality (all candidates must pass the Vietnamese diacritics requirements in `vietnamese-typography.md`):

| Brand Personality | Candidate Fonts (Vietnamese-ready) |
| :--- | :--- |
| **Corporate / Enterprise** | Be Vietnam Pro, Source Sans 3, Plus Jakarta Sans |
| **Friendly / Consumer** | Quicksand, Baloo 2, Nunito |
| **High-Tech / Game** | Chakra Petch, Rajdhani, Orbitron |
| **Editorial / Content** | Lora, Merriweather, Literata |

## 3. Gradient & Glow Budget

- Gradients are permitted only on **one focal element per view** (hero background, primary CTA) — never on body text, all buttons, or every section background.
- Prohibited: the default purple→blue gradient (`#7C3AED → #3B82F6` and neighboring hues) — the single most recognisable AI-tell. Any gradient used must have endpoints drawn from the brand-derived palette in §1.
- Glassmorphism (`backdrop-filter: blur`): maximum **one glass surface per view**; content on and behind the glass must still meet WCAG AA contrast.
- Glow/luminous effects are reserved for functional signals only (e.g., the gamepad focus ring per `game-ui-hud-ergonomics.md`); decorative glows on non-interactive elements are prohibited.

## 4. Layout Rhythm

- Prohibit uniform card repetition: never render more than **3 identical cards in a row** without breaking the rhythm.
- Rhythm-breaking devices (apply one per repeating group): a featured card with distinct size or emphasis; a hero-then-list composition; mixed content density; a full-width row inserted between card groups.
- Sections should alternate composition (e.g., text-left/media-right followed by an offset or full-bleed block) instead of stacking identical centered blocks.
- Equal multi-column grids remain valid where content genuinely warrants parity (pricing tiers, feature comparison), but must not be the default answer to any content list.

## 5. Icon & Copy Rules

- Icons come from **one icon library per product** with consistent stroke/fill weight (e.g., Lucide, Phosphor, Tabler). Emoji are prohibited in real UI output; emoji in ASCII wireframes are wireframe notation only and must not survive into implementation.
- Sample copy rules:
  - "Lorem ipsum" and its variants are prohibited. Sample copy must be real Vietnamese written for the product's domain, following the formatting conventions in `vietnamese-typography.md` §5.
  - Generic English microcopy ("Get Started", "Empower your…", "Unlock the power of…") is prohibited; button and heading copy must name the actual action or object (e.g., "Đăng ký lịch hẹn", "Tạo báo cáo đầu tiên").

## 6. Self-Audit Checklist

Answer each item Yes/No during QA review; any "No" is a finding for the Issue Ledger.

- [ ] Neutral palette is hue-shifted from the brand color, not stock slate
- [ ] Accent color is derived from a documented brand source, not the blue-600 default
- [ ] Primary font is not `Inter`/`Roboto`; it is chosen from the personality table in §2
- [ ] At most one gradient focal element per view
- [ ] No purple→blue default gradient anywhere
- [ ] At most one glass surface per view, with AA contrast maintained
- [ ] No decorative glows on non-interactive elements
- [ ] No more than 3 identical cards in a row without a rhythm-breaking device
- [ ] Sections alternate composition instead of stacking identical blocks
- [ ] Exactly one icon library, consistent stroke/fill weight across the view
- [ ] Zero emoji used as icons in real UI
- [ ] Zero "Lorem ipsum" or equivalent placeholder text
- [ ] Zero generic English microcopy; copy is real Vietnamese domain content
- [ ] Visual direction documented in `system_design.md` §1 (posture + brand color source + differentiator)
