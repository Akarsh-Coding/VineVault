import FormField from '../FormField'

function PersonalInfoStep({ data, onFieldChange }) {
  return (
    <div className="step">
      <FormField
        id="fullName"
        label="Full name"
        value={data.fullName}
        onChange={(value) => onFieldChange('fullName', value)}
        placeholder="Jordan Ellis"
        autoComplete="name"
      />
      <div className="field-row">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={data.email}
          onChange={(value) => onFieldChange('email', value)}
          placeholder="jordan@example.com"
          autoComplete="email"
        />
        <FormField
          id="phone"
          label="Phone"
          type="tel"
          value={data.phone}
          onChange={(value) => onFieldChange('phone', value)}
          placeholder="(555) 010-0199"
          autoComplete="tel"
        />
      </div>
      <FormField
        id="addressLine1"
        label="Mailing address"
        value={data.addressLine1}
        onChange={(value) => onFieldChange('addressLine1', value)}
        placeholder="Street address"
        autoComplete="address-line1"
      />
      <div className="field-row">
        <FormField
          id="city"
          label="City"
          value={data.city}
          onChange={(value) => onFieldChange('city', value)}
          autoComplete="address-level2"
        />
        <FormField
          id="state"
          label="State"
          value={data.state}
          onChange={(value) => onFieldChange('state', value)}
          autoComplete="address-level1"
        />
      </div>
      <FormField
        id="zip"
        label="ZIP code"
        value={data.zip}
        onChange={(value) => onFieldChange('zip', value)}
        autoComplete="postal-code"
      />
    </div>
  )
}

export default PersonalInfoStep
