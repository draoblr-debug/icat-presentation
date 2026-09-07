import OpenSlide from '../slides/01_Open.jsx'
import HookSlide from '../slides/02_Hook.jsx'
import PassionSlide from '../slides/03_Passion.jsx'
import WorldChangedSlide from '../slides/04_WorldChanged.jsx'
import EcosystemSlide from '../slides/05_Ecosystem.jsx'
import CareerMapSlide from '../slides/06_CareerMap.jsx'
import DesignSlide from '../slides/07_Design.jsx'
import GamingSlide from '../slides/08_Gaming.jsx'
import VfxSlide from '../slides/09_Vfx.jsx'
import FilmSlide from '../slides/10_Film.jsx'
import UiuxSlide from '../slides/11_Uiux.jsx'
import FashionSlide from '../slides/12_Fashion.jsx'
import PhotographySlide from '../slides/13_Photography.jsx'
import RealOutcomesSlide from '../slides/14_RealOutcomes.jsx'
import ProofSlide from '../slides/15_Proof.jsx'
import GeographySlide from '../slides/16_Geography.jsx'
import PathwaysSlide from '../slides/17_Pathways.jsx'
import WhyIcatSlide from '../slides/18_WhyIcat.jsx'
import IndustryProofSlide from '../slides/19_IndustryProof.jsx'
import FinalCtaSlide from '../slides/20_FinalCta.jsx'

// `transitionIn` is the transition style used when arriving at that slide —
// chosen per the brief's rule that transition types map to content type
// rather than being randomised. `pace` is an approximate seconds-on-screen
// budget used only to keep the whole deck honest against the 15-minute cap;
// it does not drive any timer.
export const slides = [
  { id: 'open', title: 'ICAT Brand Open', Component: OpenSlide, transitionIn: 'zoom', pace: 30 },
  { id: 'hook', title: 'The Hook', Component: HookSlide, transitionIn: 'crossfade', pace: 45 },
  { id: 'passion', title: 'Passion → Profession', Component: PassionSlide, transitionIn: 'mask', pace: 50 },
  { id: 'world-changed', title: 'The World Has Changed', Component: WorldChangedSlide, transitionIn: 'crossfade', pace: 45 },
  { id: 'ecosystem', title: 'Creative Careers Are Everywhere', Component: EcosystemSlide, transitionIn: 'push', pace: 40 },
  { id: 'career-map', title: 'Career Map', Component: CareerMapSlide, transitionIn: 'push', pace: 40 },
  { id: 'design', title: 'Graphic Design / Advertising', Component: DesignSlide, transitionIn: 'push', pace: 45 },
  { id: 'gaming', title: 'Gaming', Component: GamingSlide, transitionIn: 'push', pace: 50 },
  { id: 'vfx', title: 'VFX / 3D / Animation', Component: VfxSlide, transitionIn: 'mask', pace: 50 },
  { id: 'film', title: 'Film / Cinematography', Component: FilmSlide, transitionIn: 'crossfade', pace: 50 },
  { id: 'uiux', title: 'UI/UX', Component: UiuxSlide, transitionIn: 'push', pace: 50 },
  { id: 'fashion', title: 'Fashion', Component: FashionSlide, transitionIn: 'crossfade', pace: 35 },
  { id: 'photography', title: 'Photography', Component: PhotographySlide, transitionIn: 'crossfade', pace: 35 },
  { id: 'real-outcomes', title: 'Real People. Real Outcomes.', Component: RealOutcomesSlide, transitionIn: 'vertical', pace: 55 },
  { id: 'proof', title: '₹ Proof', Component: ProofSlide, transitionIn: 'zoom', pace: 40 },
  { id: 'geography', title: 'India + The World', Component: GeographySlide, transitionIn: 'push', pace: 40 },
  { id: 'pathways', title: 'Employment / Freelance / Entrepreneurship', Component: PathwaysSlide, transitionIn: 'vertical', pace: 40 },
  { id: 'why-icat', title: 'Why ICAT', Component: WhyIcatSlide, transitionIn: 'crossfade', pace: 45 },
  { id: 'industry-proof', title: 'Current Industry Proof', Component: IndustryProofSlide, transitionIn: 'push', pace: 40 },
  { id: 'final-cta', title: 'Final Payoff / CTA', Component: FinalCtaSlide, transitionIn: 'zoom', pace: 45 },
]

export const totalPaceSeconds = slides.reduce((sum, s) => sum + s.pace, 0)
