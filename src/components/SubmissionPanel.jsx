import LoadingSpinner from './LoadingSpinner'
import Button from './Button'
import './SubmissionPanel.css'


function SubmissionPanel({ status, errorMessage, confirmationId, memberName, onRetry, onEditInfo }) {
  if (status === 'submitting') {
    return (
      <div className="submission-panel" role="status" aria-live="polite">
        <LoadingSpinner />
        <span className="text-display-sm">Submitting signup&hellip;</span>
        <span className="text-body-sm submission-panel__hint">
          This can take a little longer on a slow connection. Hang tight.
        </span>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="submission-panel submission-panel--error" role="alert" aria-live="polite">
        <span className="text-display-sm">Couldn&rsquo;t submit the signup</span>
        <span className="text-body-sm submission-panel__hint">{errorMessage}</span>
        <div className="submission-panel__actions">
          <Button variant="secondary" onClick={onEditInfo}>
            Back to review
          </Button>
          <Button variant="primary" onClick={onRetry}>
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="submission-panel" role="status">
      <span className="text-display-sm">Signup captured</span>
      <span className="text-body-sm submission-panel__hint">
        {memberName || 'This member'}&rsquo;s details are in. Confirmation: {confirmationId}
      </span>
    </div>
  )
}

export default SubmissionPanel
