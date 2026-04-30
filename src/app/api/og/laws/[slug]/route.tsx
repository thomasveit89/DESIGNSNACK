import { ImageResponse } from 'next/og'
import { fetchPrincipleBySlug } from '@/lib/principles'
import { artToSvgString } from '@/lib/generative-art'

export const runtime = 'edge'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const principle = await fetchPrincipleBySlug(slug)

  if (!principle) {
    return new Response('Not found', { status: 404 })
  }

  const svgString = artToSvgString(slug, principle.category)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          background: '#06080E',
          position: 'relative',
        }}
      >
        {/* Background art */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`}
          width="1200"
          height="630"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            objectFit: 'cover',
            opacity: 0.7,
          }}
          alt=""
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(6,8,14,0.95) 0%, rgba(6,8,14,0.4) 60%, rgba(6,8,14,0.1) 100%)',
          }}
        />

        {/* Text */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#768B9B',
            }}
          >
            Laws &amp; Patterns — DESIGNSNACK
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              color: '#ffffff',
            }}
          >
            {principle.title}
          </div>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            {principle.oneLiner}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
