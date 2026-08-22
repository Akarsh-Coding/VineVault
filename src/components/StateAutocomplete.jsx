import { useState, useRef, useEffect } from 'react'
import { INDIAN_STATES } from '../data/indianStates'
import './StateAutocomplete.css'


function StateAutocomplete({ id, label, value, onChange, error }) {
  const [inputValue, setInputValue] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef(null)
  const listboxId = `${id}-listbox`
  const errorId = `${id}-error`

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const query = inputValue.trim().toLowerCase()
  const matches = query
    ? INDIAN_STATES.filter((state) => state.toLowerCase().includes(query))
    : INDIAN_STATES

  const handleInputChange = (event) => {
    const next = event.target.value
    setInputValue(next)
    onChange('') // not a committed value until an option is actually picked
    setIsOpen(true)
    setHighlightedIndex(-1)
  }

  const commitSelection = (state) => {
    setInputValue(state)
    onChange(state)
    setIsOpen(false)
    setHighlightedIndex(-1)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsOpen(true)
      setHighlightedIndex((prev) => Math.min(prev + 1, matches.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex((prev) => Math.max(prev - 1, 0))
    } else if (event.key === 'Enter') {
      if (isOpen && highlightedIndex >= 0 && matches[highlightedIndex]) {
        event.preventDefault()
        commitSelection(matches[highlightedIndex])
      }
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div className="field" ref={containerRef}>
      <label className="field__label text-body-sm" htmlFor={id}>
        {label}
      </label>
      <div className="autocomplete">
        <input
          id={id}
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`field__control${error ? ' field__control--error' : ''}`}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Start typing a state or UT"
          autoComplete="off"
        />
        {isOpen && (
          <ul className="autocomplete__list" id={listboxId} role="listbox">
            {matches.length === 0 ? (
              <li className="autocomplete__empty" role="presentation">
                No states found
              </li>
            ) : (
              matches.map((state, index) => (
                <li
                  key={state}
                  role="option"
                  aria-selected={value === state}
                  className={`autocomplete__option${
                    index === highlightedIndex ? ' autocomplete__option--highlighted' : ''
                  }`}
                  onMouseDown={(event) => {
                    event.preventDefault()
                    commitSelection(state)
                  }}
                >
                  {state}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
      {error && (
        <span className="field__error text-body-sm" id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default StateAutocomplete
