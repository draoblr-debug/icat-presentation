import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import CareerCard from '../components/CareerCard.jsx'
import VideoCard from '../components/VideoCard.jsx'
import { careerTracks, featuredVideos, sources } from '../data/presentation.js'

export default function UiuxSlide() {
  const track = careerTracks.uiux
  return (
    <Slide kicker="UI / UX" source={sources.d2a}>
      <div className="career-split">
        <div>
          <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.03} />
          <div style={{ marginTop: 20 }}>
            <CareerCard track={track} />
          </div>
        </div>
        <div className="video-card-slot">
          <VideoCard video={featuredVideos.uiux} label="D2A · UI/UX" />
        </div>
      </div>
    </Slide>
  )
}
