function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Wine Club logo"
    >
      <line x1="16" y1="2" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="11" r="3.4" fill="currentColor" />
      <circle cx="11" cy="16" r="3.4" fill="currentColor" opacity="0.85" />
      <circle cx="21" cy="16" r="3.4" fill="currentColor" opacity="0.85" />
      <circle cx="16" cy="20.5" r="3.4" fill="currentColor" opacity="0.7" />
      <circle cx="8.5" cy="21.5" r="3.4" fill="currentColor" opacity="0.55" />
      <circle cx="23.5" cy="21.5" r="3.4" fill="currentColor" opacity="0.55" />
      <circle cx="16" cy="27" r="3.4" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export default Logo
