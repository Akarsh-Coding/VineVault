import './Button.css'

function Button({ variant = 'primary', type = 'button', onClick, disabled, children }) {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
