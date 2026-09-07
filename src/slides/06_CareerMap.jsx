import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy } from '../data/presentation.js'

export default function CareerMapSlide() {
  return (
    <Slide kicker="HOW IT ACTUALLY WORKS">
      <div className="hero" style={{ justifyContent: 'center', gap: 40 }}>
        <KineticText as="h2" className="display-md" text={copy.careerMap.headline} stagger={0.03} />
        <div className="flow-row">
          {copy.careerMap.flow.map((step, i) => (
            <span key={step} style={{ display: 'contents' }}>
              <span className="flow-row__step">{step}</span>
              {i < copy.careerMap.flow.length - 1 && <span className="flow-row__arrow">→</span>}
            </span>
          ))}
        </div>
        <p className="subline">
          A creative course is not the end of the journey — it's the first link in a chain that
          ends in a real job, at a real company, earning real money.
        </p>
      </div>
    </Slide>
  )
}
