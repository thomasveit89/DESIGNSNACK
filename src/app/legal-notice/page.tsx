import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Notice — DESIGNSNACK',
  robots: { index: false },
}

export default function LegalNoticePage() {
  return (
    <main
      className="min-h-screen px-5 py-16 md:px-10 md:py-24 lg:px-[84px] lg:py-[120px]"
      style={{ backgroundColor: '#06080E', color: '#fff' }}
    >
      <div className="max-w-[640px]">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium mb-16"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        {/* Heading */}
        <h1
          className="font-black text-white mb-4"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
        >
          Legal Notice
        </h1>
        <p className="text-white/40 text-[17px] font-medium mb-16">
          Hi, I&apos;m Tommy. DESIGNSNACK is my solo design studio. Here&apos;s the legal stuff you&apos;re probably looking for.
        </p>

        {/* Details */}
        <div className="space-y-10 text-[17px]">

          <section>
            <h2 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Disclosure pursuant to Art. 8 UWG
            </h2>
            <div className="space-y-1 text-white/80 leading-relaxed">
              <p className="font-semibold text-white">DESIGNSNACK GmbH</p>
              <p>Bankstrasse 2</p>
              <p>8590 Romanshorn</p>
              <p>Switzerland</p>
            </div>
          </section>

          <section>
            <h2 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Commercial Register
            </h2>
            <div className="space-y-1 text-white/80 leading-relaxed">
              <p>Registration number: CHE-350.452.110</p>
              <p>Registry office: Canton Thurgau</p>
            </div>
          </section>

          <section>
            <h2 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Representative
            </h2>
            <p className="text-white/80">Thomas Veit, Managing Director</p>
          </section>

          <section>
            <h2 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Contact
            </h2>
            <div className="space-y-1 text-white/80 leading-relaxed">
              <p>
                Email:{' '}
                <a href="mailto:tommy@designsnack.ch" className="text-white hover:text-white/70 transition-colors">
                  tommy@designsnack.ch
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://designsnack.ch" className="text-white hover:text-white/70 transition-colors">
                  designsnack.ch
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://linkedin.com/in/thomasveit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  linkedin.com/in/thomasveit
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4">
              VAT Identification Number
            </h2>
            <p className="text-white/80">CHE-350.452.110 MWST</p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <h2
            className="font-black text-white mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            Interested in working together?
          </h2>
          <p className="text-white/50 text-[17px] leading-relaxed mb-6">
            Whether you need a designer embedded in your product team, or prefer the flexibility of a design subscription – let&apos;s talk.
          </p>
          <a
            href="mailto:tommy@designsnack.ch"
            className="text-white font-semibold hover:text-white/70 transition-colors"
          >
            tommy@designsnack.ch
          </a>
        </div>

      </div>
    </main>
  )
}
