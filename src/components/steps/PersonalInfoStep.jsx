import FormField from '../FormField'
import StateAutocomplete from '../StateAutocomplete'

function PersonalInfoStep({ data, errors, onFieldChange }) {
  return (
    <div className="step">
      <FormField
        id="fullName"
        label="Full name"
        value={data.fullName}
        onChange={(value) => onFieldChange('fullName', value)}
        placeholder="Ananya Iyer"
        autoComplete="name"
        error={errors.fullName}
      />
      <div className="field-row">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={data.email}
          onChange={(value) => onFieldChange('email', value)}
          placeholder="ananya@example.com"
          autoComplete="email"
          error={errors.email}
        />
        <FormField
          id="phone"
          label="Mobile number"
          type="tel"
          value={data.phone}
          onChange={(value) => onFieldChange('phone', value)}
          placeholder="+91 98765 43210"
          autoComplete="tel"
          error={errors.phone}
        />
      </div>
      <FormField
        id="addressLine1"
        label="Address"
        value={data.addressLine1}
        onChange={(value) => onFieldChange('addressLine1', value)}
        placeholder="12, MG Road, Koramangala"
        autoComplete="address-line1"
        error={errors.addressLine1}
      />
      <div className="field-row">
        <FormField
          id="city"
          label="City"
          value={data.city}
          onChange={(value) => onFieldChange('city', value)}
          placeholder="Bengaluru"
          autoComplete="address-level2"
          error={errors.city}
        />
        <StateAutocomplete
          id="state"
          label="State / UT"
          value={data.state}
          onChange={(value) => onFieldChange('state', value)}
          error={errors.state}
        />
      </div>
      <FormField
        id="pinCode"
        label="PIN code"
        value={data.pinCode}
        onChange={(value) => onFieldChange('pinCode', value)}
        placeholder="560034"
        autoComplete="postal-code"
        error={errors.pinCode}
      />
    </div>
  )
}

export default PersonalInfoStep
