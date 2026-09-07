import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import { copy } from '../data/presentation.js'

export default function HookSlide() {
  return (
    <Slide kicker="A STORY YOU ALREADY KNOW">
      <div className="hero" style={{ justifyContent: 'center' }}>
        <KineticText as="h2" className="display-lg" text={copy.hook.headline} stagger={0.045} />
        <p className="subline">
          Three friends. A career choice made under pressure. An aspiration nobody in the room
          took seriously — until it worked.
        </p>
      </div>
    </Slide>
  )
}
