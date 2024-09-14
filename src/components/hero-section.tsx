import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { BackgroundLights } from './background-lights'

interface HeroSectionProps {
  // Add any props if needed
}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <BackgroundLights className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-moveUp">
            Shaping the future of energy through intelligent design
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-moveUp">
            Experience the future of energy with RENOZ battery systems.
            Powerful, Refined,  Sustainable.
          </p>
          <Button size="lg" className="animate-appear">Discover Our Solutions</Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/image.png"
            alt="RENOZ Energy Storage Solution"
            width={500}
            height={300}
            className="rounded-lg shadow-lg animate-appear"
          />
        </div>
      </div>
    </section>
  )
}