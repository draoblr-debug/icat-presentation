/**
 * Shared slide chrome: consistent padding grid, optional kicker label,
 * optional small source-attribution footer. Individual slides compose
 * their own content inside `children` — this only supplies the frame.
 */
export default function Slide({ kicker, source, variant = '', className = '', children }) {
  return (
    <div className={`slide slide--${variant} ${className}`}>
      <div className="slide__grain" aria-hidden="true" />
      {kicker && <div className="slide__kicker">{kicker}</div>}
      <div className="slide__content">{children}</div>
      {source && <div className="slide__source">{source}</div>}
    </div>
  )
}
