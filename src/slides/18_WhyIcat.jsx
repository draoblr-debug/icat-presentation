import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy, whyIcat, sources } from '../data/presentation.js'

export default function WhyIcatSlide() {
  return (
    <Slide kicker="WHY ICAT" source={sources.website}>
      <div className="hero" style={{ justifyContent: 'center', gap: 26 }}>
        <KineticText as="h2" className="display-lg" text={copy.whyIcat.headline} stagger={0.025} />
        <div className="badge-row">
          {whyIcat.verifiedClaims.map((c) => (
            <span className="badge" key={c}>
              {c}
            </span>
          ))}
        </div>
        {whyIcat.stats.length > 0 && (
          <div className="stat-row">
            {whyIcat.stats.map((s) => (
              <div className="stat-block" key={s.label}>
                <span className="stat-block__value display-lg accent">{s.value}</span>
                <span className="stat-block__label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
        <p className="subline">
          This is the ecosystem ICAT prepares you to enter — not a promise, a pipeline.
        </p>
      </div>
    </Slide>
  )
}
