'use client'

import React from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = ({ quote, author, role, company }: { quote: string; author: string; role: string; company: string }) => (
  <div className="bg-background p-6 rounded-lg shadow-md">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-foreground mb-4">&ldquo;{quote}&rdquo;</p>
    <div className="text-sm">
      <p className="font-semibold text-foreground">{author}</p>
      <p className="text-muted-foreground">{role}, {company}</p>
    </div>
  </div>
)

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "RenOZ's battery system has significantly reduced our energy costs and improved our sustainability efforts. It's a game-changer for our business.",
      author: "Sarah Johnson",
      role: "Operations Manager",
      company: "GreenTech Industries"
    },
    {
      quote: "The performance and reliability of RenOZ's energy storage solution have exceeded our expectations. It's been crucial in our transition to renewable energy.",
      author: "Michael Chen",
      role: "Chief Sustainability Officer",
      company: "EcoSmart Solutions"
    },
    {
      quote: "RenOZ's team provided exceptional support throughout the installation process. Their expertise and professionalism are unmatched in the industry.",
      author: "Emma Rodriguez",
      role: "Facility Manager",
      company: "Innovative Manufacturing Co."
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}