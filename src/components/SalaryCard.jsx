export default function SalaryCard({ range, note, source }) {
  if (!range) return null
  return (
    <div className="salary-card">
      <div className="salary-card__range">{range}</div>
      {note && <div className="salary-card__note">{note}</div>}
      {source && <div className="salary-card__source">{source}</div>}
    </div>
  )
}
