import { useState } from 'react'
import { useMembershipForm } from '../hooks/useMembershipForm'
import { FORM_STEPS } from '../data/formSteps'
import { submitMembership } from '../utils/mockApi'
import StepIndicator from './StepIndicator'
import FormNav from './FormNav'
import SubmissionPanel from './SubmissionPanel'
import PersonalInfoStep from './steps/PersonalInfoStep'
import MembershipPreferencesStep from './steps/MembershipPreferencesStep'
import ReviewStep from './steps/ReviewStep'
import './MembershipForm.css'

const REVIEW_STEP_INDEX = FORM_STEPS.findIndex((step) => step.id === 'review')

function renderActiveStep(stepId, formData, errors, updateField) {
  switch (stepId) {
    case 'personal':
      return (
        <PersonalInfoStep
          data={formData.personal}
          errors={errors.personal}
          onFieldChange={(field, value) => updateField('personal', field, value)}
        />
      )
    case 'preferences':
      return (
        <MembershipPreferencesStep
          data={formData.preferences}
          errors={errors.preferences}
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
    errors,
    updateField,
    currentStepIndex,
    maxStepReached,
    goToStep,
    goNext,
    goBack,
    validateAllSections,
    isFirstStep,
    isLastStep,
  } = useMembershipForm()

  // 'idle' | 'submitting' | 'success' | 'error' — drives which panel
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const [submissionError, setSubmissionError] = useState('')
  const [confirmationId, setConfirmationId] = useState('')

  const [forceFailure, setForceFailure] = useState(false)

  const activeStep = FORM_STEPS[currentStepIndex]

  const attemptSubmit = () => {
    setSubmissionStatus('submitting')
    setSubmissionError('')
    submitMembership(formData, { forceFailure })
      .then((result) => {
        setConfirmationId(result.confirmationId)
        setSubmissionStatus('success')
      })
      .catch((error) => {
        setSubmissionError(error.message)
        setSubmissionStatus('error')
      })
  }

  const handleSubmit = () => {
    const { isValid, firstInvalidIndex } = validateAllSections()
    if (!isValid) {
      if (firstInvalidIndex !== null) goToStep(firstInvalidIndex)
      return
    }
    attemptSubmit()
  }

  const handleEditInfo = () => {
    setSubmissionStatus('idle')
    goToStep(REVIEW_STEP_INDEX)
  }

  if (submissionStatus !== 'idle') {
    return (
      <div className="membership-form">
        <SubmissionPanel
          status={submissionStatus}
          errorMessage={submissionError}
          confirmationId={confirmationId}
          memberName={formData.personal.fullName}
          onRetry={attemptSubmit}
          onEditInfo={handleEditInfo}
        />
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

      {renderActiveStep(activeStep.id, formData, errors, updateField)}

      <FormNav
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        onBack={goBack}
        onNext={goNext}
        onSubmit={handleSubmit}
      />

      {import.meta.env.DEV && activeStep.id === 'review' && (
        <div className="dev-controls">
          <label className="dev-controls__toggle text-body-sm">
            <input
              type="checkbox"
              checked={forceFailure}
              onChange={(event) => setForceFailure(event.target.checked)}
            />
            Force a network failure on submit (QA testing only)
          </label>
        </div>
      )}
    </div>
  )
}

export default MembershipForm
