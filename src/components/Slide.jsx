import { logoSvgBase64 } from '../assets/icatBrandAssets.js'

/**
 * Shared slide chrome: consistent padding grid, optional kicker label.
 * Individual slides compose their own content inside `children` — this
 * only supplies the frame.
 *
 * The ICAT logo is rendered on every slide, scaled up and pinned to the
 * top-left corner, per review feedback on 2026-09-17 ("should be scaled
 * up and moved to screen top left and remain there for the entire
 * presentation"). It is a base64-embedded copy of the live mark from
 * icat.ac.in so it still renders with zero internet connectivity.
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
        <img className="brand-logo slide__logo" src={logoSvgBase64} alt="ICAT College of Design and Media" />
      )}
      {kicker && <div className="slide__kicker">{kicker}</div>}
      <div className="slide__content">{children}</div>
    </div>
  )
}
