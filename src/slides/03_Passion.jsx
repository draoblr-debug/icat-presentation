import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import VideoCard from '../components/VideoCard.jsx'
import { copy, featuredVideos, sources } from '../data/presentation.js'

export default function PassionSlide() {
  return (
    <Slide source={sources.d2a}>
      <div className="hero--split" style={{ display: 'flex', height: '100%' }}>
        <div className="hero__col">
          <KineticText as="h2" className="display-lg" text={copy.passion.lineOne} stagger={0.04} />
          <div style={{ height: 18 }} />
          <KineticText
            as="h3"
            className="display-md accent"
            text={copy.passion.lineTwo}
            delay={0.6}
            stagger={0.03}
          />
        </div>
        <div className="hero__col" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <VideoCard video={featuredVideos.passion} label="D2A · Passion → Profession" />
        </div>
      </div>
    </Slide>
  )
}
