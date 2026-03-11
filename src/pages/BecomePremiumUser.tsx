import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { validatePremiumCodeAsync, setPremiumAndRedirect } from '../lib/validation'

const DONATE_URL = 'https://senumy-store.dpdcart.com/cart/add?product_id=243722&method_id=266244'
const INVALID_MSG =
  'You can receive an update code for any amount of donation to enjoy all features. Please check your email to copy the correct code, or contact the support team.'

const BENEFITS = [
  'Hundreds of exclusive IPAs in one place',
  'Jailbreak tools, tweaks, modded games & Double Plus apps',
  'One-time donation — lifetime access, no recurring payments',
]

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
    <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-2xl border sm:rounded-3xl"
        style={{
          borderColor: 'var(--glass-border)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div
          className="relative px-6 py-12 backdrop-blur-[var(--glass-blur)] sm:py-14"
          style={{
            background: 'linear-gradient(165deg, var(--color-senumy-navy) 0%, var(--bg-subtle) 50%, var(--bg-base) 100%)',
            boxShadow: 'var(--shadow-soft), inset 0 1px 0 0 var(--glass-highlight)',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
          }}
        >
          <div className="absolute -top-12 right-1/4 h-32 w-32 rounded-full bg-senumy-accent/15 blur-[50px]" aria-hidden />
          <div className="absolute bottom-0 left-1/4 h-24 w-24 rounded-full bg-senumy-link/10 blur-[40px]" aria-hidden />
          <div className="relative flex flex-col items-center text-center">
            <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-senumy-accent">
              Unlock the full store
            </span>
            <h1 className="text-xl font-bold leading-tight text-white sm:text-2xl">
              Become a{' '}
              <span className="bg-gradient-to-r from-senumy-accent to-cyan-300 bg-clip-text text-transparent">
                Premium User
              </span>
            </h1>
            <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-[var(--text-secondary)]">
              Senumy gives you access to premium IPA libraries in one place. One donation, lifetime access.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <ul className="mt-6 space-y-2.5">
        {BENEFITS.map((text) => (
          <li key={text} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-senumy-accent"
              aria-hidden
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {/* Donate CTA */}
      <div
        className="mt-8 rounded-xl border p-5 backdrop-blur-[var(--glass-blur-panel)] sm:p-6"
        style={{
          backgroundColor: 'var(--glass-fill)',
          borderColor: 'var(--glass-border)',
          boxShadow: 'var(--shadow-card)',
          WebkitBackdropFilter: 'blur(var(--glass-blur-panel))',
        }}
      >
        <p className="text-center text-sm font-medium text-[var(--text-primary)]">
          Support Senumy and get lifetime premium access.
        </p>
        <div className="mt-4 flex justify-center">
          <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="red">Donate Now</Button>
          </a>
        </div>
      </div>

      {/* Code redemption */}
      <div
        className="mt-6 rounded-xl border p-5 backdrop-blur-[var(--glass-blur-panel)] sm:p-6"
        style={{
          backgroundColor: 'var(--glass-fill)',
          borderColor: 'var(--glass-border)',
          boxShadow: 'var(--shadow-card)',
          WebkitBackdropFilter: 'blur(var(--glass-blur-panel))',
        }}
      >
        <h2 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
          Already donated? Enter your code
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Check your email for the registration code, then enter it below. Tap Upgrade — no extra download or Settings install.
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

        {message && (
          <p
            className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-[var(--text-secondary)]"
            role="alert"
          >
            {message}
          </p>
        )}

        <div className="mt-5 flex justify-center">
          <Button onClick={handleUpgrade} disabled={loading}>
            {loading ? 'Checking…' : 'Upgrade'}
          </Button>
        </div>

        <p className="mt-5 text-center">
          <a
            href="mailto:premium.help.department@gmail.com?subject=Senumy Support !"
            className="text-senumy-link font-medium underline underline-offset-2 hover:no-underline"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  )
}
