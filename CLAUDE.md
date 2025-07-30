# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3 application for DESIGNSNACK, a UX/UI design portfolio website. The site features an animated loading screen, GSAP-powered animations, and a sleek project showcase with TailwindCSS styling.

## Essential Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm install` - Install dependencies

### Build & Deploy
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run generate` - Generate static site

## Architecture & Key Patterns

### Tech Stack
- **Framework**: Nuxt 3 (SSR disabled, SPA mode)
- **Styling**: TailwindCSS with Urbanist font
- **Animations**: GSAP with ScrollTrigger plugin
- **Build**: Vite (via Nuxt)

### Project Structure
- `app.vue` - Root component with loading screen orchestration and animated background triangles
- `pages/index.vue` - Main portfolio page with project marquee
- `components/LoadingScreen.vue` - Multi-language greeting animation
- `components/ScrollingTypography.vue` - Typography animation component
- `nuxt.config.ts` - Nuxt configuration (SPA mode, TailwindCSS module)
- `tailwind.config.js` - TailwindCSS with Urbanist font integration

### Animation System
The app uses GSAP extensively for sophisticated animations:
- **Loading sequence**: Multi-language text transitions with curved exit animation
- **Background elements**: Floating triangles with morphing shapes and random movements
- **Scroll interactions**: Circle element rotation based on scroll direction
- **Project marquee**: Infinite scrolling project galleries with hover effects

### Key Implementation Details
- SSR disabled (`ssr: false`) for client-side animations
- ScrollTrigger normalization enabled for smooth scrolling
- Loading screen prevents scrolling until animations complete
- Responsive design with mobile-specific triangle scaling
- Firebase deployment configuration included

### Animation Timing & Coordination
- Loading screen uses master timeline for synchronized exit animations
- ScrollTrigger refresh called after loading completion for proper scroll behavior
- Background triangles use different timing delays for natural movement variation
- Circle rotation persists across page scroll with momentum-based rotation

## Common Tasks

When working with animations, always:
1. Register GSAP plugins before use (ScrollTrigger already registered in app.vue)
2. Use ref templates for DOM element access
3. Clean up event listeners in onUnmounted lifecycle
4. Consider mobile performance with will-change CSS properties

When adding new project items:
- Follow the existing data structure in pages/index.vue
- Ensure images are placed in /public/img/
- Maintain the dual marquee row pattern for visual balance