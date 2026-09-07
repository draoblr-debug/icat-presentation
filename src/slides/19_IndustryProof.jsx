import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import CompanyWall from '../components/CompanyWall.jsx'
import { copy, companyWall, sources } from '../data/presentation.js'

export default function IndustryProofSlide() {
  return (
    <Slide kicker="RIGHT NOW" source={sources.alumni}>
      <KineticText as="h2" className="display-md" text={copy.industryProof.headline} stagger={0.02} />
      <div className="wall-scroll" style={{ marginTop: 16 }}>
        <CompanyWall items={companyWall} />
      </div>
    </Slide>
  )
}
