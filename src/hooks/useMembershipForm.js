import { useState } from 'react'
import { FORM_STEPS } from '../data/formSteps'
import { initialFormData, initialErrors } from '../data/initialFormData'
import { SECTION_VALIDATORS, sectionHasErrors } from '../utils/stepValidation'

export function useMembershipForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState(initialErrors)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [maxStepReached, setMaxStepReached] = useState(0)

  const updateField = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
    // Clear this field's error as soon as the user touches it. The full
    // section is re-checked from scratch the next time they try to advance.
    setErrors((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: '',
      },
    }))
  }

  const validateSection = (sectionId) => {
    const validator = SECTION_VALIDATORS[sectionId]
    if (!validator) return true
    const sectionErrors = validator(formData[sectionId])
    setErrors((prev) => ({ ...prev, [sectionId]: sectionErrors }))
    return !sectionHasErrors(sectionErrors)
  }

  const validateAllSections = () => {
    let isValid = true
    let firstInvalidIndex = null
    const nextErrors = { ...errors }

    FORM_STEPS.forEach((step, index) => {
      const validator = SECTION_VALIDATORS[step.id]
      if (!validator) return
      const sectionErrors = validator(formData[step.id])
      nextErrors[step.id] = sectionErrors
      if (sectionHasErrors(sectionErrors)) {
        isValid = false
        if (firstInvalidIndex === null) firstInvalidIndex = index
      }
    })

    setErrors(nextErrors)
    return { isValid, firstInvalidIndex }
  }

  const goToStep = (index) => {
    if (index < 0 || index >= FORM_STEPS.length) return
    if (index > maxStepReached) return // can't skip ahead to an unvisited step
    setCurrentStepIndex(index)
  }

  const goNext = () => {
    const step = FORM_STEPS[currentStepIndex]
    if (!validateSection(step.id)) return // blocked: errors are now set for this step

    const next = Math.min(currentStepIndex + 1, FORM_STEPS.length - 1)
    setCurrentStepIndex(next)
    setMaxStepReached((prevMax) => Math.max(prevMax, next))
  }

  const goBack = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0))
  }

  return {
    formData,
    errors,
    updateField,
    currentStepIndex,
    maxStepReached,
    goToStep,
    goNext,
    goBack,
    validateAllSections,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === FORM_STEPS.length - 1,
  }
}
