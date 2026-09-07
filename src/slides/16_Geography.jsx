import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy, geography, sources } from '../data/presentation.js'

export default function GeographySlide() {
  return (
    <Slide kicker={copy.geography.headline} source={sources.alumni}>
      <div className="geo-row" style={{ marginTop: 8 }}>
        <div className="geo-col">
          <span className="geo-col__label">International</span>
          {geography.international.map((g) => (
            <div className="geo-item" key={g.name}>
              <div className="geo-item__name">{g.name}</div>
              <div className="geo-item__loc">{g.location}</div>
              <div className="geo-item__note">
                {g.role} · {g.company}
              </div>
            </div>
          ))}
        </div>
        <div className="geo-col">
          <span className="geo-col__label">Regional India</span>
          {geography.regional.map((g) => (
            <div className="geo-item" key={g.name}>
              <div className="geo-item__name">{g.name}</div>
              <div className="geo-item__loc">{g.location}</div>
              <div className="geo-item__note">{g.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 'auto', paddingTop: 24 }}>
        <KineticText as="h3" className="display-md" text={copy.geography.payoff} stagger={0.02} />
      </div>
    </Slide>
  )
}
