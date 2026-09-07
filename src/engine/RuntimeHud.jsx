const CAP_SECONDS = 15 * 60

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60)
  const s = Math.floor(totalSeconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function RuntimeHud({ visible, elapsedSeconds, index, total, title, presenterMode }) {
  if (!visible) return null
  const over = elapsedSeconds > CAP_SECONDS
  return (
    <div className={`runtime-hud${presenterMode ? ' runtime-hud--presenter' : ''}`}>
      <div className="runtime-hud__row">
        <span className="runtime-hud__slide">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="runtime-hud__title">{title}</span>
        <span className={`runtime-hud__time${over ? ' runtime-hud__time--over' : ''}`}>
          {formatTime(elapsedSeconds)} / {formatTime(CAP_SECONDS)}
        </span>
      </div>
      {presenterMode && (
        <div className="runtime-hud__hint">
          ← → / Space navigate · Home / End jump · H hide HUD · F fullscreen
        </div>
      )}
    </div>
  )
}
