import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'white' | 'ghost'
  className?: string
}

export function Button({ children, href, onClick, variant = 'white', className }: ButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 rounded-full font-bold text-[32px] leading-none px-10 py-6 transition-opacity hover:opacity-80 whitespace-nowrap cursor-pointer',
    variant === 'white' && 'bg-white text-[#111827]',
    variant === 'ghost' && 'border border-white/20 text-white',
    className,
  )

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}
