/**
 * ============================================================================
 * PRESENTATION DATA — "Life After +2" (ICAT Design & Media College)
 * ============================================================================
 *
 * This file is the single source of truth for every fact, name, figure and
 * link shown in the presentation. UI components never hard-code content —
 * they render whatever is here.
 *
 * DATA INTEGRITY POLICY (see README / DATA_VERIFICATION.md):
 *   - Every alumni/salary/company fact below was pulled verbatim from ICAT's
 *     own placement records, D2A show-prep documents, or academic decks.
 *   - Fields the presentation could not verify are left as `null` (or the
 *     record is annotated `verified: false`). Components MUST treat `null`
 *     as "omit this field" — never render a placeholder string in front of
 *     an audience. Search this file for `NEEDS VERIFICATION` to find every
 *     figure the placement/marketing team should confirm before a real
 *     seminar run.
 *   - Nothing here is fabricated. Where the build spec suggested a figure
 *     (e.g. "₹3–6 LPA") that could not be independently verified against
 *     ICAT records, it was replaced with an actual verified range instead.
 */

// ---------------------------------------------------------------------------
// BRAND
// ---------------------------------------------------------------------------

export const brand = {
  name: 'ICAT Design & Media College',
  shortName: 'ICAT',
  parentGroup: 'Image Group of Companies',
  website: 'icat.ac.in',
  websiteUrl: 'https://icat.ac.in',
  whatsappNumber: '99861 28864',
  whatsappPrompt: 'Send your Name + Email to claim your free Creative Career Book',
  socials: [
    { label: 'Instagram', handle: '@icatdesign', url: 'https://instagram.com/icatdesign' },
    { label: 'YouTube — D2A Show', handle: 'ICAT College of Design & Media', url: 'https://www.youtube.com/@ICATDesign' },
  ],
  // NEEDS VERIFICATION: confirm exact handle spellings with marketing before publishing.
}

// ---------------------------------------------------------------------------
// D2A ALUMNI VIDEO LIBRARY
// ---------------------------------------------------------------------------
// Full library of supplied D2A links (section 8 of the brief). Per the brief's
// own rule ("do not use every video — maximum 3–5 clips"), only a subset is
// wired into `featuredVideos` for actual slides. The rest remain here,
// untouched and fully linked, so a presenter can swap the selection later
// without hunting for URLs again.

function youtubeId(url) {
  const m = url.match(/shorts\/([A-Za-z0-9_-]+)/)
  return m ? m[1] : null
}

export const d2aLibrary = [
  {
    key: 'surendran',
    name: 'Surendran Ramachandran',
    title: 'He Failed Three Times. The Fourth Worked.',
    url: 'https://www.youtube.com/shorts/Sj1mAgJyNhA',
    category: 'resilience',
  },
  {
    key: 'moulie',
    name: 'Mouliesvaran R',
    title: 'The Craziest Client Request Ever?',
    url: 'https://www.youtube.com/shorts/IwUJ3n4VI1E',
    category: 'advertising',
  },
  {
    key: 'zeeshan',
    name: 'Zeeshan J',
    title: 'From BMTC Bus to BMW (Part 2)',
    url: 'https://www.youtube.com/shorts/VHNjcR1_gE4',
    category: 'placement',
  },
  {
    key: 'shashidhar-1',
    name: 'Shashidhar H Mahesh',
    title: 'Doing What You Love Never Feels Like Work',
    url: 'https://www.youtube.com/shorts/bWZw-NPMjVc',
    category: 'passion',
  },
  {
    key: 'shashidhar-2',
    name: 'Shashidhar H Mahesh',
    title: 'Turn Your Passion Into Your Profession',
    url: 'https://www.youtube.com/shorts/GZxpDZKHrv8',
    category: 'passion',
  },
  {
    key: 'govardhan-1',
    name: 'Govardhan D Gosavi',
    title: 'From ICAT Student to Award-Winning Game Founder',
    url: 'https://www.youtube.com/shorts/Z9_VTNYYdTM',
    category: 'gaming',
  },
  {
    key: 'govardhan-2',
    name: 'Govardhan D Gosavi',
    title: 'He Built Games for Xbox & Nintendo Switch',
    url: 'https://www.youtube.com/shorts/WmBLNbvDFI4',
    category: 'gaming',
  },
  {
    key: 'arpith-1',
    name: 'Arpith Scindhia',
    title: 'Why Your First Job Matters So Much',
    url: 'https://www.youtube.com/shorts/Gspr1MKfNyg',
    category: 'uiux',
  },
  {
    key: 'arpith-2',
    name: 'Arpith Scindhia',
    title: 'Curiosity Changed My Entire Career',
    url: 'https://www.youtube.com/shorts/w0wxuG5-caQ',
    category: 'uiux',
  },
  {
    key: 'arpith-3',
    name: 'Arpith Scindhia',
    title: 'From Underdog to VP of Design',
    url: 'https://www.youtube.com/shorts/GZ-GYMUhCn4',
    category: 'uiux',
  },
  {
    key: 'bhanu',
    name: 'Bhanu Prakash',
    title: 'How an ICAT Student Became a Senior Cinematographer',
    url: 'https://www.youtube.com/shorts/nLeTQrBOxq8',
    category: 'film',
  },
  {
    key: 'amol',
    name: 'Amol Patil',
    title: 'From Award-Winning Short Films to Blockbuster Cinema',
    url: 'https://www.youtube.com/shorts/5Ier-peAl04',
    category: 'film',
    location: 'North Karnataka',
  },
  {
    key: 'abhishek',
    name: 'Abhishek Samuel',
    title: 'Years of Hustle. One Moment of Recognition.',
    url: 'https://www.youtube.com/shorts/i8G7QWUuimI',
    category: 'recognition',
  },
  {
    key: 'cold-open',
    name: 'D2A',
    title: 'A Dream Was Planted Here. The Future Came Looking For It.',
    url: 'https://www.youtube.com/shorts/KEGKrgxrZ28',
    category: 'cold-open',
  },
  {
    key: 'vfx-aspiration',
    name: 'D2A',
    title: "When your dream is to build the 'Disney/Pixar of India.'",
    url: 'https://www.youtube.com/shorts/UJYGw4w4CRY',
    category: 'vfx',
  },
].map((v) => ({
  ...v,
  youtubeId: youtubeId(v.url),
  thumbnail: `https://img.youtube.com/vi/${youtubeId(v.url)}/hqdefault.jpg`,
  // Mr. David (review call, 2026-09-11): the deck must play "without
  // internet" — venues often have none during the seminar. Long-term this
  // means dropping in a local video file per clip (path relative to
  // /public, or a base64 data URI for a short cut-down) so VideoCard can
  // play it offline instead of hitting the YouTube iframe. `null` until a
  // presenter supplies the actual file.
  localSrc: null,
}))

function fromLibrary(key) {
  const v = d2aLibrary.find((x) => x.key === key)
  if (!v) throw new Error(`D2A video not found: ${key}`)
  return v
}

// The five clips actually used in the deck — chosen to cover passion,
// gaming, film/cinematography, UI/UX, and the strongest placement story,
// per the brief's selection rule. Total runtime stays inside the 15-minute cap.
export const featuredVideos = {
  passion: fromLibrary('shashidhar-1'),
  gaming: fromLibrary('govardhan-1'),
  film: fromLibrary('bhanu'),
  uiux: fromLibrary('arpith-3'),
  placement: fromLibrary('zeeshan'),
}

// ---------------------------------------------------------------------------
// CAREER TRACKS — verified salary bands, built from ICAT placement records
// (2021–24 and 2025–26 sheets), NOT the illustrative figures in the original
// brief. Every number below traces to a named, dated placement record.
// ---------------------------------------------------------------------------

// `heroImage: null` + `posterNote` on every track below: Mr. David wants a
// full-bleed reference image per course slide ("Idhu TV friends, reference"
// / "inga image potta andha idhu communicate aagum" — an image there makes
// it communicate). posterNote captures what he described that image as.
// See IMAGE_VIDEO_NOTES.md for the complete brief.
const heroImageNotes = {
  design: 'Full-bleed poster/album-style spread of graphic design + advertising work — logos, posters, brand campaigns (he specifically referenced building a poster "album booklet" of design work).',
  gaming: 'Screenshot or render from a shipped student/alumni game (e.g. Sigma Games titles on Xbox/Switch) — actual gameplay or key art, not stock imagery.',
  vfx: 'A high-quality VFX/3D render or making-of still. He referenced Baahubali as an emotional touchstone the audience already responds to — pair one recognisable industry VFX reference with ICAT-produced/alumni work so the standard reads as "ours," not borrowed.',
  film: 'Behind-the-scenes still or key frame from an alumni production (e.g. Amol Patil\'s "Udaala") — a camera-on-set or cinema-still image.',
  uiux: 'App/product UI screen mockup — he was explicit that "UI UX na UI app kku photos irukkum" (UI/UX needs app screenshots, not generic graphic-design imagery).',
  fashion: 'Ramp-walk / fashion show photography — he asked for this directly ("ramp walk pannuvanga thane, edhadhu ramp walk video irundha adha run pannidalam"): a runway photo, ideally with a runway video available as a secondary asset.',
  photography: 'A strong portfolio shot by an alumnus (e.g. Hricthaas Muhammad / Snaptraits) — product or commercial photography sample.',
}

export const careerTracks = {
  design: {
    id: 'design',
    label: 'Graphic Design & Advertising',
    headline: 'DESIGN IS EVERYWHERE BUSINESS HAPPENS',
    salaryRange: '₹2.4L – ₹4L p.a.',
    salaryNote: 'Verified starting range, Multimedia & Design graduates',
    roles: ['Graphic Designer', 'Visual Designer', 'UI/UX Designer', 'Brand Designer'],
    examples: [
      { name: 'Jaheer Abbas', role: 'UI/UX Designer', company: 'Fox8 Studios', location: 'Bangalore', salary: '₹23,330/mo' },
      { name: 'Nagesh JK', role: 'Visual Designer', company: 'Novanatis', location: 'Bangalore', salary: '₹33,333/mo' },
    ],
    source: 'ICAT Placement Records, 2021–24',
  },
  gaming: {
    id: 'gaming',
    label: 'Gaming',
    headline: 'GAMES ARE NO LONGER "JUST GAMES."',
    salaryRange: '₹2.4L – ₹7.8L p.a.',
    salaryNote: 'Verified range across Junior Game Artist to 3D Designer roles',
    roles: ['Game Artist', '3D Artist', 'Technical Artist', 'UI Artist', 'Game Designer'],
    examples: [
      { name: 'Sharath Kumar S', role: 'Junior Game Artist', company: 'Vincell Studios', salary: '₹2.4L p.a.' },
      { name: 'Metai Mahammad Waheed', role: '3D Designer', company: 'Kido Enterprises', salary: '₹7.8L p.a.' },
    ],
    source: 'ICAT Placement Records, 2021–24',
  },
  vfx: {
    id: 'vfx',
    label: 'VFX, 3D & Animation',
    headline: 'VFX = MAKING THE IMPOSSIBLE POSSIBLE',
    salaryRange: '₹1.8L – ₹4.8L p.a.',
    salaryNote: 'Verified entry-level range; alumni go on to senior/global studio roles',
    roles: ['VFX Compositor', '3D Generalist', 'CGI Artist', 'Video Editor'],
    examples: [
      { name: 'Niranjan DP', role: 'Video Editor', company: 'Vedantu Innovations', salary: '₹40,000/mo' },
      { name: 'Surjit Raju MV', role: '3D Generalist', company: 'LIFE VR', salary: '₹25,000/mo' },
    ],
    seniorProof: [
      {
        name: 'Ruchi Rikta',
        role: 'VFX Compositor',
        company: 'DNEG',
        note: 'Compositing work on recent global titles',
        credits: ['The Last of Us', 'Dune: Part Two', 'Kalki 2898 AD', 'Masters of the Air', 'Citadel', '1899', 'Ghostbusters', 'Fast & Furious 9', 'The Call of the Wild'],
      },
      {
        name: 'Yash Gowda',
        role: 'Partner & Global Head of Visual Effects',
        company: 'Monsters Aliens Robots Zombies',
        location: 'Toronto, Canada',
        note: 'International VFX leadership role',
      },
    ],
    source: 'ICAT Placement Records, 2021–24 · VFX Department Academic Presentation',
  },
  film: {
    id: 'film',
    label: 'Film & Cinematography',
    headline: 'CAMERA → STORY → CINEMA',
    salaryRange: null, // NEEDS VERIFICATION — no verified entry salary figure found; omit rather than invent.
    roles: ['Cinematographer', 'Director', 'Editor', 'DOP'],
    examples: [
      {
        name: 'Bhanu Prakash Musmuri',
        batch: '2013–2016',
        department: 'VFX',
        role: 'Cinematographer',
        note: 'Career built from ICAT into professional cinematography work',
      },
      {
        name: 'Amol Patil',
        location: 'North Karnataka',
        role: 'Director',
        achievement: 'Directed feature film "Udaala" — a regional blockbuster, especially in North Karnataka',
      },
    ],
    source: 'D2A Show Brief · ICAT Alumni Records',
  },
  uiux: {
    id: 'uiux',
    label: 'UI/UX',
    headline: 'FROM SCREEN → EXPERIENCE',
    salaryRange: '₹2.8L – ₹3L p.a.',
    salaryNote: 'Verified starting range, UI/UX placements',
    roles: ['UI Designer', 'UX Designer', 'Product Designer', 'Interaction Designer'],
    examples: [
      { name: 'Jaheer Abbas', role: 'UI/UX Designer', company: 'Fox8 Studios', salary: '₹23,330/mo' },
      { name: 'Vishnu Hareesh Parannattil', role: 'UX & Marketing', company: 'Iexceed', salary: '₹24,000/mo' },
    ],
    seniorProof: [
      { name: 'Arpith Scindhia', role: 'VP of Design', company: 'Delhivery', note: 'Grew from first job into design leadership' },
    ],
    source: 'ICAT Placement Records, 2021–24 · D2A Show Brief',
  },
  fashion: {
    id: 'fashion',
    label: 'Fashion',
    headline: 'FASHION = DESIGN + BRAND + BUSINESS',
    // Intentionally no salary model — brief explicitly warns against forcing
    // fashion into salary framing, and no verified fashion-specific salary
    // data was found in ICAT placement records.
    salaryRange: null,
    roles: ['Fashion Designer', 'Stylist', 'Apparel Designer', 'Brand Entrepreneur'],
    examples: [],
    source: null,
  },
  photography: {
    id: 'photography',
    label: 'Photography',
    headline: 'A CAMERA CAN BECOME A BUSINESS.',
    salaryRange: '₹3.5L p.a.',
    salaryNote: 'Verified individual example — illustrative, not a guaranteed outcome',
    roles: ['Product Photographer', 'Commercial Photographer', 'Content Creator', 'Freelancer'],
    examples: [
      { name: 'Hricthaas Muhammad', role: 'Photographer & Designer', company: 'Snaptraits', salary: '₹29,100/mo', location: 'Bangalore' },
    ],
    source: 'ICAT Placement Records, 2021–24',
  },
}

for (const key of Object.keys(careerTracks)) {
  careerTracks[key].heroImage = null
  careerTracks[key].posterNote = heroImageNotes[key] ?? null
}

// ---------------------------------------------------------------------------
// ALUMNI OUTCOME WALL (Screen 14)
// ---------------------------------------------------------------------------

// `photo: null` placeholders below are intentional (see DATA INTEGRITY
// POLICY at the top of this file). Mr. David asked specifically for a real
// photo per alumnus wherever one exists — "Amar Patel photo edukanum",
// i.e. pull a professional/LinkedIn headshot for each named alumnus rather
// than showing only initials. AlumniCard renders an ImagePlaceholder until
// `photo` is filled with a base64 data URI or a verified image path.
function withPhotoSlot(list) {
  return list.map((a) => ({ photo: null, ...a }))
}

export const alumniWall = withPhotoSlot([
  { name: 'Hricthaas Muhammad', course: 'UG Media Technology', role: 'Photographer & Designer', company: 'Snaptraits', location: 'Bangalore', salary: '₹29,100/mo' },
  { name: 'Jaheer Abbas', course: 'Multimedia', role: 'UI/UX Designer', company: 'Fox8 Studios', location: 'Bangalore', salary: '₹23,330/mo' },
  { name: 'Mohithkanna S.S', course: 'Multimedia', role: '3D Artist', company: 'Colad Cloud', location: 'Bangalore', salary: '₹33,333/mo' },
  { name: 'Nagesh JK', course: 'Multimedia', role: 'Visual Designer', company: 'Novanatis', location: 'Bangalore', salary: '₹33,333/mo' },
  { name: 'Metai Mahammad Waheed', course: 'Animation', role: '3D Designer', company: 'Kido Enterprises', salary: '₹7.8L p.a.' },
  { name: 'Varsha T', course: 'Animation', role: 'Illustrator & Motion Designer', company: 'NetBramha Studios', salary: '₹5.5L p.a.' },
  { name: 'Manikandan Mathivanan', course: 'VFX, 2012–15', role: 'Co-Founder', company: 'Pressplay Collective', achievement: 'Gold Medalist, Birmingham City University' },
  { name: 'Siddala Srinath', course: 'VFX, 2013–2016', role: 'Founder', company: 'SSP Media Works', location: 'Andhra Pradesh', achievement: 'Runs 8 ad-agency branches across tier-2 AP cities' },
  { name: 'Arjun Reddy', course: 'VFX, 2009–2012', role: 'Senior Manager, Video Production', company: 'ACKO' },
  { name: 'Vineeth Krishnan', course: 'VFX, 2008–2011', role: 'Art Director — Brand, Marketing & Communication', company: 'EY GDS' },
  { name: 'Yash Gowda', course: 'VFX', role: 'Partner & Global Head of VFX', company: 'Monsters Aliens Robots Zombies', location: 'Toronto, Canada' },
  { name: 'Ruchi Rikta', course: 'VFX', role: 'VFX Compositor', company: 'DNEG', achievement: 'Compositing on The Last of Us, Dune: Part Two, Kalki 2898 AD' },
  { name: 'Zeeshan J', course: 'Animation, 2015', role: 'Founder', company: 'Any Motion Studios', achievement: 'Built into an Adobe vendor partner' },
  { name: 'Bhagvanth Prasad', course: 'Advertising, 2014', role: 'National Creative Director', company: 'Tesseract Experience' },
  { name: 'Govardhan D Gosavi', course: 'Game Development, 2011', role: 'Co-Founder', company: 'Sigma Games', achievement: 'Shipped titles to Xbox & Nintendo Switch; Best Graphics award, Scotland' },
  { name: 'Arpith Scindhia', course: 'Animation, 2012', role: 'VP of Design', company: 'Delhivery' },
  { name: 'Shashidhar H Mahesh', course: 'Animation, 2014', role: 'Senior Game Artist', company: 'Sumo Digital' },
])

// ---------------------------------------------------------------------------
// ₹ PROOF TIERS (Screen 15) — only tiers with a verified example render.
// ---------------------------------------------------------------------------

export const salaryProofTiers = [
  {
    tier: '₹5L+',
    verified: true,
    examples: [
      { name: 'Metai Mahammad Waheed', role: '3D Designer', company: 'Kido Enterprises', amount: '₹7.8L p.a.' },
      { name: 'Varsha T', role: 'Illustrator & Motion Designer', company: 'NetBramha Studios', amount: '₹5.5L p.a.' },
    ],
  },
  {
    tier: '₹10L+',
    verified: false, // NEEDS VERIFICATION — no ₹10L+ individual record found; placement team to supply before this tier is shown.
    examples: [],
  },
  {
    tier: '₹15L+',
    verified: false, // NEEDS VERIFICATION — same as above.
    examples: [],
  },
].filter((t) => t.verified && t.examples.length > 0)

// ---------------------------------------------------------------------------
// GEOGRAPHY (Screen 16)
// ---------------------------------------------------------------------------

export const geography = {
  international: [
    { name: 'Yash Gowda', location: 'Toronto, Canada', role: 'Partner & Global Head of VFX', company: 'Monsters Aliens Robots Zombies' },
  ],
  regional: [
    { name: 'Amol Patil', location: 'North Karnataka', note: 'Directed regional blockbuster "Udaala"' },
    { name: 'Siddala Srinath', location: 'Andhra Pradesh', note: 'Founder, SSP Media Works — 8 branches across tier-2 cities' },
  ],
  states: ['Karnataka', 'Andhra Pradesh'], // NEEDS VERIFICATION — expand with Kerala/Tamil Nadu/Telangana examples once placement team confirms.
}

// ---------------------------------------------------------------------------
// PATHWAYS (Screen 17)
// ---------------------------------------------------------------------------

export const pathways = [
  {
    id: 'employment',
    label: 'Employment',
    flow: ['Skill', 'Job', 'Company', 'Salary', 'Growth'],
    example: { name: 'Arpith Scindhia', detail: 'First design job → VP of Design at Delhivery' },
  },
  {
    id: 'freelancing',
    label: 'Freelancing',
    flow: ['Skill', 'Client', 'Projects', 'Income'],
    example: { name: 'Hricthaas Muhammad', detail: 'Photography & design work, Snaptraits' },
  },
  {
    id: 'entrepreneurship',
    label: 'Entrepreneurship',
    flow: ['Skill', 'Product / Service', 'Business', 'Revenue'],
    example: { name: 'Govardhan D Gosavi', detail: 'Co-founded Sigma Games — shipped to Xbox & Switch' },
  },
]

// ---------------------------------------------------------------------------
// WHY ICAT (Screen 18)
// ---------------------------------------------------------------------------

export const whyIcat = {
  verifiedClaims: [
    'Rated India’s No. 1 Design & Media College by AC Nielsen',
    'First media college in India to receive ISO 9001:2000 certification',
  ],
  // NEEDS VERIFICATION before publishing — confirm exact current figures
  // with the placement team. Left null so nothing unverified is ever shown.
  stats: [
    { label: 'Students placed since 2004', value: null },
    { label: 'VFX / 3D companies in India’s hiring network', value: null },
    { label: 'Gaming companies in India’s hiring network', value: null },
  ].filter((s) => s.value !== null),
  worldContext: {
    quote: 'The World Economic Forum projects close to 170 million new jobs globally this decade, even as nearly 40% of core skills are expected to change by 2030.',
    source: 'World Economic Forum, Future of Jobs Report 2025',
  },
}

// ---------------------------------------------------------------------------
// CURRENT INDUSTRY / COMPANY PROOF (Screen 19)
// ---------------------------------------------------------------------------

// `logo: null` placeholders below are intentional (see DATA INTEGRITY
// POLICY). Mr. David: company names alone don't "communicate" — each tile
// needs the real company logo so recruiters/brands are instantly
// recognisable at a glance from the back of the room.
export const companyWall = [
  { company: 'DNEG', sector: 'VFX', alumnus: 'Ruchi Rikta', project: 'The Last of Us · Dune: Part Two · Kalki 2898 AD', logo: null },
  { company: 'Delhivery', sector: 'Design', alumnus: 'Arpith Scindhia', role: 'VP of Design', logo: null },
  { company: 'ACKO', sector: 'Video Production', alumnus: 'Arjun Reddy', role: 'Senior Manager', logo: null },
  { company: 'EY GDS', sector: 'Brand & Marketing', alumnus: 'Vineeth Krishnan', role: 'Art Director', logo: null },
  { company: 'NetBramha Studios', sector: 'Gaming / Animation', alumnus: 'Varsha T', role: 'Illustrator & Motion Designer', logo: null },
  { company: 'Sigma Games', sector: 'Gaming', alumnus: 'Govardhan D Gosavi', role: 'Co-Founder', note: 'Shipped to Xbox & Nintendo Switch', logo: null },
  { company: 'Any Motion Studios', sector: 'Motion / Advertising', alumnus: 'Zeeshan J', role: 'Founder', note: 'Adobe vendor partner', logo: null },
  { company: 'Monsters Aliens Robots Zombies', sector: 'VFX', alumnus: 'Yash Gowda', role: 'Partner & Global Head of VFX', location: 'Toronto, Canada', logo: null },
  { company: 'Fox8 Studios', sector: 'UI/UX', alumnus: 'Jaheer Abbas', role: 'UI/UX Designer', logo: null },
  { company: 'Tesseract Experience', sector: 'Advertising', alumnus: 'Bhagvanth Prasad', role: 'National Creative Director', logo: null },
]

// ---------------------------------------------------------------------------
// SLIDE COPY — headline / subline text for screens that are mostly kinetic
// typography rather than data-driven cards.
// ---------------------------------------------------------------------------

export const copy = {
  open: {
    kicker: 'ICAT DESIGN & MEDIA COLLEGE',
    headline: 'LIFE AFTER +2',
    subline: 'Where Creativity Becomes a Career',
  },
  hook: {
    headline: 'WHAT IF YOU COULD BUILD A CAREER AROUND WHAT YOU LOVE?',
  },
  passion: {
    lineOne: 'PASSION IS NOT THE OPPOSITE OF A CAREER.',
    lineTwo: 'YOU CAN TURN YOUR PASSION INTO YOUR PROFESSION.',
  },
  worldChanged: {
    headline: 'THE WORLD HAS CHANGED.',
    body: 'Routine work is becoming easier to automate. Creative thinking is becoming more valuable — not less.',
  },
  ecosystem: {
    headline: 'CREATIVE CAREERS ARE EVERYWHERE.',
    categories: ['DESIGN', 'FILM', 'VFX', 'ANIMATION', 'GAMING', 'FASHION', 'PHOTOGRAPHY', 'ADVERTISING', 'UI/UX', '3D / DIGITAL ART'],
  },
  careerMap: {
    headline: 'A SKILL BECOMES A CAREER.',
    flow: ['SKILL', 'ROLE', 'INDUSTRY', 'COMPANY', 'EARNING'],
  },
  realOutcomes: {
    headline: 'REAL PEOPLE. REAL OUTCOMES.',
  },
  proof: {
    headline: 'REAL PEOPLE ARE EARNING REAL MONEY IN CREATIVE CAREERS.',
  },
  geography: {
    headline: 'INDIA → GLOBAL',
    payoff: 'WHERE YOU START DOES NOT HAVE TO DEFINE WHERE YOU END UP.',
  },
  pathways: {
    headline: 'THREE WAYS TO BUILD YOUR CAREER.',
  },
  whyIcat: {
    headline: 'THIS IS THE ECOSYSTEM ICAT PREPARES YOU FOR.',
  },
  industryProof: {
    headline: 'CURRENT WORK. REAL COMPANIES.',
  },
  finalPayoff: {
    lineOne: 'YOUR PASSION CAN BECOME YOUR PROFESSION.',
    lineTwo: 'ICAT DESIGN & MEDIA COLLEGE',
  },
}

// ---------------------------------------------------------------------------
// SOURCE ATTRIBUTION LABELS (Screen footers)
// ---------------------------------------------------------------------------

export const sources = {
  placement: 'Source: ICAT Placement Records',
  alumni: 'Source: ICAT Alumni Records',
  d2a: 'Source: ICAT College of Design & Media — D2A',
  website: 'Source: ICAT Website',
}
