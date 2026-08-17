import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateAddressLine1,
  validateCity,
  validateState,
  validateZip,
  validateRequiredChoice,
} from './validators'

export function validatePersonalSection(data) {
  return {
    fullName: validateFullName(data.fullName),
    email: validateEmail(data.email),
    phone: validatePhone(data.phone),
    addressLine1: validateAddressLine1(data.addressLine1),
    city: validateCity(data.city),
    state: validateState(data.state),
    zip: validateZip(data.zip),
  }
}

export function validatePreferencesSection(data) {
  return {
    tier: validateRequiredChoice(data.tier, 'membership tier'),
    shipmentFrequency: validateRequiredChoice(data.shipmentFrequency, 'shipment frequency'),
    winePreference: validateRequiredChoice(data.winePreference, 'wine preference'),
    referralSource: '', // optional field, never blocks advancement
  }
}

/** One validator per step id that actually has fields to check. */
export const SECTION_VALIDATORS = {
  personal: validatePersonalSection,
  preferences: validatePreferencesSection,
}

export function sectionHasErrors(sectionErrors) {
  return Object.values(sectionErrors).some(Boolean)
}
