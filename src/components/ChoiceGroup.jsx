import './ChoiceGroup.css'

function ChoiceGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="choice-group">
      <legend className="choice-group__label text-body-sm">{legend}</legend>
      <div className="choice-group__options">
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
    </fieldset>
  )
}

export default ChoiceGroup
