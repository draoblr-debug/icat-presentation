import { useState } from 'react'

/**
 * Cinematic video frame for a D2A alumni short.
 *
 * Behaviour (per brief section 7):
 *  - Never navigates away from the presentation on its own — playback opens
 *    inline in an iframe embed, only on an explicit click (a real user
 *    gesture, so sound is allowed without fighting autoplay policy).
 *  - Shows a poster/thumbnail + Play affordance until clicked.
 *  - A "Watch on YouTube" link is always present as an explicit fallback,
 *    in case the embed is blocked on the presentation machine's network.
 *  - A close control returns to the poster (and thus to a fully static,
 *    presentation-safe state) without leaving the app.
 */
export default function VideoCard({ video, label }) {
  const [playing, setPlaying] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)

  return (
    <div className="video-card" data-no-nav>
      <div className="video-card__frame">
        {playing && !embedFailed ? (
          <>
            <iframe
              className="video-card__iframe"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setEmbedFailed(true)}
            />
            <button
              type="button"
              className="video-card__close"
              onClick={() => setPlaying(false)}
              aria-label="Return to presentation"
            >
              ✕ Back to presentation
            </button>
          </>
        ) : (
          <button
            type="button"
            className="video-card__poster"
            style={{ backgroundImage: `url(${video.thumbnail})` }}
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
          >
            <span className="video-card__play" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      <div className="video-card__caption">
        {label && <span className="video-card__label">{label}</span>}
        <span className="video-card__name">{video.name}</span>
        <span className="video-card__title">“{video.title}”</span>
        <a
          className="video-card__yt-link"
          href={video.url}
          target="_blank"
          rel="noreferrer"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  )
}
