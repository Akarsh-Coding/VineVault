import { useState } from 'react'
import { FORM_STEPS } from '../data/formSteps'
import { initialFormData } from '../data/initialFormData'

export function useMembershipForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [maxStepReached, setMaxStepReached] = useState(0)

  /** Update a single field within one section, immutably. */
  const updateField = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const goToStep = (index) => {
    if (index < 0 || index >= FORM_STEPS.length) return
    if (index > maxStepReached) return // can't skip ahead to an unvisited step
    setCurrentStepIndex(index)
  }

  const goNext = () => {
    setCurrentStepIndex((prev) => {
      const next = Math.min(prev + 1, FORM_STEPS.length - 1)
      setMaxStepReached((prevMax) => Math.max(prevMax, next))
      return next
    })
  }

  const goBack = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0))
  }

  return {
    formData,
    updateField,
    currentStepIndex,
    maxStepReached,
    goToStep,
    goNext,
    goBack,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === FORM_STEPS.length - 1,
  }
}
