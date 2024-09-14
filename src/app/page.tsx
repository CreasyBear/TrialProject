import React from 'react'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import SocialProofSection from '@/components/social-proof-section'
import HowItWorks from '@/components/how-it-works'
import dynamic from 'next/dynamic'

const TestimonialsSection = dynamic(() => import('@/components/testimonials-section'))
const CTASection = dynamic(() => import('@/components/cta-section'))

export default function Home() {
  console.log('Home page rendered');
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
      {/* Other sections will go here */}
    </main>
  )
}
