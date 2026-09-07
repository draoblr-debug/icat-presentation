import { useCallback, useEffect, useRef, useState } from 'react'
import { slides } from './slideRegistry'
import Stage from './Stage.jsx'
import ProgressIndicator from './ProgressIndicator.jsx'
import RuntimeHud from './RuntimeHud.jsx'
import NavControls from './NavControls.jsx'
import { useReducedMotion } from '../hooks/useReducedMotion.js'

const IDLE_HIDE_MS = 2400
const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, iframe, video, [data-no-nav]'

export default function Presentation() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [hudVisible, setHudVisible] = useState(false)
  const [presenterMode, setPresenterMode] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [elapsed, setElapsed] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const stageRef = useRef(null)
  const idleTimerRef = useRef(null)
  const startRef = useRef(Date.now())
  const reducedMotion = useReducedMotion()

  const total = slides.length

  const goTo = useCallback(
    (nextIndex, dir) => {
      const clamped = Math.min(Math.max(nextIndex, 0), total - 1)
      setDirection(dir || (clamped >= index ? 'next' : 'prev'))
      setIndex(clamped)
    },
    [index, total]
  )

  const next = useCallback(() => goTo(index + 1, 'next'), [goTo, index])
  const prev = useCallback(() => goTo(index - 1, 'prev'), [goTo, index])

  // Elapsed runtime, used by the presenter safeguard HUD only.
  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Keyboard navigation.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'Home':
          e.preventDefault()
          goTo(0, 'prev')
          break
        case 'End':
          e.preventDefault()
          goTo(total - 1, 'next')
          break
        case 'h':
        case 'H':
          setHudVisible((v) => !v)
          break
        case 'p':
        case 'P':
          setPresenterMode((v) => {
            const nv = !v
            if (nv) setHudVisible(true)
            return nv
          })
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        default: {
          const n = Number(e.key)
          if (!Number.isNaN(n) && n >= 1 && n <= 9) {
            goTo(n - 1, n - 1 >= index ? 'next' : 'prev')
          }
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next, prev, goTo, index, total])

  // Idle-hide the click/tap nav chevrons; the progress rail stays visible always.
  useEffect(() => {
    function onActivity() {
      setControlsVisible(true)
      clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => setControlsVisible(false), IDLE_HIDE_MS)
    }
    onActivity()
    window.addEventListener('mousemove', onActivity)
    window.addEventListener('touchstart', onActivity)
    return () => {
      window.removeEventListener('mousemove', onActivity)
      window.removeEventListener('touchstart', onActivity)
      clearTimeout(idleTimerRef.current)
    }
  }, [])

  function toggleFullscreen() {
    const el = stageRef.current
    if (!document.fullscreenElement) {
      el?.requestFullscreen?.().catch(() => {})
    } else {
      document.exitFullscreen?.().catch(() => {})
    }
  }

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  function onStageClick(e) {
    if (e.target.closest(INTERACTIVE_SELECTOR)) return
    const rect = stageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    if (x < rect.width / 2) prev()
    else next()
  }

  const current = slides[index]

  return (
    <div className="presentation-root">
      <div className="stage-frame">
        <div
          className="stage"
          ref={stageRef}
          onClick={onStageClick}
          role="presentation"
        >
          <Stage index={index} direction={direction} reducedMotion={reducedMotion} />

          <ProgressIndicator index={index} total={total} />

          <NavControls
            visible={controlsVisible}
            onPrev={prev}
            onNext={next}
            canPrev={index > 0}
            canNext={index < total - 1}
          />

          <RuntimeHud
            visible={hudVisible}
            elapsedSeconds={elapsed}
            index={index}
            total={total}
            title={current.title}
            presenterMode={presenterMode}
          />

          {!isFullscreen && (
            <button
              type="button"
              className="fullscreen-prompt"
              onClick={(e) => {
                e.stopPropagation()
                toggleFullscreen()
              }}
              data-no-nav
            >
              Enter full screen ⤢
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
