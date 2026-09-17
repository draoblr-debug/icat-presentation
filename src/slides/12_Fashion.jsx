import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { careerTracks } from '../data/presentation.js'

export default function FashionSlide() {
  const track = careerTracks.fashion
  return (
    <Slide kicker="FASHION">
      <div className="two-col">
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
        {/*
          Mr. David asked for this directly: ramp-walk photography as the
          defining image for this category (a ramp-walk video from ICAT's
          own showcase footage is a good secondary asset — see
          IMAGE_VIDEO_NOTES.md), plus a short list of real companies known
          to hire fashion designers (he named Arvind Mills as an example of
          the kind of reference — verify actual hiring relationships before
          naming a specific company on-slide).
        */}
        <ImagePlaceholder
          kind="poster"
          aspect="3 / 4"
          note="Ramp-walk photography — students' own showcase, full-length runway shot."
          className="career-card__hero"
        />
      </div>
    </Slide>
  )
}
