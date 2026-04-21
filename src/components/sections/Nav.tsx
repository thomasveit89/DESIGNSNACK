const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Laws & Patterns', href: '/laws-and-patterns' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-[84px] py-[52px]">
      <a href="/" className="block">
        {/* Logo placeholder — replace with designsnack-white.svg once assets are provided */}
        <span className="font-black text-white text-[18px] tracking-[0.15em] uppercase">
          DESIGNSNACK
        </span>
      </a>

      <nav>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white font-semibold text-[24px] leading-none hover:text-[#768B9B] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
