'use client'

import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

const COLORS = ['#FFFFFF', '#e5e5e5', '#768B9B', '#FFFFFF', '#B8C8D4']
const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)]

type BodyMeta =
  | { kind: 'circle'; r: number; color: string }
  | { kind: 'polygon'; color: string }

export function HeroPhysics() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = containerRef.current
    if (!el) return

    const W = el.clientWidth
    const H = el.clientHeight
    if (!W || !H) return

    // High-DPI canvas — we handle rendering ourselves so we can scale for devicePixelRatio.
    // Matter.js's built-in renderer ignores DPR which causes blurry shapes on retina screens.
    const dpr = window.devicePixelRatio || 1
    const canvas = document.createElement('canvas')
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.display = 'block'
    canvas.style.width = `${W}px`
    canvas.style.height = `${H}px`
    el.appendChild(canvas)
    const ctx = canvas.getContext('2d')!

    // Physics engine — runner only, no Matter.js renderer
    const engine = Matter.Engine.create()
    const runner = Matter.Runner.create()

    // Walls — 500 px thick so fast-moving bodies can't tunnel through.
    // Each wall's inner face sits exactly on the canvas edge.
    const wallOpts = { isStatic: true }
    const walls = [
      Matter.Bodies.rectangle(W / 2,    H + 250,  W + 500, 500, wallOpts), // floor
      Matter.Bodies.rectangle(-250,     H / 2,    500, H + 500, wallOpts), // left
      Matter.Bodies.rectangle(W + 250,  H / 2,    500, H + 500, wallOpts), // right
    ]

    // Ceiling is added after bodies finish falling in (~3 s), so it doesn't
    // block the spawn animation but prevents upward escape once settled.
    const ceilingTimer = setTimeout(() => {
      Matter.Composite.add(
        engine.world,
        Matter.Bodies.rectangle(W / 2, -250, W + 500, 500, wallOpts)
      )
    }, 3000)

    const metaMap = new Map<number, BodyMeta>()
    const bodyOpts = { restitution: 0.4, friction: 0.4, frictionAir: 0.012 }

    // Spawn x restricted to right half so initial pile appears on the right.
    // Walls are full-width so bodies travel anywhere once thrown.
    const spawnX = (halfSize: number) => {
      const range = Math.max(0, W / 2 - halfSize * 2 - 10)
      return W / 2 + halfSize + Math.random() * range
    }

    // Circles
    const circles = [52, 76, 44, 84, 58].map((r, i) => {
      const body = Matter.Bodies.circle(
        spawnX(r),
        -(100 + i * 140 + Math.random() * 80),
        r,
        bodyOpts
      )
      metaMap.set(body.id, { kind: 'circle', r, color: randomColor() })
      return body
    })

    // Triangles — regular polygon with 3 sides, circumradius r
    const triangles = [70, 92, 62, 100, 76].map((r, i) => {
      const body = Matter.Bodies.polygon(
        spawnX(r),
        -(500 + i * 140 + Math.random() * 80),
        3,
        r,
        bodyOpts
      )
      metaMap.set(body.id, { kind: 'polygon', color: randomColor() })
      return body
    })

    // Rectangles
    const rects = ([
      [116, 116], [144, 94], [104, 140], [132, 110], [154, 132],
    ] as [number, number][]).map(([w, h], i) => {
      const body = Matter.Bodies.rectangle(
        spawnX(w / 2),
        -(900 + i * 140 + Math.random() * 80),
        w, h,
        bodyOpts
      )
      metaMap.set(body.id, { kind: 'polygon', color: randomColor() })
      return body
    })

    const dynamicBodies = [...circles, ...triangles, ...rects]

    // Mouse — canvas has no data-pixel-ratio so mouse.pixelRatio = 1 and
    // coordinates stay in CSS pixels, which matches physics coordinates directly.
    const mouse = Matter.Mouse.create(canvas)

    // Remove Matter.js's non-passive wheel listener so page can scroll normally
    const mouseAny = mouse as any
    canvas.removeEventListener('wheel', mouseAny.mousewheel)
    canvas.removeEventListener('mousewheel', mouseAny.mousewheel)
    canvas.removeEventListener('DOMMouseScroll', mouseAny.mousewheel)

    // Mirror mousemove and mouseup on window so dragging works across the
    // full page (not just inside the canvas boundary)
    const onWindowMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.position.x = e.clientX - rect.left
      mouse.position.y = e.clientY - rect.top
      mouse.absolute.x = e.clientX
      mouse.absolute.y = e.clientY
    }
    const onWindowMouseUp = () => { mouse.button = -1 }
    window.addEventListener('mousemove', onWindowMouseMove)
    window.addEventListener('mouseup', onWindowMouseUp)

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    })

    // Cursor feedback
    Matter.Events.on(engine, 'afterUpdate', () => {
      const hit = Matter.Query.point(dynamicBodies, mouse.position)
      canvas.style.cursor = mouseConstraint.body
        ? 'grabbing'
        : hit.length > 0 ? 'grab' : 'default'
    })

    Matter.Composite.add(engine.world, [...walls, ...dynamicBodies, mouseConstraint])
    Matter.Runner.run(runner, engine)

    // Custom render loop — translates + rotates context per body, draws shape
    let rafId: number
    const draw = () => {
      // Reset transform to DPR scale and clear
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      for (const body of dynamicBodies) {
        const info = metaMap.get(body.id)
        if (!info) continue

        ctx.fillStyle = info.color
        ctx.beginPath()

        if (info.kind === 'circle') {
          // Circles drawn with arc for crisp edges
          ctx.arc(body.position.x, body.position.y, info.r, 0, Math.PI * 2)
        } else {
          // Triangles + rectangles: use world-space vertices directly —
          // no need to manually replicate Matter.js's rotation math
          const v = body.vertices
          ctx.moveTo(v[0].x, v[0].y)
          for (let i = 1; i < v.length; i++) ctx.lineTo(v[i].x, v[i].y)
          ctx.closePath()
        }

        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      clearTimeout(ceilingTimer)
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onWindowMouseMove)
      window.removeEventListener('mouseup', onWindowMouseUp)
      Matter.Events.off(engine, 'afterUpdate')
      Matter.Runner.stop(runner)
      Matter.Engine.clear(engine)
      canvas.remove()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
