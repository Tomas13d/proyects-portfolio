"use client"

import { Button } from "@/components/ui/button"
import { Filter, Search, X } from "lucide-react"
import { useState } from "react"

interface CasesSidebarProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedIndustry: string
  setSelectedIndustry: (industry: string) => void
}

export function CasesSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedIndustry,
  setSelectedIndustry,
}: CasesSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = [
    { id: "all", name: "Todos los Proyectos", count: 12 },
    { id: "ai-agents", name: "Agentes de IA", count: 3 },
    { id: "automation", name: "Automatización", count: 4 },
    { id: "web-apps", name: "Aplicaciones Web", count: 2 },
    { id: "mobile-apps", name: "Apps Móviles", count: 2 },
    { id: "analytics", name: "Analytics & BI", count: 1 },
  ]

  const industries = [
    { id: "all", name: "Todas las Industrias", count: 12 },
    { id: "fintech", name: "Fintech", count: 3 },
    { id: "ecommerce", name: "E-commerce", count: 2 },
    { id: "proptech", name: "PropTech", count: 2 },
    { id: "logistics", name: "Logística", count: 2 },
    { id: "saas", name: "SaaS", count: 2 },
    { id: "manufacturing", name: "Manufactura", count: 1 },
  ]

  const clearAllFilters = () => {
    setSelectedCategory("all")
    setSelectedIndustry("all")
    setSearchTerm("")
  }

  const hasActiveFilters = selectedCategory !== "all" || selectedIndustry !== "all" || searchTerm !== ""

  return (
    <>
      {/* Mobile filter toggle */}
      <div className="lg:hidden mb-6">
        <Button onClick={() => setIsFilterOpen(!isFilterOpen)} className="w-full bg-navy text-white hover:bg-blue">
          <Filter className="w-4 h-4 mr-2" />
          {isFilterOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
        </Button>
      </div>

      {/* Sidebar content */}
      <div className={`${isFilterOpen ? "block" : "hidden"} lg:block`}>
        <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-navy flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </h3>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-gray-600 hover:text-navy">
                <X className="w-4 h-4 mr-1" />
                Limpiar
              </Button>
            )}
          </div>

          {/* Search */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Buscar Proyectos</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por nombre o tecnología..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue/20 focus:border-blue outline-none text-sm"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">Tipo de Solución</label>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                    selectedCategory === category.id
                      ? "bg-navy text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Industry filters */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">Industria</label>
            <div className="space-y-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${
                    selectedIndustry === industry.id
                      ? "bg-blue text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{industry.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        selectedIndustry === industry.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {industry.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm">Estadísticas Rápidas</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Total de proyectos:</span>
                <span className="font-semibold text-navy">100+</span>
              </div>
              <div className="flex justify-between">
                <span>Años de experiencia:</span>
                <span className="font-semibold text-navy">15+</span>
              </div>
              <div className="flex justify-between">
                <span>Industrias atendidas:</span>
                <span className="font-semibold text-navy">12+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
