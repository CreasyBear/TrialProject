'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { BackgroundLights } from './background-lights'

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <BackgroundLights className="absolute inset-0 z-0 opacity-30" />
      {/* Rest of the CTA section content */}
    </section>
  )
}