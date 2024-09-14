import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { BackgroundLights } from './background-lights'

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <BackgroundLights className="absolute inset-0 z-0" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="RENOZ Energy Storage Solution"
          layout="fill"
          objectFit="cover"
          className="absolute z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-20"></div>
        <div className="relative z-30 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RENOZ Energy</h1>
          <p className="text-xl md:text-2xl">Shaping the future of energy through intelligent design</p>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Shaping the future of energy through intelligent design.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            To create battery systems that seamlessly blend performance, longevity, and sustainability.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="RENOZ battery system in action"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg mb-4">
                At RENOZ Energy, we're redefining battery technology through intelligent power management. Our batteries combine cutting-edge technology with thoughtful design, offering an energy solution that's both powerful and refined.
              </p>
              <p className="text-lg mb-4">
                We believe in creating battery systems that not only meet the energy demands of today but also pave the way for a sustainable future. Our focus on performance, longevity, and sustainability drives every aspect of our design and manufacturing process.
              </p>
              <p className="text-lg mb-4">
                Experience the future of energy, engineered for those who demand more from their power systems.
              </p>
              <Button size="lg" className="mt-4">Discover Our Technology</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted" aria-labelledby="innovative-approach">
        <div className="container mx-auto px-4">
          <h2 id="innovative-approach" className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Innovative Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4">Intelligent Design</h3>
              <p className="text-sm">
                Our battery systems are crafted with intelligent design principles, optimizing every component for maximum efficiency and performance.
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Technology</h3>
              <p className="text-sm">
                We leverage the latest advancements in battery technology to deliver power solutions that are at the forefront of the industry.
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4">Sustainability Focus</h3>
              <p className="text-sm">
                Our commitment to sustainability is reflected in every aspect of our battery systems, from materials selection to end-of-life recycling programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Energy Revolution</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover how RENOZ Energy can transform your power management and contribute to a more sustainable future.
          </p>
          <Button size="lg" variant="secondary">Contact Us Today</Button>
        </div>
      </section>
    </div>
  )
}