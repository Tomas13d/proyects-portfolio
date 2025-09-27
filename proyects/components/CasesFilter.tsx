"use client"

import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

interface CasesFilterProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedIndustry: string
  setSelectedIndustry: (industry: string) => void
}

export function CasesFilter({
  selectedCategory,
  setSelectedCategory,
  selectedIndustry,
  setSelectedIndustry,
}: CasesFilterProps) {
  const categories = [
    { id: "all", name: "Todos los Proyectos" },
    { id: "ai-agents", name: "Agentes de IA" },
    { id: "automation", name: "Automatización" },
    { id: "web-apps", name: "Aplicaciones Web" },
    { id: "mobile-apps", name: "Apps Móviles" },
    { id: "analytics", name: "Analytics & BI" },
  ]

  const industries = [
    { id: "all", name: "Todas las Industrias" },
    { id: "fintech", name: "Fintech" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "proptech", name: "PropTech" },
    { id: "logistics", name: "Logística" },
    { id: "saas", name: "SaaS" },
    { id: "manufacturing", name: "Manufactura" },
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-navy/10 text-navy font-medium text-sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrar Proyectos
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-navy mb-4 text-center">Por Tipo de Solución</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-navy text-white hover:bg-blue"
                      : "border-gray-300 text-gray-700 hover:border-navy hover:text-navy"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Industry filters */}
          <div>
            <h3 className="text-lg font-semibold text-navy mb-4 text-center">Por Industria</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <Button
                  key={industry.id}
                  variant={selectedIndustry === industry.id ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                    selectedIndustry === industry.id
                      ? "bg-blue text-white hover:bg-blue-light"
                      : "border-gray-300 text-gray-700 hover:border-blue hover:text-blue"
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  {industry.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
