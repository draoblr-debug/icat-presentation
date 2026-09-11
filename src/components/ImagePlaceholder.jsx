/**
 * Image / video placeholder slot.
 *
 * Mr. David's feedback (seminar prep call, 2026-09-11) was explicit: the deck
 * currently has almost no real imagery — it leans entirely on kinetic
 * typography — and every course/alumni/industry point needs a photo, poster,
 * logo or video to actually "communicate" (his word) rather than just state
 * a fact. See IMAGE_VIDEO_NOTES.md for the full brief per slide.
 *
 * This component renders the real asset once one is supplied (`src`, a
 * base64 data URI so the deck keeps working with zero internet), and falls
 * back to a clearly-labelled placeholder box otherwise — so the skeleton
 * shows exactly where an image belongs and what it should contain, without
 * ever presenting fabricated content to an audience.
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  note,
  kind = 'photo', // 'photo' | 'logo' | 'poster' | 'video'
  aspect = '4 / 3',
  className = '',
}) {
  if (src) {
    return (
      <div className={`img-slot img-slot--filled ${className}`} style={{ aspectRatio: aspect }}>
        <img src={src} alt={alt} loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={`img-slot img-slot--empty img-slot--${kind} ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={note || `${kind} placeholder`}
    >
      <span className="img-slot__icon" aria-hidden="true">
        {kind === 'video' ? '▶' : kind === 'logo' ? '◆' : '⛶'}
      </span>
      <span className="img-slot__label">{kind.toUpperCase()} NEEDED</span>
      {note && <span className="img-slot__note">{note}</span>}
    </div>
  )
}
