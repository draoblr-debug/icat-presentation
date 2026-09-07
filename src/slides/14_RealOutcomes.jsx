import { useEffect, useState } from 'react'
import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import AlumniCard from '../components/AlumniCard.jsx'
import { alumniWall, copy, sources } from '../data/presentation.js'

const BATCH_SIZE = 8
const CYCLE_MS = 3200

const batches = []
for (let i = 0; i < alumniWall.length; i += BATCH_SIZE) {
  batches.push(alumniWall.slice(i, i + BATCH_SIZE))
}

export default function RealOutcomesSlide({ active }) {
  const [batch, setBatch] = useState(0)

  useEffect(() => {
    if (!active || batches.length <= 1) return
    const id = setInterval(() => {
      setBatch((b) => (b + 1) % batches.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [active])

  useEffect(() => {
    if (!active) setBatch(0)
  }, [active])

  return (
    <Slide kicker="THE PROOF" source={sources.placement}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20 }}>
        <KineticText as="h2" className="display-md" text={copy.realOutcomes.headline} stagger={0.02} />
        {batches.length > 1 && (
          <div style={{ display: 'flex', gap: 6 }} data-no-nav aria-hidden="true">
            {batches.map((_, i) => (
              <span
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: i === batch ? 'var(--accent-amber)' : 'var(--line-strong)',
                  transition: 'background 300ms ease',
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="wall-scroll" style={{ marginTop: 16 }}>
        <div className="wall-grid" key={batch}>
          {batches[batch].map((a) => (
            <AlumniCard key={a.name} alumnus={a} />
          ))}
        </div>
      </div>
    </Slide>
  )
}
