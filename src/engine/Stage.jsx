import { useEffect, useRef, useState } from 'react'
import { slides } from './slideRegistry'

const TRANSITION_MS = 750

/**
 * Renders the current slide on top of the outgoing one for TRANSITION_MS,
 * using an enter animation whose *type* is fixed per-slide in the registry
 * (never randomised) and whose *direction* reflects next/prev navigation.
 */
export default function Stage({ index, direction, reducedMotion }) {
  const [outgoing, setOutgoing] = useState(null)
  const prevIndexRef = useRef(index)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const prevIndex = prevIndexRef.current
    if (prevIndex !== index) {
      if (!reducedMotion) {
        setOutgoing(prevIndex)
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setOutgoing(null), TRANSITION_MS)
      }
      prevIndexRef.current = index
    }
    return () => clearTimeout(timeoutRef.current)
  }, [index, direction, reducedMotion])

  const current = slides[index]
  const CurrentComponent = current.Component
  const dir = direction === 'prev' ? -1 : 1

  return (
    <div className="stage__slides">
      {outgoing !== null && outgoing !== index
        ? (() => {
            const OutgoingComponent = slides[outgoing].Component
            return (
              <div className="slide-layer slide-layer--outgoing" key={`out-${outgoing}`}>
                <OutgoingComponent active={false} />
              </div>
            )
          })()
        : null}
      <div
        className={`slide-layer slide-layer--incoming slide-enter--${current.transitionIn}${reducedMotion ? ' no-motion' : ''}`}
        style={{ '--dir': dir }}
        key={`in-${index}`}
      >
        <CurrentComponent active={true} />
      </div>
    </div>
  )
}
