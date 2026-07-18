# ASTA Biochemicals — Website

Marketing site for ASTA Biochemicals, built from the Claude Design handoff
prototypes. **Next.js 16** (App Router) · **React 19** · **Tailwind v4** ·
TypeScript.

## Pages

All pages share one header/footer shell and are linked through the top nav and
footer.

| Route | Page |
| --- | --- |
| `/` | Home |
| `/biopharmaceutical` | Biopharmaceutical |
| `/personal-care` | Fragrance & Personal Care Ingredients |
| `/chemistry-solutions` | Discovery Chemistry |
| `/solutions` | Solutions |
| `/quality` | Quality & Compliance |
| `/company` | Company |
| `/connect` | Connect (contact) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build (typechecks too)
npm start        # serve the build
```

Node 20.9+ required (Next 16). Turbopack is the default for dev and build.

## Project layout

```
src/
  app/                 # routes — one folder per page, + layout, globals.css, icons
  components/          # SiteHeader, SiteFooter, MotionRoot, CertMarquee
  components/<page>/   # sections for each page
  styles/<page>.css    # page-scoped CSS (shared rules live in app/globals.css)
  lib/nav.ts           # route map for nav + footer
public/assets/         # images, logos, hero videos
```

## Notes for contributors

- **`CONVENTIONS.md`** documents how the prototypes were ported — read it before
  editing styles. In particular: the global typography block uses `!important`
  and beats inline styles, so don't re-declare font size/color inline on
  headings or paragraphs; and three behaviours in `MotionRoot` are load-bearing
  (geometry-based reveal, `usePathname()` dependency, and the `!important` on
  the `.is-in` rule) — see the file for why.
- Icons (`app/icon.png`, `app/apple-icon.png`) are the ASTA brand mark.
