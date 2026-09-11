import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function CareerCard({ track }) {
  if (!track) return null
  return (
    <div className="career-card">
      <ImagePlaceholder
        src={track.heroImage}
        alt={track.label}
        kind="poster"
        aspect="16 / 10"
        note={track.posterNote}
        className="career-card__hero"
      />
      {track.salaryRange && (
        <div className="career-card__salary">
          {track.salaryRange}
          {track.salaryNote && <span className="career-card__salary-note">{track.salaryNote}</span>}
        </div>
      )}
      {track.roles?.length > 0 && (
        <ul className="career-card__roles">
          {track.roles.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      {track.examples?.length > 0 && (
        <div className="career-card__examples">
          {track.examples.map((ex) => (
            <div className="career-card__example" key={ex.name}>
              <span className="career-card__example-name">{ex.name}</span>
              <span className="career-card__example-role">
                {ex.role} · {ex.company}
              </span>
              {ex.salary && <span className="career-card__example-salary">{ex.salary}</span>}
            </div>
          ))}
        </div>
      )}
      {track.source && <div className="track-source">Source: {track.source}</div>}
    </div>
  )
}
