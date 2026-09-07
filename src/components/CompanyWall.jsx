export default function CompanyWall({ items }) {
  return (
    <div className="company-wall">
      {items.map((c) => (
        <div className="company-wall__item" key={c.company + c.alumnus}>
          <div className="company-wall__company">{c.company}</div>
          <div className="company-wall__sector">{c.sector}</div>
          <div className="company-wall__detail">
            {c.alumnus}
            {c.role ? ` · ${c.role}` : ''}
          </div>
          {c.project && <div className="company-wall__project">{c.project}</div>}
          {c.note && <div className="company-wall__note">{c.note}</div>}
          {c.location && <div className="company-wall__location">{c.location}</div>}
        </div>
      ))}
    </div>
  )
}
