import { Fragment } from 'react'
import { FORM_STEPS } from '../data/formSteps'
import './StepIndicator.css'

function StepIndicator({ currentStepIndex, maxStepReached, onStepSelect }) {
  return (
    <nav className="step-indicator" aria-label="Signup progress">
      {FORM_STEPS.map((step, index) => {
        const isComplete = index < currentStepIndex
        const isActive = index === currentStepIndex
        const isReachable = index <= maxStepReached
        const status = isComplete ? 'complete' : isActive ? 'active' : 'upcoming'

        return (
          <Fragment key={step.id}>
            <div className={`step-indicator__item step-indicator__item--${status}`}>
              <button
                type="button"
                className="step-indicator__button"
                onClick={() => onStepSelect(index)}
                disabled={!isReachable}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="step-indicator__bullet">{index + 1}</span>
                <span className="step-indicator__label text-body-sm">{step.shortLabel}</span>
              </button>
            </div>
            {index < FORM_STEPS.length - 1 && <div className="step-indicator__connector" />}
          </Fragment>
        )
      })}
    </nav>
  )
}

export default StepIndicator
