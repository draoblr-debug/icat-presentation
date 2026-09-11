import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function AlumniCard({ alumnus }) {
  const { name, course, role, company, location, salary, achievement, photo } = alumnus
  return (
    <div className="alumni-card">
      {photo ? (
        <ImagePlaceholder src={photo} alt={name} kind="photo" aspect="1 / 1" className="alumni-card__photo" />
      ) : (
        <div className="alumni-card__initial" aria-hidden="true">{name.charAt(0)}</div>
      )}
      <div className="alumni-card__body">
        <div className="alumni-card__name">{name}</div>
        {(role || company) && (
          <div className="alumni-card__role">
            {role}
            {role && company ? ' · ' : ''}
            {company}
          </div>
        )}
        <div className="alumni-card__meta">
          {[course, location].filter(Boolean).join(' · ')}
        </div>
        {achievement && <div className="alumni-card__achievement">{achievement}</div>}
        {salary && <div className="alumni-card__salary">{salary}</div>}
      </div>
    </div>
  )
}
