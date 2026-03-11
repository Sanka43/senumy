import Card from '../components/Card'
import { HOME_CATEGORIES, getCardHref } from '../data/homeCards'
import { isPremiumUser } from '../lib/validation'
import { getCardIconUrl } from '../lib/assets'

export default function Home() {
  const isPremium = isPremiumUser()
  return (
    <div className="pb-8">
      <div className="relative -mx-4 overflow-hidden rounded-b-[1.75rem] border-b border-white/10 bg-gradient-to-b from-[#06060a] via-senumy-navy via-30% to-[#0a0a12] px-6 py-12 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)_inset] sm:-mx-6 sm:rounded-b-[2rem] md:py-14">
        <div className="absolute -top-12 left-1/4 h-32 w-32 rounded-full bg-senumy-accent/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-8 right-1/5 h-40 w-40 rounded-full bg-senumy-link/20 blur-3xl" aria-hidden />
        <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden />
        <div className="relative flex flex-col items-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-senumy-accent/90">
            All-in-one store
          </span>
          <h1 className="text-center text-lg font-semibold leading-snug text-white drop-shadow-sm sm:text-xl md:text-[1.35rem]">
            The World's First{' '}
            <span className="bg-gradient-to-r from-senumy-accent to-cyan-300 bg-clip-text font-bold text-transparent">
              IPA Store
            </span>
            {' & '}
            <span className="bg-gradient-to-r from-senumy-accent to-cyan-300 bg-clip-text font-bold text-transparent">
              Tweak Store
            </span>
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-px w-8 rounded-full bg-senumy-accent/60" aria-hidden />
            <span className="h-1.5 w-1.5 rounded-full bg-senumy-accent" aria-hidden />
            <span className="h-px w-16 rounded-full bg-gradient-to-r from-senumy-accent/60 to-transparent" aria-hidden />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6 px-4">
        {HOME_CATEGORIES.map((cat) => (
          <section key={cat.title}>
            <h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">{cat.title}</h2>
            <ul className="space-y-3">
              {cat.cards.map((card) => {
                const href = getCardHref(card, isPremium)
                return (
                  <li key={card.title}>
                    <Card
                      icon={getCardIconUrl(card.icon)}
                      title={card.title}
                      description={card.description}
                      href={href}
                      external={href.startsWith('http')}
                    />
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
