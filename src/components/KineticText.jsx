/**
 * Word-by-word staggered reveal for large headline typography.
 * Renders as plain static text if `active` is false so off-screen slides
 * never animate, and degrades to a simple fade when reduced motion is set
 * (handled globally via the .no-motion ancestor class in CSS).
 */
export default function KineticText({ text, as: Tag = 'h1', className = '', delay = 0, stagger = 0.05 }) {
  const words = text.split(' ')
  return (
    <Tag className={`kinetic-text ${className}`}>
      {words.map((word, i) => (
        <span className="kinetic-text__word-wrap" key={i}>
          <span
            className="kinetic-text__word"
            style={{ '--i': i, '--delay': `${delay + i * stagger}s` }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}
