import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy, brand } from '../data/presentation.js'

export default function OpenSlide() {
  return (
    <Slide variant="flat">
      <div className="hero" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="slide__kicker" style={{ marginBottom: 0 }}>{copy.open.kicker}</div>
        <KineticText
          as="h1"
          className="display-xl"
          text={copy.open.headline}
          delay={0.15}
          stagger={0.07}
        />
        <p className="subline" style={{ alignSelf: 'center' }}>{copy.open.subline}</p>
        <p style={{ fontSize: '0.7rem', opacity: 0.4, marginTop: 8 }}>{brand.parentGroup}</p>
      </div>
    </Slide>
  )
}
