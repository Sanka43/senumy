import { type InputHTMLAttributes, forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`min-h-[44px] w-full rounded-lg border px-3 text-base placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--glass-border-focus)] backdrop-blur-xl ${className}`}
      style={{
        backgroundColor: 'var(--glass-fill)',
        borderColor: 'var(--glass-border)',
        color: 'var(--text-primary)',
      }}
      {...props}
    />
  )
)
Input.displayName = 'Input'
export default Input
