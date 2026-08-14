import ChoiceGroup from '../ChoiceGroup'
import FormField from '../FormField'
import { TIER_OPTIONS, FREQUENCY_OPTIONS, WINE_PREFERENCE_OPTIONS } from '../../data/preferenceOptions'

function MembershipPreferencesStep({ data, onFieldChange }) {
  return (
    <div className="step">
      <ChoiceGroup
        legend="Membership tier"
        name="tier"
        options={TIER_OPTIONS}
        value={data.tier}
        onChange={(value) => onFieldChange('tier', value)}
      />
      <ChoiceGroup
        legend="Shipment frequency"
        name="shipmentFrequency"
        options={FREQUENCY_OPTIONS}
        value={data.shipmentFrequency}
        onChange={(value) => onFieldChange('shipmentFrequency', value)}
      />
      <ChoiceGroup
        legend="Wine preference"
        name="winePreference"
        options={WINE_PREFERENCE_OPTIONS}
        value={data.winePreference}
        onChange={(value) => onFieldChange('winePreference', value)}
      />
      <FormField
        id="referralSource"
        label="How did they hear about us? (optional)"
        value={data.referralSource}
        onChange={(value) => onFieldChange('referralSource', value)}
        placeholder="e.g. tasting event, existing member"
      />
    </div>
  )
}

export default MembershipPreferencesStep
