"use client"

import { Building2, Code, Globe, Smartphone, Database, Bot } from "lucide-react"

export function CasesStats() {
  const industries = [
    { icon: Building2, name: "Fintech", count: "25+" },
    { icon: Globe, name: "E-commerce", count: "20+" },
    { icon: Smartphone, name: "PropTech", count: "15+" },
    { icon: Database, name: "Logística", count: "18+" },
    { icon: Bot, name: "SaaS", count: "22+" },
    { icon: Code, name: "Manufactura", count: "12+" },
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="fade-in text-2xl md:text-3xl font-bold text-navy mb-4">
              Experiencia Multisectorial Comprobada
            </h2>
            <p className="fade-in text-lg text-gray-600 max-w-3xl mx-auto">
              Hemos desarrollado soluciones exitosas para empresas de diversos sectores, adaptando nuestra tecnología a
              las necesidades específicas de cada industria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={index}
                  className="stagger-item text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-navy/10 rounded-2xl mb-4">
                    <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-navy" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-navy mb-1">{industry.count}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{industry.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
