# Image & Video Notes — Overhaul Brief

Source: review call with **Mr. David**, ~15:33–15:56 IST, 2026-09-11 (NeoSapien memory
`1919992d-5331-4a4b-aaa3-f5e47ea53ae1`, "ICAT Presentation Overhaul — Content and HR Compliance
with Mr.David"). Call was mostly Tanglish; quotes below are transcribed as spoken, translated
where useful.

## 1. His feedback, distilled to action items

1. **Everything must be bigger.** "namma padikkirathu laptop la padikkirathu but PPT la potta
   perusa perusa text irundhaadhan makkal kaadhula vizhum" — we read it on a laptop, but on a
   projected screen only large text/images actually land with the audience. Applies to text,
   logos, and images equally.
2. **An image has to be doing the communicating, not the caption.** "Inga image potta andha idhu
   communicate aagum" — put an image here and *that's* what makes the point land, not more words.
3. **The ICAT logo must appear** — not just on the cover. ("na I CAT logo varanum.")
4. **Course names need visual hierarchy** — Animation / VFX / Design / Film should read as a
   numbered or color-alternating list, not slash-separated, so the relevant course highlights
   itself rather than blending into a wall of text.
5. **Reorganize the Design section**: he wants a dedicated graphic-design intro slide (logos +
   posters) *before* the UI/UX material — currently the connection between them reads as
   unrelated ("Connection eh illai").
6. **Every category needs a defining, real photo(s):**
   - **Graphic design** → an "album booklet" style spread of real posters/logo work.
   - **UI/UX** → actual app screenshots ("UI UX na UI app kku photos irukkum") — not generic
     graphic-design imagery.
   - **Fashion** → ramp-walk photography, and a ramp-walk video if one exists in ICAT's own
     showcase footage. He also wants a short list of real companies that hire fashion designers
     (he named Arvind Mills as an example of the kind of reference to use — verify any specific
     company before it goes on a public slide).
   - **Interior design** → he wants this added as its own beat: residential vs. commercial vs.
     exterior/ambiance work, with real project photography. **Not currently a category in
     `careerTracks`** — no verified ICAT placement/portfolio data exists for it yet, so per the
     deck's own data-integrity policy we have NOT fabricated a slide. This is flagged for the
     content/placement team to supply verified examples before a slide is built.
   - **VFX** → he explicitly wants a recognisable industry reference (he named *Baahubali* —
     "Bahubali everyone loves", people connect with it emotionally even if not technically) run
     alongside ICAT's own render/showreel work, so the audience's excitement transfers onto
     ICAT's actual output rather than staying attached to a borrowed clip only.
7. **Alumni need faces, not just initials.** "Amar Patel photo edukanum" — get a real photo for
   named alumni (LinkedIn headshot is fine) wherever one exists.
8. **Company tiles need real logos**, not just names — instant recognisability from the back of
   the room (Deloitte, Dell, etc. were named as examples of companies ICAT alumni work at).
9. **Show salary/package figures prominently per course** (he gave illustrative examples —
   design ~₹12L package, UX ~₹2.9–7.2L, gaming ~₹3.6–9L — treat these as his conversational
   framing, not verified figures; the deck already has its own verified figures in
   `careerTracks` and those should keep taking precedence per `DATA_VERIFICATION.md`).
10. **Entrepreneurship needs its own visual beat** — turnover framing (he used ₹3–5L/month as an
    illustrative entrepreneur income figure), tied to fashion/interior-style small-business
    stories.
11. **Slide count is not a constraint** — "let there be 100 slides... but perusa full focus
    irundha thaan" (100 slides is fine, as long as each one is sharply focused and legible).
12. **Pull fresh imagery from icat.ac.in** — he called out that the old deck's photos were
    outdated ("andha PPT la irundhu thooku... latest irundhu maathi") and specifically mentioned
    recent achievements worth surfacing (a *Martian*-adjacent project/Oscars reference, students
    placed at MNCs like Dell). The website's own poster/photo assets are fair game to reuse.
13. **Must work fully offline — this is non-negotiable.** "without internet it should work pa" /
    "ella idathulayum internet engappa presentation kudukura time la" (there's rarely internet
    wherever the presentation actually happens). Large local files are explicitly fine
    ("periya file thukitu ponnalum no problem") — carried on the laptop or a USB drive. This
    directly conflicts with the current build's YouTube-iframe video embeds and
    `img.youtube.com` thumbnails, both of which require network access.
14. **Avoid relying on the room's browser** — he flagged that presentation-venue browsers are
    often old/incompatible, so full-screen playback inside a browser tab is a real risk; prefers
    something that "just runs" (a local shortcut/folder) over a hosted video link.
15. Video files he already has (VFX/animation showreel, Baahubali reference) should be dropped in
    directly rather than re-sourced.

## 2. What changed in the codebase (skeleton only — no fabricated content)

The deck was previously pure kinetic typography with **zero images anywhere** (alumni were
rendered as a single letter in a circle; companies were text-only tiles). That is the core gap
behind point 2, 6, 7, 8 above. This pass adds the *structure* for imagery/video everywhere it's
needed, without inventing any photo, logo, or figure that isn't verified:

- **`src/components/ImagePlaceholder.jsx`** — new. Renders a real image when `src` is supplied
  (base64 data URI, so it still works with zero internet), otherwise renders a clearly labelled
  placeholder box (dashed border + "PHOTO/LOGO/POSTER/VIDEO NEEDED" + a note describing exactly
  what should go there). This is how "wherever required" is made visible without ever showing
  fake content to a live audience.
- **`src/assets/icatBrandAssets.js`** — new. Base64-embedded ICAT logo + 6 generic
  campus/course-gallery photos, fetched directly from `icat.ac.in` on 2026-09-11 (see §3). These
  are real ICAT assets, embedded inline so they render offline.
- **`src/components/Slide.jsx`** — every slide now renders the ICAT logo (top-right, from the
  base64 asset) per feedback item 3.
- **`src/data/presentation.js`** — added `photo: null` (alumni), `logo: null` (companies), and
  `heroImage: null` + `posterNote` (career tracks) fields, each following the file's existing
  "unverified/unsupplied data stays `null`, never fabricated" convention. `posterNote` documents,
  per course, exactly what image David asked for (see §1.6) so whoever sources the photo knows
  the brief without re-reading the transcript.
- **`AlumniCard`, `CompanyWall`, `CareerCard`** — now render the placeholder/real image from
  those new fields.
- **`VideoCard`** — now supports a `localSrc` field per video (native `<video>` element) so a
  clip plays fully offline once a local file is supplied; until then it falls back to the
  YouTube embed with a visible on-screen warning that it needs internet, so the gap is obvious
  during rehearsal rather than discovered live.
- **Fashion slide** — added a ramp-walk photo placeholder and a ramp-walk video placeholder.
- **VFX slide** — added a video placeholder for the Baahubali-reference + ICAT-showreel cut, and
  photo placeholders on the senior-alumni cards (Ruchi Rikta, Yash Gowda).
- **Film slide** — added photo placeholders on the alumni example cards.

Font/text sizing (feedback item 1) was **not** touched in this pass — it's a CSS/typography
change independent of imagery, and the existing `clamp()`-based type scale in
`src/styles/tokens.css` already scales with viewport width; bumping the clamp minimums is a
follow-up task, not a placeholder-wiring task.

## 3. Base64-embedded assets — what they are, and what's still needed

Fetched from the **live icat.ac.in site** on 2026-09-11, base64-encoded inline in
`src/assets/icatBrandAssets.js`:

| Export | Source | What it is | Use it for |
|---|---|---|---|
| `logoSvgBase64` | `icat.ac.in/images/icat.svg` | Official ICAT wordmark, vector | Header logo (already wired into every slide) |
| `campusPhoto1`–`campusPhoto6` | `icat.ac.in/images/course-img/course-img{1,3,5,8,12,16}.jpg` | Generic course-gallery photos from the site's homepage carousel — **not attributed to a specific course**, no captions exist in the site markup to map them | Background texture / filler only. Do **not** present one of these as "the" photo for a specific course without confirming what it actually depicts — swap in course-correct, credited photography before a real run |

These are real, current ICAT assets — they satisfy feedback item 12 ("pull latest images from
the website") and the offline requirement (item 13), but they are **not** a substitute for the
specific, attributed photography David asked for per category (alumni headshots, ramp-walk
shots, app screenshots, VFX stills, company logos). Those still need to be sourced and dropped
into the `photo` / `logo` / `heroImage` / `localSrc` fields described in §2.

## 4. Sourcing checklist (what kind of image goes in each remaining placeholder)

- **Alumni photos** (`alumniWall[].photo`, `careerTracks.vfx.seniorProof[].photo`,
  `careerTracks.film.examples[].photo`): professional headshot, LinkedIn-quality, one per named
  alumnus. Square crop works best (`AlumniCard` renders it in a circle).
- **Company logos** (`companyWall[].logo`): official vector/transparent-PNG logo, sourced from
  each company's own brand-asset page — do not screenshot a logo off Google Images.
- **Career-track hero images** (`careerTracks[key].heroImage`): see `posterNote` on each entry in
  `presentation.js` — each is course-specific (poster spread for design, app UI for UI/UX,
  ramp-walk for fashion, etc.).
- **D2A video local files** (`d2aLibrary[].localSrc` / `featuredVideos[category].localSrc`):
  export each YouTube Short as an MP4 and drop the file in `public/videos/`, then point
  `localSrc` at `/videos/<file>.mp4`. For a short clip, base64-embedding is also viable (same
  pattern as the image assets) — for anything longer, prefer a bundled file over inflating the
  JS bundle.
- **VFX reference reel**: the Baahubali breakdown clip + ICAT's own render/showreel, cut
  together — David said he already has source video for this; get the file from him directly
  rather than re-sourcing.
- **Fashion ramp-walk photo/video**: pull from ICAT's own fashion-department showcase archive —
  this is explicitly *their* footage, not stock.
- **Interior design**: no slide exists yet (see §1.6) — first step is sourcing verified
  residential/commercial project photography and placement data from the interior design
  department, then a new `careerTracks.interior` entry can be added following the same
  `heroImage`/`posterNote` pattern as every other track.
