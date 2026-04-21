import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { WhatIOffer } from '@/components/sections/WhatIOffer'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { BuildingInPublic } from '@/components/sections/BuildingInPublic'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { GeometricDecor } from '@/components/sections/GeometricDecor'

export default function Home() {
  return (
    <main className="relative">
      <GeometricDecor />
      <Nav />
      <Hero />
      <TrustBar />
      <WhatIOffer />
      <SelectedWork />
      <BuildingInPublic />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
