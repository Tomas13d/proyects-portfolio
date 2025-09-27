"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import { projectsDataResume } from "@/utils/projectsData";

interface CasesMasonryGridProps {
  selectedCategory: string;
  selectedIndustry: string;
}

export function CasesMasonryGrid({
  selectedCategory,
  selectedIndustry,
}: CasesMasonryGridProps) {
  const filteredCases = useMemo(() => {
    return projectsDataResume["es"].filter((case_) => {
      const categoryMatch =
        selectedCategory === "all" || case_.category.includes(selectedCategory);
      const industryMatch =
        selectedIndustry === "all" || case_.industry === selectedIndustry;
      return categoryMatch && industryMatch;
    });
  }, [selectedCategory, selectedIndustry]);

  return (
    <div>
      {/* Results header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-navy mb-2">Proyectos</h2>
          <p className="text-gray-600">
            Mostrando{" "}
            <span className="font-semibold text-navy">
              {filteredCases.length}
            </span>{" "}
            proyectos
            {selectedCategory !== "all" || selectedIndustry !== "all"
              ? " filtrados"
              : ""}
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 md:mb-16 max-w-7xl mx-auto">
        {filteredCases.map((case_) => (
          <div
            key={case_.id + case_.client}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Header con imagen y overlay (igual que el ejemplo) */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={case_.image || "/placeholder.svg"}
                alt={`${case_.client} project`}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay gradiente oscuro */}
              <div
                className={`absolute inset-0 bg-gradient-to-t  ${
                  case_.gradient === "ligth" ? "" : "from-black via-black/65"
                }  to-transparent opacity-80`}
              />

              {/* Contenido sobre la imagen */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-navy/65 backdrop-blur-sm text-xs font-medium">
                    {case_.industry ?? case_.result}
                  </span>
                  <Link
                    href={`/proyectos/${case_.slug}`}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </Link>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{case_.client}</h3>
                  <p className="text-white/90 text-sm">
                    {case_.category.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Contenido principal (igual estructura que el ejemplo) */}
            <div className="p-6">
              {/* Métrica destacada */}
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full ${case_.bgColor} mb-4`}
              >
                <TrendingUp className={`w-4 h-4 mr-2 ${case_.accentColor}`} />
                <span className={`font-bold text-lg ${case_.accentColor}`}>
                  {/* si ya traés metrics[0].label como en el ejemplo */}
                  {case_?.metrics?.[0]?.label ?? case_.roi ?? "Resultado"}
                </span>
              </div>

              {/* Desafío */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Desafío
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {case_.challenge}
                </p>
              </div>

              {/* Solución / Resultado */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Solución
                </h4>
                <p
                  className={`font-semibold ${case_.accentColor} text-sm leading-relaxed`}
                >
                  {case_.result}
                </p>
              </div>

              {/* Footer con stats */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-navy">
                      {case_.year ?? "—"}
                    </div>
                    <div className="text-xs text-gray-500">Año</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-navy">
                      {case_.duration ?? "—"}
                    </div>
                    <div className="text-xs text-gray-500">Duración</div>
                  </div>
                </div>

                <Link
                  href={`/casos-de-exito/${case_.slug}`}
                  style={{ cursor: "pointer" }}
                >
                  <button
                    className={`group/btn flex items-center space-x-2 ${case_.accentColor} hover:underline text-sm font-medium`}
                  >
                    <span>Ver proyecto</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
