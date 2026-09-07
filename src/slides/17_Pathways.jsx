import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy, pathways } from '../data/presentation.js'

export default function PathwaysSlide() {
  return (
    <Slide kicker="THREE ROUTES, ONE STARTING SKILL">
      <KineticText as="h2" className="display-md" text={copy.pathways.headline} stagger={0.02} />
      <div className="pathway-row" style={{ marginTop: 20 }}>
        {pathways.map((p) => (
          <div className="pathway-col" key={p.id}>
            <div className="pathway-col__label">{p.label.toUpperCase()}</div>
            <div className="pathway-col__flow">
              {p.flow.map((step, i) => (
                <span key={step}>
                  {step}
                  {i < p.flow.length - 1 ? ' →' : ''}
                </span>
              ))}
            </div>
            <div className="pathway-col__example">
              <strong>{p.example.name}</strong>
              <div style={{ opacity: 0.75, marginTop: 2 }}>{p.example.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  )
}
