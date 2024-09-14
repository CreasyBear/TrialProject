import React from 'react'
import { Battery, Zap, Building2, Leaf } from 'lucide-react'

const StatItem = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="mb-2">{icon}</div>
    <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
)

export default function SocialProofSection() {
  const stats = [
    {
      icon: <Battery className="w-8 h-8 text-primary" />,
      value: "500+",
      label: "Installations Completed"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      value: "1 GWh+",
      label: "Energy Stored"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      value: "100+",
      label: "Commercial Partners"
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      value: "50k+",
      label: "Tons of CO2 Reduced"
    }
  ]

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Powering a Sustainable Future</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Trusted by leading companies in renewable energy and sustainability
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            {/* Replace with actual partner logos */}
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}