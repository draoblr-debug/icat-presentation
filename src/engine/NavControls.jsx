export default function NavControls({ visible, onPrev, onNext, canPrev, canNext }) {
  return (
    <div className={`nav-controls${visible ? ' nav-controls--visible' : ''}`}>
      <button
        type="button"
        className="nav-controls__btn nav-controls__btn--prev"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous slide"
        tabIndex={-1}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        className="nav-controls__btn nav-controls__btn--next"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next slide"
        tabIndex={-1}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
