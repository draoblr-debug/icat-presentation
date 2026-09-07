import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {track.seniorProof.map((p) => (
            <div key={p.name} className="alumni-card" style={{ display: 'block' }}>
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
          ))}
        </div>
      </div>
    </Slide>
  )
}
