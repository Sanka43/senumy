import { Link } from 'react-router-dom'

type CardProps = {
  icon: string
  title: string
  description: string
  href: string
  external?: boolean
}

const CARD_ICON_SIZE = 60

const getButtonClass =
  'flex h-8 min-w-[64px] shrink-0 items-center justify-center rounded-full px-4 text-[13px] font-semibold text-senumy-accent backdrop-blur-xl transition-opacity active:opacity-80 border border-[var(--glass-border)]'

export default function Card({ icon, title, description, href, external }: CardProps) {
  return (
    <div
      className="flex min-h-[70px] items-center gap-3 rounded-xl p-3 backdrop-blur-xl border border-[var(--glass-border)]"
      style={{
        backgroundColor: 'var(--glass-fill)',
        boxShadow: 'inset 1px 1px 0 0 var(--glass-highlight)',
      }}
    >
      <div
        className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-lg border border-[var(--glass-border)] backdrop-blur-xl"
        style={{ backgroundColor: 'var(--glass-fill-strong)' }}
      >
        {icon ? (
          <img
            src={icon}
            alt=""
            width={CARD_ICON_SIZE}
            height={CARD_ICON_SIZE}
            className="h-full w-full object-contain"
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
        <p className="mt-0.5 line-clamp-3 text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={getButtonClass} style={{ backgroundColor: 'var(--glass-fill)' }} aria-label="Open">
          GET
        </a>
      ) : (
        <Link to={href} className={getButtonClass} style={{ backgroundColor: 'var(--glass-fill)' }} aria-label="Open">
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
