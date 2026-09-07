import { useEffect, useState } from 'react'
import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy } from '../data/presentation.js'

export default function EcosystemSlide({ active }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!active) {
      setShown(0)
      return
    }
    const id = setInterval(() => {
      setShown((s) => (s < copy.ecosystem.categories.length ? s + 1 : s))
    }, 110)
    return () => clearInterval(id)
  }, [active])

  return (
    <Slide kicker="THE LANDSCAPE">
      <div className="hero" style={{ height: '100%' }}>
        <KineticText as="h2" className="display-md" text={copy.ecosystem.headline} stagger={0.03} />
        <div className="category-grid">
          {copy.ecosystem.categories.map((cat, i) => (
            <span key={cat} className={`category-grid__item${i < shown ? ' category-grid__item--in' : ''}`}>
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Slide>
  )
}
