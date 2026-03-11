import Card from '../components/Card'
import { HOME_CATEGORIES, getCardHref } from '../data/homeCards'
import { isPremiumUser } from '../lib/validation'
import { getCardIconUrl } from '../lib/assets'

export default function Home() {
  const isPremium = isPremiumUser()
  return (
    <div className="pb-10">
      <section className="relative mx-4 mt-2 overflow-hidden rounded-2xl border border-[var(--glass-border)] sm:mx-6 sm:mt-4 sm:rounded-3xl">
        <div
          className="relative px-6 py-14 sm:py-16 md:py-20"
          style={{
            background: 'linear-gradient(165deg, var(--color-senumy-navy) 0%, var(--bg-subtle) 45%, var(--bg-base) 100%)',
            boxShadow: 'var(--shadow-soft), inset 0 1px 0 var(--glass-highlight)',
          }}
        >
          <div className="absolute -top-16 left-1/4 h-40 w-40 rounded-full bg-senumy-accent/20 blur-[60px]" aria-hidden />
          <div className="absolute bottom-0 right-1/5 h-32 w-32 rounded-full bg-senumy-link/15 blur-[50px]" aria-hidden />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} aria-hidden />
          <div className="relative flex flex-col items-center text-center">
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-senumy-accent">
              All-in-one store
            </span>
            <h1 className="max-w-[320px] text-xl font-bold leading-tight text-white sm:text-2xl md:text-[1.6rem]">
              The World&apos;s First{' '}
              <span className="bg-gradient-to-r from-senumy-accent to-cyan-300 bg-clip-text text-transparent">
                IPA Store
              </span>
              {' & '}
              <span className="bg-gradient-to-r from-senumy-accent to-cyan-300 bg-clip-text text-transparent">
                Tweak Store
              </span>
            </h1>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-10 rounded-full bg-senumy-accent/50" aria-hidden />
              <span className="h-2 w-2 rounded-full bg-senumy-accent" aria-hidden />
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-senumy-accent/50 to-transparent" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 max-w-content space-y-10 px-4 sm:px-6">
        {HOME_CATEGORIES.map((cat) => (
          <section key={cat.title}>
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">
              {cat.title}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-1">
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
