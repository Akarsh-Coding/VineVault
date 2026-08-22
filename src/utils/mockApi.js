const MIN_DELAY_MS = 1800
const MAX_DELAY_MS = 3400

const RANDOM_FAILURE_RATE = 0.25

function randomDelay() {
  return MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS)
}

export function submitMembership(formData, { forceFailure = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = forceFailure || Math.random() < RANDOM_FAILURE_RATE
      if (shouldFail) {
        reject(
          new Error(
            'The connection dropped before the signup could be saved. Check your network and try again.',
          ),
        )
        return
      }
      resolve({ confirmationId: `WC${Date.now().toString().slice(-6)}` })
    }, randomDelay())
  })
}
