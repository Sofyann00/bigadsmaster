"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { useRef } from "react"

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      
      slider.on("created", nextTimeout)
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  // Add ref for services section
  const servicesRef = useRef<HTMLElement>(null)
  
  // Scroll handler function
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section - Now with a more dynamic and interactive design */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
          
          {/* Floating elements animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              >
                <div className="w-2 h-2 bg-primary/20 rounded-full blur-sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Dominate Search Rankings
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Transform your online presence with data-driven SEO strategies that deliver measurable results
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketplace">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Showcase - Now with a modern card design */}
      <section ref={servicesRef} className="py-32 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive SEO solutions tailored to your needs
            </p>
          </div>

          <div ref={sliderRef} className="keen-slider">
            {products.map((product) => (
              <div key={product.id} className="keen-slider__slide">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-background to-muted/50">
                  <CardContent className="p-6">
                    <div className="aspect-square relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Now with interactive cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group p-6 rounded-2xl bg-gradient-to-b from-muted/50 to-transparent border border-muted hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Advanced SEO Tools',
    description: 'We utilize cutting-edge SEO tools and technologies to analyze, track, and optimize your website\'s performance in search engines.',
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Expert Team',
    description: 'Our team of experienced SEO specialists stays ahead of algorithm updates and industry trends to deliver optimal results.',
    icon: <Cpu className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Proven Results',
    description: 'We have a track record of helping businesses achieve higher rankings, increased organic traffic, and better conversion rates.',
    icon: <Shield className="h-5 w-5 text-primary" />,
  },
]