import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import CareerCard from '../components/CareerCard.jsx'
import { careerTracks } from '../data/presentation.js'

export default function PhotographySlide() {
  const track = careerTracks.photography
  return (
    <Slide kicker="PHOTOGRAPHY">
      <div className="two-col">
        <div>
          <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.03} />
          <p className="subline" style={{ marginTop: 16 }}>
            Product photography, advertising, fashion and commercial work, content creation,
            freelance projects — a camera is a toolkit for a business, not just a job title.
          </p>
        </div>
        <CareerCard track={track} />
      </div>
    </Slide>
  )
}
