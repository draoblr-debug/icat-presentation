# Life After +2 — ICAT Design & Media College

A 15-minute, full-screen interactive seminar presentation built for live delivery to 11th/12th-grade
students (with faculty/parents potentially in the room). React + Vite, no backend, deploys straight
to Vercel.

The presentation argues one thing: **creative careers are real, rewarding, financially viable and
achievable** — and walks the audience from "I enjoy creating" to "I want to explore ICAT further,"
industry-first, ICAT-second.

## Quick start

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # serve the production build locally
```

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket (or run `vercel` from this folder with the Vercel CLI).
2. Import the repo in Vercel. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (already declared in `vercel.json`, along with the SPA rewrite so refreshing
   mid-presentation never 404s).
3. Deploy. No environment variables are required — there is no backend.

## Running the presentation live

- Open the deployed URL (or `npm run preview`) on the presenter's laptop, connect the projector, and
  click **Enter full screen** (or press **F**) once the page loads.
- **→ / Space** — next slide · **←** — previous slide · **Home** — first slide · **End** — last slide
  · **1–9** — jump to that slide number.
- **H** — toggle the presenter safeguard HUD (slide number, title, elapsed time vs. the 15-minute cap).
  Hidden by default so the audience never sees it.
- **P** — presenter mode: shows the HUD plus a keyboard-shortcut hint line.
- Click/tap the left or right half of the stage to go back/forward; clicking a video, link, or
  button never triggers navigation.
- A thin amber progress rail along the bottom edge is the only thing visible to the audience by
  default — deliberately discreet.
- D2A alumni videos never leave the app: clicking **Play** loads an inline YouTube embed (a real
  user gesture, so sound plays without fighting browser autoplay policy); a **Back to presentation**
  control returns to the static poster. Every video card also carries an explicit **Watch on
  YouTube ↗** link as a fallback if the embed is blocked on the venue's network.
- If the venue has no reliable internet, everything except the five embedded D2A clips (and the
  Google Fonts headline typeface) still renders fully — the deck degrades to system fonts and static
  video posters with working "Watch on YouTube" links rather than freezing.

## Project structure

```
src/
  data/presentation.js   # ALL content lives here: alumni, salaries, companies, video links, copy
  engine/                # Presentation.jsx (nav/keyboard/fullscreen/timer), Stage.jsx (transitions),
                          # slideRegistry.js (the 20-slide order + transition type per slide),
                          # ProgressIndicator, RuntimeHud, NavControls
  components/            # Reusable UI: KineticText, StatCounter, SalaryCard, AlumniCard, CareerCard,
                          # CompanyWall, VideoCard, CTA, Slide (shared chrome)
  slides/                # One file per screen, 01_Open.jsx … 20_FinalCta.jsx
  styles/                # tokens.css (design system variables), base.css, engine.css, transitions.css,
                          # components.css, slides.css
```

Content and rendering are deliberately separated: to change a name, salary, company, or D2A link,
edit `src/data/presentation.js` — no component code needs to change.

## Updating content

Everything a presenter or marketing team is likely to need to change lives in
**`src/data/presentation.js`**, in clearly labelled sections: `brand`, `d2aLibrary` /
`featuredVideos`, `careerTracks`, `alumniWall`, `salaryProofTiers`, `geography`, `pathways`,
`whyIcat`, `companyWall`, `copy`.

**Do not fabricate a figure to fill a gap.** Every component in this deck is written to render
nothing when a field is `null` or an array is empty (see `salaryProofTiers`, `careerTracks.fashion`,
`whyIcat.stats`) — that's intentional, not a bug. If you have a real, verified number to add, fill it
in and it will appear automatically; until then, leaving it out is correct. See
`DATA_VERIFICATION.md` for the specific list of figures still awaiting sign-off from the placement
team.

## D2A videos

Five clips are wired into the deck (one each for Passion→Profession, Gaming, Film/Cinematography,
UI/UX, and the strongest placement story), per the brief's own rule of using a maximum of 3–5 clips
rather than every available one. The full library of supplied D2A links — including the ones not
currently used on a slide — is preserved untouched in `d2aLibrary` in the data file, so a presenter
can swap the selection later without hunting for URLs again.

## Design notes

- Typography: Manrope (body) + Space Grotesk (display), loaded from Google Fonts in `index.html`.
- No stock photography is used anywhere in the deck — every screen is built from typography, color,
  and layout, which sidesteps the "stock-photo cliché" problem the brief explicitly calls out and
  keeps the file size tiny. If you want to drop in real alumni/venue photography later, the natural
  slots are the video poster images (already sourced from YouTube thumbnails) and the alumni wall
  card avatars (currently a monogram).
- Transitions (crossfade / push / vertical reveal / zoom / mask wipe) are assigned per slide in
  `slideRegistry.js` by content type, not at random, per the brief.
- `prefers-reduced-motion` is respected globally — kinetic text and slide transitions disable
  themselves automatically.

## What still needs the placement/marketing team's sign-off

See **`DATA_VERIFICATION.md`**. Nothing unverified is displayed anywhere in the running
presentation — the few figures the brief originally asked for (total students placed since 2004,
count of hiring-partner VFX/gaming companies, ₹10L+ / ₹15L+ named examples) are present in the data
file as clearly-commented `null` placeholders so the UI simply omits them until real numbers are
supplied.
