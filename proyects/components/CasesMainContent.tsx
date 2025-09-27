"use client"

import { CasesSidebar } from "./CasesSidebar"
import { CasesMasonryGrid } from "./CasesMasonryGrid"

interface CasesMainContentProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedIndustry: string
  setSelectedIndustry: (industry: string) => void
}

export function CasesMainContent({
  selectedCategory,
  setSelectedCategory,
  selectedIndustry,
  setSelectedIndustry,
}: CasesMainContentProps) {
  return (
    <section className="mt-12 mb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar con filtros */}
            <div className="lg:w-80 flex-shrink-0">
              <CasesSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedIndustry={selectedIndustry}
                setSelectedIndustry={setSelectedIndustry}
              />
            </div>

            {/* Galería masonry */}
            <div className="flex-1">
              <CasesMasonryGrid selectedCategory={selectedCategory} selectedIndustry={selectedIndustry} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
