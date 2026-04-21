import { Mail } from 'lucide-react'

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-black px-5 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:px-10 md:py-[44px] lg:px-[84px]">
      <p className="font-medium text-muted text-[14px] md:text-[16px] lg:text-[20px]">
        © 2025 DESIGNSNACK GmbH – Powered by coffee &amp; curiosity
      </p>

      <div className="flex items-center gap-6">
        <a
          href="#"
          className="font-medium text-muted hover:text-white transition-colors text-[14px] md:text-[16px] lg:text-[20px]"
        >
          Impressum
        </a>

        <a
          href="https://www.linkedin.com/in/thomasveit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted hover:text-white transition-colors"
        >
          <LinkedInIcon size={24} />
        </a>

        <a
          href="mailto:tommy@designsnack.ch"
          aria-label="Email"
          className="text-muted hover:text-white transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>
    </footer>
  )
}
