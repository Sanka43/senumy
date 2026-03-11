const DEFAULT_CODES = ['SN2345', 'sn345', 'MX2367', 'NH1359']

function getValidCodes(): string[] {
  const env = import.meta.env.VITE_PREMIUM_CODES
  if (typeof env === 'string' && env.trim()) {
    return env.split(',').map((c) => c.trim()).filter(Boolean)
  }
  return DEFAULT_CODES
}

/** Premium app path (no leading slash). Use getPremiumAppUrl() for full URL. */
export const PREMIUM_APP_PATH = 'prytexdmifgdv7um/'

/** Full URL for redirect after valid code. Respects Vite base path. */
export function getPremiumAppUrl(): string {
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/?$/, '/')
  return `${base}${PREMIUM_APP_PATH}`
}

/** @deprecated Use getPremiumAppUrl() for redirects. */
export const PREMIUM_APP_URL = `/${PREMIUM_APP_PATH}`

export function isValidPremiumCode(code: string): boolean {
  const trimmed = code.trim()
  return getValidCodes().some((c) => c.toLowerCase() === trimmed.toLowerCase())
}

/**
 * Validate premium code (optional server-side).
 * Set VITE_PREMIUM_VALIDATE_URL to your API endpoint (POST body: { code: string }, expect { valid: boolean }).
 * If not set, falls back to client-side isValidPremiumCode.
 */
export async function validatePremiumCodeAsync(code: string): Promise<boolean> {
  const url = import.meta.env.VITE_PREMIUM_VALIDATE_URL
  if (typeof url === 'string' && url.trim()) {
    try {
      const res = await fetch(url.trim(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      })
      if (!res.ok) return false
      const data = (await res.json()) as { valid?: boolean; success?: boolean }
      return data.valid === true || data.success === true
    } catch {
      return false
    }
  }
  return isValidPremiumCode(code)
}

export function isPremiumUser(): boolean {
  try {
    return localStorage.getItem('senumy_premium') === '1'
  } catch {
    return false
  }
}

export function setPremiumAndRedirect(): void {
  try {
    localStorage.setItem('senumy_premium', '1')
  } catch {
    /* ignore */
  }
  window.location.replace(getPremiumAppUrl())
}
