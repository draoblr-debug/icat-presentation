import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import VideoCard from '../components/VideoCard.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { careerTracks, featuredVideos, sources } from '../data/presentation.js'

export default function FilmSlide() {
  const track = careerTracks.film
  return (
    <Slide kicker="FILM / CINEMATOGRAPHY" source={sources.d2a}>
      <div className="career-split">
        <div>
          <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.04} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }}>
            {track.examples.map((ex) => (
              <div key={ex.name} className="alumni-card" style={{ display: 'block' }}>
                <ImagePlaceholder src={ex.photo} alt={ex.name} kind="photo" aspect="1 / 1" className="alumni-card__photo" />
                <div className="alumni-card__name">{ex.name}</div>
                <div className="alumni-card__role">{ex.role}</div>
                <div className="alumni-card__meta">
                  {[ex.batch, ex.department, ex.location].filter(Boolean).join(' · ')}
                </div>
                {(ex.note || ex.achievement) && (
                  <div className="alumni-card__achievement">{ex.note || ex.achievement}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <VideoCard video={featuredVideos.film} label="D2A · Film / Cinematography" />
        </div>
      </div>
    </Slide>
  )
}
