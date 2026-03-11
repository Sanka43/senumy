export const SUPPORT_MAIL = 'mailto:premium.help.department@gmail.com?subject=Senumy Support !'

export type CtaLinkVariant = 'secondary' | 'outline'

export type CtaLink = {
  label: string
  href: string
  variant: CtaLinkVariant
  external: boolean
}

export const CTA_LINKS: CtaLink[] = [
  { label: 'Install Senumy tools - Premium users', href: '/BecomePremiumUser/', variant: 'secondary', external: false },
  { label: 'Become a Senumy premium user', href: '/BecomePremiumUser/', variant: 'outline', external: false },
  { label: 'Contact Senumy support', href: SUPPORT_MAIL, variant: 'outline', external: true },
]
