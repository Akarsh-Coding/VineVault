import { TIER_OPTIONS, FREQUENCY_OPTIONS, WINE_PREFERENCE_OPTIONS } from '../../data/preferenceOptions'
import './ReviewStep.css'

function labelFor(options, value) {
  return options.find((option) => option.value === value)?.label
}

function ReviewRow({ label, value }) {
  return (
    <div className="review-row">
      <span className="review-row__label text-caption">{label}</span>
      {value ? (
        <span className="review-row__value text-body-sm">{value}</span>
      ) : (
        <span className="review-row__value--empty text-body-sm">Not provided</span>
      )}
    </div>
  )
}

function ReviewStep({ formData }) {
  const { personal, preferences } = formData

  return (
    <div className="step">
      <section className="review-section">
        <h2 className="review-section__title text-display-sm">Personal info</h2>
        <div className="review-grid">
          <ReviewRow label="Full name" value={personal.fullName} />
          <ReviewRow label="Email" value={personal.email} />
          <ReviewRow label="Mobile number" value={personal.phone} />
          <ReviewRow label="Address" value={personal.addressLine1} />
          <ReviewRow label="City" value={personal.city} />
          <ReviewRow label="State" value={personal.state} />
          <ReviewRow label="PIN code" value={personal.pinCode} />
        </div>
      </section>

      <section className="review-section">
        <h2 className="review-section__title text-display-sm">Membership preferences</h2>
        <div className="review-grid">
          <ReviewRow label="Tier" value={labelFor(TIER_OPTIONS, preferences.tier)} />
          <ReviewRow
            label="Shipment frequency"
            value={labelFor(FREQUENCY_OPTIONS, preferences.shipmentFrequency)}
          />
          <ReviewRow
            label="Wine preference"
            value={labelFor(WINE_PREFERENCE_OPTIONS, preferences.winePreference)}
          />
          <ReviewRow label="Referral source" value={preferences.referralSource} />
        </div>
      </section>
    </div>
  )
}

export default ReviewStep
