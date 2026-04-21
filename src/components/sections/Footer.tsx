export function Footer() {
  return (
    <footer className="bg-[#111827] px-[84px] py-[44px] flex items-center justify-between">
      <p className="font-medium text-[#e5e5e5]" style={{ fontSize: '20px' }}>
        © 2025 DESIGNSNACK GmbH – Powered by coffee &amp; curiosity
      </p>

      <div className="flex items-center gap-6">
        <a
          href="#"
          className="font-medium text-[#e5e5e5] hover:text-white transition-colors"
          style={{ fontSize: '20px' }}
        >
          Impressum
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/thomasveit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#e5e5e5] hover:text-white transition-colors"
        >
          <img
            src="https://www.figma.com/api/mcp/asset/6f983dd4-3faf-4227-b089-22882e2a8801"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>

        {/* Email */}
        <a
          href="mailto:tommy@designsnack.ch"
          aria-label="Email"
          className="text-[#e5e5e5] hover:text-white transition-colors"
        >
          <img
            src="https://www.figma.com/api/mcp/asset/e78a4dad-661d-451c-aba3-23f37c8f12cb"
            alt="Email"
            className="w-8 h-8"
          />
        </a>
      </div>
    </footer>
  )
}
