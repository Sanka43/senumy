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

const glassPanel = {
  backgroundColor: 'var(--glass-fill)',
  borderColor: 'var(--glass-border)',
  boxShadow: 'var(--shadow-card)',
  WebkitBackdropFilter: 'blur(var(--glass-blur-panel))',
}

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
    <div className="mx-auto flex max-h-[calc(100dvh-var(--nav-height)*2)] min-h-0 max-w-content flex-col gap-2 px-3 py-3 sm:max-h-none sm:px-6 sm:py-6">
      {/* Hero – compact */}
      <section
        className="relative shrink-0 overflow-hidden rounded-xl border sm:rounded-2xl"
        style={{
          borderColor: 'var(--glass-border)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        <div
          className="relative px-4 py-4 backdrop-blur-[var(--glass-blur)] sm:py-5"
          style={{
            background: 'linear-gradient(165deg, var(--color-senumy-navy) 0%, var(--bg-subtle) 50%, var(--bg-base) 100%)',
            boxShadow: 'var(--shadow-soft), inset 0 1px 0 0 var(--glass-highlight)',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
          }}
        >
          <div className="absolute -top-8 right-1/4 h-24 w-24 rounded-full bg-senumy-accent/15 blur-[40px]" aria-hidden />
          <div className="relative flex flex-col items-center text-center">
            <span className="mb-1 text-sm font-semibold uppercase tracking-[0.15em] text-senumy-accent sm:text-base">
              Unlock the full store
            </span>
            <h1 className="text-2xl font-bold leading-snug text-white sm:text-3xl sm:leading-normal">
              Become a{' '}
              <span className="bg-gradient-to-r from-senumy-accent to-cyan-300 bg-clip-text text-transparent">
                Premium User
              </span>
            </h1>
            <p className="mt-1 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Premium IPA libraries in one place. One donation, lifetime access.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits – compact list */}
      <ul className="grid shrink-0 grid-cols-1 gap-2 sm:flex sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
        {BENEFITS.map((text) => (
          <li key={text} className="flex items-center gap-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            <span className="h-1 w-1 shrink-0 rounded-full bg-senumy-accent" aria-hidden />
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {/* Donate + Code in one compact column */}
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden sm:flex-row sm:gap-3">
        {/* Donate CTA – compact */}
        <div
          className="shrink-0 rounded-xl border p-3 backdrop-blur-[var(--glass-blur-panel)] sm:flex-1 sm:p-4"
          style={glassPanel}
        >
          <p className="text-center text-base font-medium leading-relaxed text-[var(--text-primary)] sm:text-lg">
            Support Senumy and get lifetime premium access.
          </p>
          <div className="mt-2 flex justify-center sm:mt-3">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="red" className="min-h-[44px] px-4 text-lg">
                Donate Now
              </Button>
            </a>
          </div>
        </div>

        {/* Code redemption – compact, can shrink */}
        <div
          className="flex min-h-0 flex-1 flex-col rounded-xl border p-3 backdrop-blur-[var(--glass-blur-panel)] sm:p-4"
          style={glassPanel}
        >
          <h2 className="shrink-0 text-lg font-semibold leading-snug text-[var(--text-primary)] sm:text-xl sm:leading-normal">
            Already donated? Enter your code
          </h2>
          <p className="mt-1 shrink-0 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Check your email for the code, then enter below. Tap Upgrade — no extra install.
          </p>

          <div className="mt-2 shrink-0 sm:mt-3">
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
              className="min-h-[44px] text-lg"
            />
          </div>

          {message && (
            <p
              className="mt-2 max-h-14 shrink-0 overflow-y-auto rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1.5 text-sm leading-relaxed text-[var(--text-secondary)] sm:max-h-20 sm:text-base"
              role="alert"
            >
              {message}
            </p>
          )}

          <div className="mt-2 flex shrink-0 items-center justify-center gap-2 sm:mt-3">
            <Button onClick={handleUpgrade} disabled={loading} className="min-h-[44px] px-4 text-lg">
              {loading ? 'Checking…' : 'Upgrade'}
            </Button>
          </div>

          <p className="mt-2 shrink-0 text-center">
            <a
              href="mailto:premium.help.department@gmail.com?subject=Senumy Support !"
              className="text-base text-senumy-link font-medium underline underline-offset-1 hover:no-underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
