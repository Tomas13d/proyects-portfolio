"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar } from "lucide-react"

export function CasesCta() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-navy via-blue to-blue-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            ¿Tu empresa será nuestro próximo caso de éxito?
          </h2>
          <p className="fade-in text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
            Cada proyecto que desarrollamos está diseñado para generar resultados medibles y transformar la forma en que
            nuestros clientes operan. Descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>

          <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-navy hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consultoría Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full bg-transparent backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar con un Experto
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-light mb-2">100%</div>
              <div className="text-white/80">Proyectos entregados a tiempo</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-light mb-2">15+</div>
              <div className="text-white/80">Años de experiencia</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl font-bold text-green-light mb-2">24/7</div>
              <div className="text-white/80">Soporte post-implementación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
