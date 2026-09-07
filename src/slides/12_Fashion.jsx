import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { careerTracks } from '../data/presentation.js'

export default function FashionSlide() {
  const track = careerTracks.fashion
  return (
    <Slide kicker="FASHION">
      <div className="hero" style={{ justifyContent: 'center', gap: 30 }}>
        <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.03} />
        <div className="flow-row">
          {track.roles.map((r) => (
            <span key={r} className="flow-row__step">
              {r}
            </span>
          ))}
        </div>
        <p className="subline">
          Design, styling, apparel, brand building, e-commerce and entrepreneurship — fashion
          careers grow into businesses as often as they grow into jobs.
        </p>
      </div>
    </Slide>
  )
}
