import { Link } from 'react-router-dom'

type CardProps = {
  icon: string
  title: string
  description: string
  href: string
  external?: boolean
}

const CARD_ICON_SIZE = 56

const btnBase =
  'flex h-9 min-w-[72px] shrink-0 items-center justify-center rounded-full px-4 text-[13px] font-semibold transition-all duration-200 active:scale-[0.98]'

export default function Card({ icon, title, description, href, external }: CardProps) {
  return (
    <div
      className="group flex min-h-[76px] items-center gap-4 rounded-xl border p-3.5 transition-all duration-200 hover:border-[var(--glass-border-focus)]/40 sm:gap-4 sm:p-4"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--glass-border)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div
        className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border sm:h-[60px] sm:w-[60px]"
        style={{
          backgroundColor: 'var(--glass-fill-strong)',
          borderColor: 'var(--glass-border)',
        }}
      >
        {icon ? (
          <img
            src={icon}
            alt=""
            width={CARD_ICON_SIZE}
            height={CARD_ICON_SIZE}
            className="h-full w-full object-contain p-1"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[var(--text-tertiary)]" aria-hidden>
            <PlaceholderIcon />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-[var(--text-primary)]">{title}</div>
        <p className="mt-0.5 line-clamp-3 text-sm leading-snug text-[var(--text-secondary)]">{description}</p>
      </div>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnBase} bg-senumy-accent/15 text-senumy-accent border border-senumy-accent/30 hover:bg-senumy-accent/25`}
          aria-label="Open"
        >
          GET
        </a>
      ) : (
        <Link
          to={href}
          className={`${btnBase} bg-senumy-accent/15 text-senumy-accent border border-senumy-accent/30 hover:bg-senumy-accent/25`}
          aria-label="Open"
        >
          GET
        </Link>
      )}
    </div>
  )
}

function PlaceholderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
  )
}
