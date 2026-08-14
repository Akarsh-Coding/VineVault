import Button from './Button'
import './FormNav.css'

function FormNav({ isFirstStep, isLastStep, onBack, onNext, onSubmit }) {
  return (
    <div className="form-nav">
      <Button variant="secondary" onClick={onBack} disabled={isFirstStep}>
        Back
      </Button>
      {isLastStep ? (
        <Button variant="primary" onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <Button variant="primary" onClick={onNext}>
          Next
        </Button>
      )}
    </div>
  )
}

export default FormNav
