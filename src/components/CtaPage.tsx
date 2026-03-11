import CtaButtons from './CtaButtons'

type CtaPageProps = {
  children: React.ReactNode
}

export default function CtaPage({ children }: CtaPageProps) {
  return (
    <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <p className="text-[15px] font-medium leading-relaxed text-[var(--text-primary)]">
        {children}
      </p>
      <CtaButtons />
    </div>
  )
}
