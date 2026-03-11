import CtaButtons from './CtaButtons'

type CtaPageProps = {
  children: React.ReactNode
}

export default function CtaPage({ children }: CtaPageProps) {
  return (
    <div className="px-4 py-6">
      <p className="text-[15px] font-bold leading-relaxed text-[var(--text-primary)]">
        {children}
      </p>
      <CtaButtons />
    </div>
  )
}
