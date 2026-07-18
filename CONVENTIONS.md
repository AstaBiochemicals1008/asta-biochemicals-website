# ASTA website — implementation conventions

Port of the Claude Design handoff bundle at
`../handoff/asta-website-new-final/project/*.dc.html` into Next.js 16 (App
Router) + React 19 + Tailwind v4.

The goal is to **match the prototype's rendered output**, not to copy its
markup. The prototypes are mockups: they carry a lot of inline styling that
their own global CSS overrides. Read the "cascade traps" section before
porting anything.

## Stack notes (Next 16 — differs from older Next)

- Turbopack is the default for `dev` and `build`.
- `next/image`: `priority` is **deprecated** — use `preload` instead.
- `images.qualities` defaults to `[75]`; `.svg` sources are auto-`unoptimized`.
- `next lint` is removed.
- Read `node_modules/next/dist/docs/` before reaching for an unfamiliar API.

## Layout

`src/app/layout.tsx` renders `<SiteHeader>`, `<main>{children}</main>`,
`<SiteFooter>` and `<MotionRoot>`. **Pages render section content only** — never
their own header/footer/nav. Manrope is self-hosted via `next/font` and exposed
as `--font-manrope`; `globals.css` maps it onto `--font-sans`/`--font-display`/
`--font-mono` (the prototypes collapse all three roles onto Manrope).

## Files

- `src/app/globals.css` — design tokens + all shared `.asta-*` rules. **Shared.
  Do not edit for page-specific needs**; add `src/styles/<page>.css` and import
  it from your `page.tsx` instead.
- `src/components/` — shared shell (`SiteHeader`, `SiteFooter`, `MotionRoot`,
  `CertMarquee`).
- `src/components/<page>/` — that page's sections.
- `src/lib/nav.ts` — route map.

## Routes

| Prototype file               | Route                  |
| ---------------------------- | ---------------------- |
| `ASTA Homepage.dc.html`      | `/`                    |
| `Biopharmaceutical.dc.html`  | `/biopharmaceutical`   |
| `Personal Care.dc.html`      | `/personal-care`       |
| `Chemistry Solutions.dc.html`| `/chemistry-solutions` |
| `Solutions.dc.html`          | `/solutions`           |
| `Quality.dc.html`            | `/quality`             |
| `Company.dc.html`            | `/company`             |
| `Connect.dc.html`            | `/connect`             |

## Prototype-only constructs → real equivalents

| Prototype                              | Use instead                              |
| -------------------------------------- | ---------------------------------------- |
| `<x-dc>`, `<helmet>`, `<sc-if>`, `{{ }}` | JSX + React state                        |
| `class Component extends DCLogic`      | `MotionRoot` / local `useState`          |
| `<image-slot src="…">`                 | `next/image` (`fill` + `sizes` when the slot is absolutely positioned) |
| `<i data-lucide="flask-conical">`      | `import { FlaskConical } from "lucide-react"` |
| lucide CDN `<script>`                  | `lucide-react`                           |
| `style-hover="…"` attribute            | a CSS class (these are inert in the DOM) |
| `assets/…`                             | `/assets/…` (served from `public/`)      |

`image-slot` is a drag-and-drop placeholder for the design tool. Its `src` is
the real image; `placeholder` is the empty-state caption — use it as the `alt`
only when nothing better exists, and use `alt=""` for decorative art.

## Cascade traps — read this

The prototypes' global type block uses `!important`, which **beats inline
styles**. The inline values in the mockup are frequently dead. Verified against
the running page:

- Every `h3` renders **18px / #15352F**, regardless of an inline
  `font-size:20px; color:var(--green-900)`.
- Every `p` renders **14px / #5C6964 / line-height 1.6**, regardless of inline
  `font-size:14.5px; color:var(--gray-600)`.
- `h1`/`h2` sizes come from the global clamps, not inline.
- `.asta-navlink` renders **weight 500**, overriding inline `600`.
- Exceptions that legitimately opt out carry their own `!important`:
  `p.asta-hero-rise-3` (18px/1.7) and `.asta-foot-brand p` (13px/1.55).

**So: do not re-declare font-size / color / weight / line-height inline on
headings or paragraphs.** Let `globals.css` own it. Keep inline `margin`,
layout, and non-type styling. A child `<span>` inside a heading *does* keep its
own inline colour — the `h1 !important` doesn't reach it.

Also inert in the prototype, and deliberately not "fixed":

- `.asta-card:hover h3` / `.asta-why-card:hover h3` colour changes (killed by
  the global `h3` colour).
- `.asta-why-card`'s `rotateX` entrance and hover lift — those cards carry
  `asta-reveal asta-why-card` together and the `.asta-reveal` rules outrank
  `.asta-why-card`.
- `animation-delay` inline on `.asta-map-node` (the animations live on its
  pseudo-elements, which don't inherit it).

If you find another inert rule, **reproduce the rendered result** and leave a
short comment saying why. Don't silently "improve" the design.

The prototype targeted eyebrows with `[style*="text-transform: uppercase"]`.
React serializes styles without the space, so that selector would not match —
use the `.asta-eyebrow` class instead (13px / 600 / 0.18em / uppercase).

## Motion

`MotionRoot` (mounted once in the layout) arms `<body class="asta-armed">` and
drives everything via IntersectionObserver:

- `.asta-reveal` (`translateY(70px) scale(.94)` fade) — honours
  `data-reveal-delay="<ms>"`.
- `.asta-rv` (subtler 32px fade), `.asta-stagger` (children in sequence),
  `.asta-wipe` (clip-path), `.asta-footline` (scaleX).
- `[data-countup="1200"] [data-suffix="+"]` — animated counter.
- `<video data-scroll-video>` — plays in view, pauses out.
- A blanket auto-fade for `section` content that isn't inside an explicit
  reveal.

Just add the classes/attributes; don't write new observers. Reveal styles are
gated behind `body.asta-armed` so content is never stranded hidden without JS.
Everything collapses under `prefers-reduced-motion: reduce`.

Three things about `MotionRoot` are load-bearing — all three were real bugs
caught at runtime, so please don't "simplify" them away:

1. **The reveal pass is geometry-based (`getBoundingClientRect`), not
   IntersectionObserver.** `.asta-wipe` and `.asta-map-reveal` rest at
   `clip-path: inset(0 100% 0 0)`. A clipped element reports
   `intersectionRatio: 0` and **never** fires an IO callback — verified in
   Chromium — so IO would leave them invisible forever. The prototype polled
   rects, which ignore clipping. IO is still used for count-ups, videos, and
   the blanket auto-fade, none of which are clipped.
2. **The effect depends on `usePathname()`.** The root layout stays mounted
   across App Router navigations, so with `[]` deps the incoming page's reveal
   targets would never be picked up while `<body>` is still armed.
3. **`body.asta-armed .asta-reveal.is-in` needs `!important`** (as it did in
   the prototypes). Pages tune their resting offset with an equal-specificity
   rule (e.g. `body.asta-armed .asta-reveal.asta-q-risk-card`) from a
   stylesheet imported *after* `globals.css`; without `!important` that rule
   wins even once `.is-in` lands, pinning the content at `opacity: 0`.

Per-page reveal distance is parameterised: `--reveal-y` / `--reveal-scale`,
defaulting to the majority 46px/0.97. A page overrides by wrapping its sections
in `.asta-page-home` (70px/0.94), `.asta-page-solutions` (54px/0.96) or
`.asta-page-chemistry` (48px/none).

## Conventions

- Server Components by default. `"use client"` only for real interactivity
  (menus, tabs, accordions, forms).
- Reuse `CertMarquee` for the certification strip.
- Assets already live in `public/assets/`. Don't re-copy from the bundle.
- `export const metadata` per page with a real title/description.
- Verify with `npm run build` (typechecks too).
