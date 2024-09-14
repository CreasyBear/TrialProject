import React from 'react'
import Image from 'next/image'

const FeatureCard = ({ title, description, icon, imageSrc }: { title: string; description: string; icon: React.ReactNode; imageSrc: string }) => (
  <div className="p-6 bg-background rounded-lg shadow-md">
    <div className="w-12 h-12 mb-4 text-primary">{icon}</div>
    <Image src={imageSrc} alt={title} width={100} height={100} className="mb-4 rounded-md" />
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
)

const FeaturesSection = () => {
  const features = [
    {
      title: "High Performance",
      description: "Cutting-edge technology for optimal power output and efficiency.",
      icon: "⚡",
      imageSrc: "/image.png"
    },
    {
      title: "Longevity",
      description: "Engineered for durability and extended lifespan, ensuring reliable energy storage.",
      icon: "🔋",
      imageSrc: "/image.png"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly design for a greener future, minimizing environmental impact.",
      icon: "🌿",
      imageSrc: "/image.png"
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Intelligent Power Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
