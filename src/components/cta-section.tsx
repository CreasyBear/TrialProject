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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="bg-background/80 backdrop-blur-xl rounded-lg shadow-xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-4xl font-bold text-foreground mb-4">
            Are You Ready to Experience the Future of Energy Storage?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elevate your energy experience with RENOZ&apos;s designed battery systems
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 rounded-full transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Request a Consultation
              <motion.span
                className="inline-block ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}