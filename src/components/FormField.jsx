import './FormField.css'

function FormField({ id, label, type = 'text', value, onChange, placeholder, autoComplete }) {
  return (
    <div className="field">
      <label className="field__label text-body-sm" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="field__control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  )
}

export default FormField
