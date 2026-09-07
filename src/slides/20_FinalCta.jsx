import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import CTA from '../components/CTA.jsx'
import { copy } from '../data/presentation.js'

export default function FinalCtaSlide() {
  return (
    <Slide variant="flat">
      <div className="hero" style={{ justifyContent: 'center', gap: 30 }}>
        <KineticText as="h2" className="display-lg" text={copy.finalPayoff.lineOne} stagger={0.03} />
        <KineticText
          as="h1"
          className="display-xl accent"
          text={copy.finalPayoff.lineTwo}
          delay={0.5}
          stagger={0.025}
        />
        <CTA />
      </div>
    </Slide>
  )
}
