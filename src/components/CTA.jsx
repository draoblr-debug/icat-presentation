import { brand } from '../data/presentation.js'

export default function CTA() {
  return (
    <div className="cta" data-no-nav>
      <a className="cta__primary" href={brand.websiteUrl} target="_blank" rel="noreferrer">
        {brand.website}
      </a>
      <div className="cta__socials">
        {brand.socials.map((s) => (
          <a key={s.handle} href={s.url} target="_blank" rel="noreferrer">
            {s.handle}
          </a>
        ))}
      </div>
      <div className="cta__giveaway">
        <span className="cta__giveaway-label">Free Creative Career Book</span>
        <span className="cta__giveaway-detail">
          WhatsApp your Name + Email to <strong>{brand.whatsappNumber}</strong>
        </span>
      </div>
    </div>
  )
}
