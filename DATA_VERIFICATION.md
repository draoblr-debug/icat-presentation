# Data verification checklist

This presentation was built from real ICAT source documents (D2A show-prep docs, department
placement spreadsheets from 2021–24 and 2025–26, the VFX department academic deck, and an existing
career-guidance outreach letter) rather than the illustrative figures suggested in the original
build brief. Every name, role, company, and figure currently on screen traces to one of those
documents — see the `source` / `sources` fields next to each record in `src/data/presentation.js`.

A small number of figures the brief asked for could **not** be verified against any available
document. Rather than invent them, they are left as `null` in the data file (search for `NEEDS
VERIFICATION`) and the corresponding UI element simply does not render — nothing placeholder-shaped
ever reaches the audience. Before this deck is used in a real seminar, please confirm the following
with the placement and marketing teams and fill them in:

| # | Location in data file | What's needed | Why it's currently blank |
|---|---|---|---|
| 1 | `whyIcat.stats` (three entries) | Current totals for "students placed since 2004," "VFX/3D hiring-partner companies," "gaming hiring-partner companies" | The brief's suggested figures (9,500+ / 300+ / 100+) could not be matched to any current, dated record found during research. Recent placement sheets show much smaller cohort-level numbers (e.g. AY 2025-26: 119 UG students, 57 placed at the time of that snapshot) that measure something different from a cumulative "since 2004" total. |
| 2 | `salaryProofTiers` — `₹10L+` and `₹15L+` tiers | At least one named, verified individual example per tier | No individual placement record at or above ₹10L was found in the sheets reviewed. The ₹5L+ tier is already populated with two verified examples (Metai Mahammad Waheed, ₹7.8L p.a.; Varsha T, ₹5.5L p.a.). |
| 3 | `careerTracks.film.salaryRange` | A verified entry-level salary range for Film/Cinematography roles | Film-track alumni records found (Bhanu Prakash, Amol Patil) include role and company/achievement detail but no disclosed salary figure. |
| 4 | `careerTracks.fashion` | Any verified Fashion-department placement or salary data, if the seminar team wants to add figures | None was found in the reviewed sheets. The brief explicitly says not to force a salary model onto Fashion, so this is presented qualitatively by design — filling this in is optional, not required. |
| 5 | `geography.states` | Additional verified regional examples (Kerala, Tamil Nadu, Telangana, etc.) | Only Karnataka and Andhra Pradesh examples were found with a named alumnus attached. |
| 6 | `brand.socials` | Exact current Instagram/YouTube handle spellings | Not confirmed against a live account at build time — double check before publishing clickable links. |

## Everything else on screen is sourced from

- **D2A: Dreamers to Achievers — Show Brief** (Season 1 alumni bios)
- **D2A Season 2 — Social Media Creative Brief**
- **ICAT_D2A_Show_Scripts_Final**
- **VFX Department BLR Academic Presentation** (Ruchi Rikta / DNEG credit list, Yash Gowda)
- **ICAT- BLR Placement 2021–2024** (named salary records, Multimedia/Animation/VFX depts)
- **Bangalore- Student placement consolidated Information Sheet, AY 2025–26**
- **icat_career_guidance_proposal_Schools_updated** (AC Nielsen / ISO 9001:2000 claims, WEF Future of
  Jobs Report 2025 quote)

If a newer or more complete version of any of these documents exists by the time this deck is
presented, re-check the specific figures above against it before publishing.
