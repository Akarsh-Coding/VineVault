
// First + last name: letters plus internal hyphens/apostrophes per word,
// at least two words. Rejects digits, symbols, and single-word entries.
const NAME_PATTERN = /^[A-Za-z]+(?:['-][A-Za-z]+)*(?:\s+[A-Za-z]+(?:['-][A-Za-z]+)*)+$/

// local@domain.tld — deliberately permissive on TLD length/shape since
// staff will hit this on real customer addresses, strict on structure.
const EMAIL_PATTERN = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/

// US phone, tolerant of the formats a floor-staff tablet keyboard produces:
// 5550100199, 555-010-0199, (555) 010-0199, +1 555 010 0199.
const PHONE_PATTERN = /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/

const ADDRESS_PATTERN = /^[A-Za-z0-9][A-Za-z0-9.,#'-]*(?:\s[A-Za-z0-9.,#'-]+)*$/
const CITY_PATTERN = /^[A-Za-z]+(?:['-][A-Za-z]+)*\.?(?:\s+[A-Za-z]+(?:['-][A-Za-z]+)*\.?)*$/
const STATE_PATTERN = /^[A-Za-z]{2}$/
const ZIP_PATTERN = /^\d{5}(-\d{4})?$/

export function validateFullName(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Full name is required.'
  if (!NAME_PATTERN.test(trimmed)) return 'Enter a first and last name, letters only.'
  return ''
}

export function validateEmail(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Email is required.'
  if (!EMAIL_PATTERN.test(trimmed)) return 'Enter a valid email address.'
  return ''
}

export function validatePhone(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Phone number is required.'
  if (!PHONE_PATTERN.test(trimmed)) return 'Enter a valid 10-digit phone number.'
  return ''
}

export function validateAddressLine1(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'Street address is required.'
  if (trimmed.length < 4 || !ADDRESS_PATTERN.test(trimmed)) return 'Enter a valid street address.'
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
  if (!trimmed) return 'State is required.'
  if (!STATE_PATTERN.test(trimmed)) return 'Use a 2-letter state code, e.g. CA.'
  return ''
}

export function validateZip(value) {
  const trimmed = value.trim()
  if (!trimmed) return 'ZIP code is required.'
  if (!ZIP_PATTERN.test(trimmed)) return 'Enter a valid ZIP code (12345 or 12345-6789).'
  return ''
}

export function validateRequiredChoice(value, label) {
  return value ? '' : `Select a ${label.toLowerCase()}.`
}
