import { logoSvgBase64 } from '../assets/icatBrandAssets.js'

/**
 * Shared slide chrome: consistent padding grid, optional kicker label,
 * optional small source-attribution footer. Individual slides compose
 * their own content inside `children` — this only supplies the frame.
 *
 * The ICAT logo is rendered on every slide (top-right) per Mr. David's
 * explicit note on the 2026-09-11 review call ("ICAT logo venum" — the
 * logo needs to be present throughout, not just the opening slide).
 * It is a base64-embedded copy of the live mark from icat.ac.in so it
 * still renders with zero internet connectivity.
 */
export default function Slide({ kicker, source, variant = '', className = '', showLogo = true, children }) {
  return (
    <div className={`slide slide--${variant} ${className}`}>
      <div className="slide__grain" aria-hidden="true" />
      {showLogo && (
        <img className="brand-logo slide__logo" src={logoSvgBase64} alt="ICAT College of Design and Media" />
      )}
      {kicker && <div className="slide__kicker">{kicker}</div>}
      <div className="slide__content">{children}</div>
      {source && <div className="slide__source">{source}</div>}
    </div>
  )
}
