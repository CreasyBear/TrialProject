'use client'

import React from 'react'
import { CheckCircle, Battery, Zap, BarChart } from 'lucide-react'

const Step = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
)

export default function HowItWorks() {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Consultation",
      description: "Our experts assess your energy needs and design a custom solution."
    },
    {
      icon: <Battery className="w-8 h-8 text-primary" />,
      title: "Installation",
      description: "We seamlessly integrate our advanced battery systems into your infrastructure."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Optimization",
      description: "Fine-tune your energy storage for maximum efficiency and performance."
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Monitoring",
      description: "Continuously track and analyze your energy usage with our smart systems."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}