import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { careerTracks, sources } from '../data/presentation.js'

export default function VfxSlide() {
  const track = careerTracks.vfx
  return (
    <Slide kicker="VFX / 3D / ANIMATION" source={sources.alumni}>
      <div className="two-col">
        <div>
          <KineticText as="h2" className="display-lg" text={track.headline} stagger={0.03} />
          <p className="subline" style={{ marginTop: 16 }}>
            Verified entry-level range: <span className="accent">{track.salaryRange}</span> — with a
            clear path to senior and global studio roles.
          </p>
          {/*
            Mr. David's specific note here: run a recognisable industry VFX
            reference (he named Baahubali — "Bahubali everyone loves",
            an instant emotional hook) alongside ICAT's own render/showreel
            work, so the audience's excitement transfers onto ICAT's actual
            standard rather than staying attached only to the borrowed clip.
          */}
          <ImagePlaceholder
            kind="video"
            aspect="16 / 9"
            note='Reference VFX reel: a well-known breakdown (e.g. Baahubali) cut together with ICAT alumni/student showreel work — local video file for offline playback.'
            className="vfx-reference-slot"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {track.seniorProof.map((p) => (
            <div key={p.name} className="alumni-card">
              <ImagePlaceholder src={p.photo} alt={p.name} kind="photo" aspect="1 / 1" className="alumni-card__photo" />
              <div className="alumni-card__body">
                <div className="alumni-card__name">{p.name}</div>
                <div className="alumni-card__role">
                  {p.role} · {p.company}
                </div>
                {p.location && <div className="alumni-card__meta">{p.location}</div>}
                {p.note && <div className="alumni-card__achievement">{p.note}</div>}
                {p.credits && (
                  <div style={{ fontSize: '0.68rem', color: 'var(--paper-dim)', marginTop: 8, lineHeight: 1.6 }}>
                    {p.credits.join(' · ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
