import CtaButtons from '../components/CtaButtons'

export default function Donate() {
  return (
    <div className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <p className="text-[15px] font-medium leading-relaxed text-[var(--text-primary)]">
        The best and largest collection of exclusive IPAs for iOS 14 through the latest iOS 26.
        <br /><br />
        Several premium tools that usually cost $10 to $20 are available for free in the Senumy Store.
      </p>
      <CtaButtons />
    </div>
  )
}
