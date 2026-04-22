'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Laws & Patterns', href: '/laws-and-patterns' },
  { label: 'Contact', href: '#contact' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Nav() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function close() { setOpen(false) }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 1.5 }}
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-6 md:px-10 md:py-8 lg:px-[84px] lg:py-[52px]"
      >
        <a href="/" className="block relative z-50">
          <img
            src="/assets/designsnack-logo.svg"
            alt="DESIGNSNACK"
            className="h-[14px] md:h-[18px] w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white font-semibold text-[17px] lg:text-[24px] leading-none hover:text-steel-mist transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 md:hidden flex flex-col justify-center items-end gap-[6px] w-8 h-8"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <motion.span
            className="block h-[2px] bg-white rounded-full origin-center"
            animate={open ? { width: 28, rotate: 45, y: 8 } : { width: 28, rotate: 0, y: 0 }}
            transition={{ duration: 0.35, ease }}
          />
          <motion.span
            className="block h-[2px] bg-white rounded-full"
            animate={open ? { width: 0, opacity: 0 } : { width: 20, opacity: 1 }}
            transition={{ duration: 0.2, ease }}
          />
          <motion.span
            className="block h-[2px] bg-white rounded-full origin-center"
            animate={open ? { width: 28, rotate: -45, y: -8 } : { width: 28, rotate: 0, y: 0 }}
            transition={{ duration: 0.35, ease }}
          />
        </button>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between px-5 pt-[100px] pb-12 md:hidden"
            style={{ background: '#080b12' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease }}
          >
            <nav>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.4, ease, delay: 0.05 + i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={close}
                      className="block font-black text-white leading-none py-4 border-b border-white/8 hover:text-steel-mist transition-colors"
                      style={{ fontSize: 'clamp(36px, 10vw, 56px)', letterSpacing: '-0.03em' }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.a
              href="mailto:tommy@designsnack.ch"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="font-semibold text-steel-mist text-[15px] tracking-wide"
            >
              tommy@designsnack.ch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
