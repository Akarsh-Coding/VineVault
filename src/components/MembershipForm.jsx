import { useState } from 'react'
import { useMembershipForm } from '../hooks/useMembershipForm'
import { FORM_STEPS } from '../data/formSteps'
import StepIndicator from './StepIndicator'
import FormNav from './FormNav'
import PersonalInfoStep from './steps/PersonalInfoStep'
import MembershipPreferencesStep from './steps/MembershipPreferencesStep'
import ReviewStep from './steps/ReviewStep'
import './MembershipForm.css'

function renderActiveStep(stepId, formData, updateField) {
  switch (stepId) {
    case 'personal':
      return (
        <PersonalInfoStep
          data={formData.personal}
          onFieldChange={(field, value) => updateField('personal', field, value)}
        />
      )
    case 'preferences':
      return (
        <MembershipPreferencesStep
          data={formData.preferences}
          onFieldChange={(field, value) => updateField('preferences', field, value)}
        />
      )
    case 'review':
      return <ReviewStep formData={formData} />
    default:
      return null
  }
}

function MembershipForm() {
  const {
    formData,
    updateField,
    currentStepIndex,
    maxStepReached,
    goToStep,
    goNext,
    goBack,
    isFirstStep,
    isLastStep,
  } = useMembershipForm()

  const [isSubmitted, setIsSubmitted] = useState(false)

  const activeStep = FORM_STEPS[currentStepIndex]

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="membership-form">
        <div className="membership-form__submitted" role="status">
          <span className="text-display-sm">Signup captured</span>
          <span className="text-body-sm">
            {formData.personal.fullName || 'This member'}&rsquo;s details are ready to submit.
            Actual submission wiring arrives in a later part.
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="membership-form">
      <StepIndicator
        currentStepIndex={currentStepIndex}
        maxStepReached={maxStepReached}
        onStepSelect={goToStep}
      />

      <h2 className="text-display-sm membership-form__title">{activeStep.label}</h2>

      {renderActiveStep(activeStep.id, formData, updateField)}

      <FormNav
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        onBack={goBack}
        onNext={goNext}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default MembershipForm
