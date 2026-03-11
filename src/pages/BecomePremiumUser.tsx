import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { validatePremiumCodeAsync, setPremiumAndRedirect } from '../lib/validation'

const DONATE_URL = 'https://senumy-store.dpdcart.com/cart/add?product_id=243722&method_id=266244'
const INVALID_MSG =
  'You can receive an update code for any amount of donation to enjoy all features. Please check your email to copy the correct code, or contact the support team.'

export default function BecomePremiumUser() {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async () => {
    const trimmed = code.trim()
    if (!trimmed) return
    setMessage('')
    setLoading(true)
    try {
      const valid = await validatePremiumCodeAsync(trimmed)
      if (valid) {
        setPremiumAndRedirect()
        return
      }
      setMessage(INVALID_MSG)
    } catch {
      setMessage('Something went wrong. Please try again or contact support.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-4 py-6">
        <p className="text-[15px] text-senumy-link">
          Senumy is a unique IPA Store that gives you access to premium IPA libraries all in one place.
          You can download hundreds of exclusive IPAs, including jailbreak tools, tweaks, modded games,
          and Double Plus (Mod) apps. With a one-time donation, you get lifetime access — no recurring payments.
        </p>

        <div className="mt-6 flex justify-center">
          <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="red">Donate Now</Button>
          </a>
        </div>

        <div className="mt-6 text-[var(--text-primary)]">
          <p className="text-sm">
            After you donate, check your email to find the ‘registration code’ and enter it below.
            Tap Upgrade to become a premium user in the same app — no download or Settings install needed.
          </p>

          <div className="mt-5">
            <Input
              type="text"
              placeholder="Enter registration code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setMessage('')
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleUpgrade()
                }
              }}
            />
          </div>

          {message && <p className="mt-3 text-sm text-[var(--text-secondary)]">{message}</p>}

          <div className="mt-5 flex justify-center">
            <Button onClick={handleUpgrade} disabled={loading}>
              {loading ? 'Checking…' : 'Upgrade'}
            </Button>
          </div>

          <p className="mt-4 text-center">
            <a
              href="mailto:premium.help.department@gmail.com?subject=Senumy Support !"
              className="text-senumy-link underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
  )
}
