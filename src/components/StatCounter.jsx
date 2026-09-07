import { useEffect, useRef, useState } from 'react'

/**
 * Animates a numeric value counting up when the slide becomes active.
 * Tasteful by design: single easing pass, no looping, no slot-machine churn.
 * `format` receives the current (possibly fractional) number and returns text.
 */
export default function StatCounter({ active, from = 0, to, duration = 1400, format = (n) => Math.round(n).toString(), className = '' }) {
  const [value, setValue] = useState(from)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!active) {
      setValue(from)
      return
    }
    const start = performance.now()
    function tick(now) {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(from + (to - from) * eased)
      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, to])

  return <span className={`stat-counter ${className}`}>{format(value)}</span>
}
