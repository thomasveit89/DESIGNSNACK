function LinkedInIcon({ size = 20 }: { size?: number }) {
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
    <footer
      className="px-5 pb-10 md:px-10 md:pb-12 lg:px-[84px] lg:pb-16"
      style={{ backgroundColor: '#06080E' }}
    >
      <div className="border-t border-white/10 pt-8 md:pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Left: brand identity */}
        <div>
          <img
            src="/assets/designsnack-logo.svg"
            alt="DESIGNSNACK"
            className="h-[14px] md:h-[18px] w-auto"
          />
        </div>

        {/* Right: status + links */}
        <div className="flex items-center gap-6">

          <a
            href="#"
            className="font-medium text-steel-mist hover:text-white transition-colors"
            style={{ fontSize: '13px' }}
          >
            Impressum
          </a>

          <a
            href="https://www.linkedin.com/in/thomasveit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-steel-mist hover:text-white transition-colors"
            style={{ fontSize: '13px' }}
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  )
}
