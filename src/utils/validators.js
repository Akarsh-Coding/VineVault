import { INDIAN_STATES } from '../data/indianStates'

// Full name
const NAME_PATTERN = /^[A-Za-z]+(?:['-][A-Za-z]+)*\.?(?:(?:\s+|(?<=\.))[A-Za-z]+(?:['-][A-Za-z]+)*\.?)*$/

// local@domain.tld — deliberately permissive on TLD length/shape since
const EMAIL_PATTERN = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/

// Indian mobile
const INDIA_MOBILE_PATTERN = /^(\+91)?[6-9]\d{9}$/

const ADDRESS_PATTERN = /^[A-Za-z0-9][A-Za-z0-9.,#'-]*(?:\s[A-Za-z0-9.,#'-]+)*$/
const CITY_PATTERN = /^[A-Za-z]+(?:['-][A-Za-z]+)*\.?(?:\s+[A-Za-z]+(?:['-][A-Za-z]+)*\.?)*$/

// Indian PIN code: 6 digits, first digit never 0.
const PIN_CODE_PATTERN = /^[1-9]\d{5}$/

export function validateFullName(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Full name is required.'
  if (trimmed.length < 2 || !NAME_PATTERN.test(trimmed)) return 'Enter a valid name, letters only.'
  return ''
}

export function validateEmail(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Email is required.'
  if (!EMAIL_PATTERN.test(trimmed)) return 'Enter a valid email address.'
  return ''
}

export function validatePhone(value) {
  const normalized = value.trim().replace(/[\s-]/g, '')
  if (!normalized) return 'Mobile number is required.'
  if (!INDIA_MOBILE_PATTERN.test(normalized)) return 'Enter a valid 10-digit Indian mobile number.'
  return ''
}

export function validateAddressLine1(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Address is required.'
  if (trimmed.length < 4 || !ADDRESS_PATTERN.test(trimmed)) return 'Enter a valid address.'
  return ''
}

export function validateCity(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'City is required.'
  if (!CITY_PATTERN.test(trimmed)) return 'City should contain letters only.'
  return ''
}

export function validateState(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'State or union territory is required.'
  const isKnown = INDIAN_STATES.some((state) => state.toLowerCase() === trimmed.toLowerCase())
  if (!isKnown) return 'Select a state from the list.'
  return ''
}

export function validatePinCode(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'PIN code is required.'
  if (!PIN_CODE_PATTERN.test(trimmed)) return 'Enter a valid 6-digit PIN code.'
  return ''
}

export function validateRequiredChoice(value, label) {
  return value ? '' : `Select a ${label.toLowerCase()}.`
}
