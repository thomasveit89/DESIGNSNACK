'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const ease = [0.22, 1, 0.36, 1] as const

function HeadlineWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        paddingBottom: '0.25em',
        marginBottom: '-0.25em',
        paddingRight: '0.06em',
        marginRight: '-0.06em',
        verticalAlign: 'bottom',
      }}
    >
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '140%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, ease, delay }}
      >
        {word}
      </motion.span>
    </span>
  )
}

const WORD_STAGGER = 0.1
const LINE2_START = 3 * WORD_STAGGER + 0.05 // 0.35s — after last word of line 1 starts

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 pt-[120px] pb-16 md:px-10 md:pt-[160px] md:pb-20 lg:pl-[280px] lg:pr-[84px] lg:pt-[200px] lg:pb-[120px]">

      <div className="relative z-10">
        {/* Headline line 1 */}
        <h1
          className="font-black text-white leading-none"
          style={{ fontSize: 'clamp(64px, 9.5vw, 140px)', letterSpacing: '-0.05em', lineHeight: 0.86 }}
        >
          {['I', 'design', 'it.'].map((word, i) => (
            <span key={word}>
              <HeadlineWord word={word} delay={i * WORD_STAGGER} />
              {i < 2 && ' '}
            </span>
          ))}
        </h1>

        {/* Headline line 2 */}
        <p
          className="font-black text-white"
          style={{ fontSize: 'clamp(64px, 9.5vw, 140px)', letterSpacing: '-0.05em', lineHeight: 0.86, marginTop: '0.12em' }}
        >
          {['I', 'develop', 'it.'].map((word, i) => (
            <span key={word}>
              <HeadlineWord word={word} delay={LINE2_START + i * WORD_STAGGER} />
              {i < 2 && ' '}
            </span>
          ))}
        </p>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.05 }}
          className="font-medium text-muted mt-10 lg:mt-14 max-w-[864px]"
          style={{ fontSize: 'clamp(17px, 2vw, 32px)' }}
        >
          Senior Design Engineer based in Switzerland.
          <br />
          17+ years of UX depth, frontend roots, and AI in the workflow.
          <br />I embed in your team and ship what I design.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.25 }}
          className="mt-12"
        >
          <Button href="mailto:tommy@designsnack.ch">
            Let&apos;s chat →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
