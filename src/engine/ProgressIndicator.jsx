export default function ProgressIndicator({ index, total }) {
  const pct = ((index + 1) / total) * 100
  return (
    <div className="progress-rail" aria-hidden="true">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}
