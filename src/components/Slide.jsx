import { logoPngBase64 } from '../assets/icatBrandAssets.js'

/**
 * Shared slide chrome: consistent padding grid, optional kicker label.
 * Individual slides compose their own content inside `children` — this
 * only supplies the frame.
 *
 * The ICAT logo is rendered on every slide, scaled up and pinned to the
 * top-left corner, per review feedback on 2026-09-17 ("should be scaled
 * up and moved to screen top left and remain there for the entire
 * presentation"). It's the client-supplied transparent-background PNG
 * (icat-college-logo.png — full-colour seal + wordmark, alpha-verified
 * transparent outside the artwork) rather than the earlier single-tone
 * SVG mark, base64-embedded so it still renders with zero internet
 * connectivity. `.slide__logo` gives it a champagne chip (see
 * components.css) instead of a plain white one — classy against the dark
 * stage while still reading clearly against the logo's own navy/red/gold.
 *
 * Slides still pass a `source` prop in places (harmless extra prop) — the
 * bottom-left source line that used to render it was removed per the same
 * feedback pass.
 */
export default function Slide({ kicker, variant = '', className = '', showLogo = true, children }) {
  return (
    <div className={`slide slide--${variant} ${className}`}>
      <div className="slide__grain" aria-hidden="true" />
      {showLogo && (
        <img className="brand-logo slide__logo" src={logoPngBase64} alt="ICAT College of Design and Media" />
      )}
      {kicker && <div className="slide__kicker">{kicker}</div>}
      <div className="slide__content">{children}</div>
    </div>
  )
}
