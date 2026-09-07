import Slide from '../components/Slide.jsx'
import KineticText from '../components/KineticText.jsx'
import StatCounter from '../components/StatCounter.jsx'
import { copy, salaryProofTiers, sources } from '../data/presentation.js'

export default function ProofSlide({ active }) {
  return (
    <Slide kicker="EARNING POTENTIAL" source={sources.placement}>
      <KineticText as="h2" className="display-md" text={copy.proof.headline} stagger={0.02} />
      <div className="tier-row" style={{ marginTop: 24 }}>
        {salaryProofTiers.map((tier) => (
          <div className="tier-block" key={tier.tier}>
            <div className="tier-block__label">{tier.tier}</div>
            {tier.examples.map((ex) => (
              <div className="tier-block__example" key={ex.name}>
                <div className="tier-block__example-name">{ex.name}</div>
                <div className="tier-block__example-role">
                  {ex.role} · {ex.company}
                </div>
                <div className="tier-block__example-amount">
                  <StatCounterAmount active={active} amount={ex.amount} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.68rem', color: 'var(--paper-dim)', opacity: 0.6, marginTop: 16 }}>
        Figures shown are verified individual placement outcomes, not guaranteed starting
        salaries.
      </p>
    </Slide>
  )
}

// Parses a "₹7.8L p.a." style string into a counted number + static suffix,
// so the figure animates in without resorting to gimmicky slot-machine digits.
function StatCounterAmount({ active, amount }) {
  const match = amount.match(/([\d.]+)/)
  if (!match) return <span>{amount}</span>
  const num = parseFloat(match[1])
  const suffix = amount.replace(match[1], '')
  return (
    <StatCounter
      active={active}
      from={0}
      to={num}
      format={(n) => `${n.toFixed(1)}${suffix}`}
    />
  )
}
