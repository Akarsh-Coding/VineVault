import './FormField.css'

function FormField({ id, label, type = 'text', value, onChange, placeholder, autoComplete, error }) {
  const errorId = `${id}-error`

  return (
    <div className="field">
      <label className="field__label text-body-sm" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={`field__control${error ? ' field__control--error' : ''}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span className="field__error text-body-sm" id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default FormField
