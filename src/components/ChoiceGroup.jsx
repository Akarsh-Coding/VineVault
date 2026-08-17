import './ChoiceGroup.css'

/**
 * Renders a set of mutually-exclusive options as clickable cards, backed
 * by real radio inputs for keyboard/screen-reader support. `value` and
 * `onChange` are controlled by the parent step, same contract as FormField.
 * `error` highlights every card in the group in red and shows one message
 * below — there's no single "offending" card in a required-choice group,
 * so the whole set is marked.
 */
function ChoiceGroup({ legend, name, options, value, onChange, error }) {
  const errorId = `${name}-error`

  return (
    <fieldset className={`choice-group${error ? ' choice-group--error' : ''}`}>
      <legend className="choice-group__label text-body-sm">{legend}</legend>
      <div className="choice-group__options" aria-describedby={error ? errorId : undefined}>
        {options.map((option) => (
          <label className="choice-card" key={option.value}>
            <input
              className="choice-card__input"
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(event) => onChange(event.target.value)}
            />
            <span className="choice-card__label text-body-sm">{option.label}</span>
            {option.helpText && (
              <span className="choice-card__help text-caption">{option.helpText}</span>
            )}
          </label>
        ))}
      </div>
      {error && (
        <span className="choice-group__error text-body-sm" id={errorId} role="alert">
          {error}
        </span>
      )}
    </fieldset>
  )
}

export default ChoiceGroup
