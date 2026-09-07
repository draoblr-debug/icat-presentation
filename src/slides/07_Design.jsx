import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import CareerCard from '../components/CareerCard.jsx'
import { careerTracks } from '../data/presentation.js'

export default function DesignSlide() {
  const track = careerTracks.design
  return (
    <Slide kicker="GRAPHIC DESIGN / ADVERTISING">
      <div className="career-split">
        <div>
          <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.03} />
          <p className="subline" style={{ marginTop: 18 }}>
            Branding, advertising, digital and print, social media, visual communication — and a
            thriving freelance market alongside full-time roles.
          </p>
        </div>
        <CareerCard track={track} />
      </div>
    </Slide>
  )
}
