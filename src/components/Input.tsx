import { type InputHTMLAttributes, forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`min-h-[48px] w-full rounded-xl border px-4 text-[15px] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-senumy-accent/40 focus:border-senumy-accent/50 transition-colors backdrop-blur-[var(--glass-blur)] ${className}`}
      style={{
        backgroundColor: 'var(--glass-fill)',
        borderColor: 'var(--glass-border)',
        color: 'var(--text-primary)',
        boxShadow: 'inset 0 1px 0 0 var(--glass-highlight-subtle)',
        WebkitBackdropFilter: 'blur(var(--glass-blur))',
      }}
      {...props}
    />
  )
)
Input.displayName = 'Input'
export default Input
