import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import CareerCard from '../components/CareerCard.jsx'
import VideoCard from '../components/VideoCard.jsx'
import { careerTracks, featuredVideos, sources } from '../data/presentation.js'

export default function GamingSlide() {
  const track = careerTracks.gaming
  return (
    <Slide kicker="GAMING" source={sources.d2a}>
      <div className="career-split">
        <div>
          <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.03} />
          <div style={{ marginTop: 22 }}>
            <CareerCard track={track} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <VideoCard video={featuredVideos.gaming} label="D2A · Gaming" />
        </div>
      </div>
    </Slide>
  )
}
