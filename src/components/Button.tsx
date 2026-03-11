import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'red'
  children: ReactNode
}

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl font-semibold px-5 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 border'
  const variants = {
    primary:
      'bg-senumy-blue text-white border-senumy-accent/40 shadow-[0_0_24px_var(--color-senumy-glow),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-senumy-accent/60',
    secondary:
      'text-white border-2 border-senumy-accent/50 bg-senumy-accent/10 hover:bg-senumy-accent/20',
    outline:
      'border-2 border-[var(--glass-border-focus)] text-[var(--text-primary)] bg-transparent hover:bg-[var(--glass-fill)]',
    red:
      'bg-red-500/90 text-white border-red-400/40 shadow-[0_0_20px_rgba(239,68,68,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-red-400/60',
  }
  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
