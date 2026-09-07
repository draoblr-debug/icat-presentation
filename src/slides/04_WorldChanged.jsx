import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy, whyIcat } from '../data/presentation.js'

export default function WorldChangedSlide() {
  return (
    <Slide kicker="AI · AUTOMATION · CHANGE">
      <div className="hero" style={{ justifyContent: 'center', gap: 28 }}>
        <KineticText as="h2" className="display-lg" text={copy.worldChanged.headline} stagger={0.05} />
        <p className="subline">{copy.worldChanged.body}</p>
        <div className="quote-block">
          <p className="quote-block__text">{whyIcat.worldContext.quote}</p>
          <p className="quote-block__source">Source: {whyIcat.worldContext.source}</p>
        </div>
      </div>
    </Slide>
  )
}
