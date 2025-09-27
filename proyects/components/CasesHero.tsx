"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Award, TrendingUp, Users, Zap } from "lucide-react"

export function CasesHero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(".hero-badge", { y: -30, opacity: 0, duration: 0.8, ease: "back.out(1.7)" })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.7")
        .from(".hero-icons", { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.5")
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-navy via-blue to-blue-light text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 md:mb-8">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-xs md:text-sm font-medium tracking-wide">PORTFOLIO DE PROYECTOS</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-4">
            Casos de Éxito que{" "}
            <span className="bg-gradient-to-r from-green-light to-teal bg-clip-text text-transparent">
              Transforman Industrias
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Descubre cómo hemos ayudado a empresas de diferentes sectores a optimizar procesos, reducir costos y
            acelerar su crecimiento con soluciones de IA y automatización.
          </p>

          {/* Key metrics icons */}
          <div className="hero-icons grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              { icon: TrendingUp, label: "ROI Promedio", value: "300%" },
              { icon: Users, label: "Empresas", value: "100+" },
              { icon: Zap, label: "Automatización", value: "85%" },
              { icon: Award, label: "Satisfacción", value: "98%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl mb-3 md:mb-4">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-green-light" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
