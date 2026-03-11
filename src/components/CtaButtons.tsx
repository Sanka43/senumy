import { Link } from 'react-router-dom'
import Button from './Button'
import { CTA_LINKS } from '../data/ctaLinks'

export default function CtaButtons() {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:max-w-[280px]">
      {CTA_LINKS.map((item) =>
        item.external ? (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
            <Button variant={item.variant} className="w-full">
              {item.label}
            </Button>
          </a>
        ) : (
          <Link key={item.label} to={item.href}>
            <Button variant={item.variant} className="w-full">
              {item.label}
            </Button>
          </Link>
        )
      )}
    </div>
  )
}
