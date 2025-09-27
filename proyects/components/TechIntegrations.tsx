"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

export function TechIntegrations() {
  const scrollRef = useRef(null)
  const duplicateRef = useRef(null)

  const integrations = [
    {
      name: "Gmail",
      logo: "/placeholder.svg?height=40&width=120&text=Gmail",
      category: "Email",
    },
    {
      name: "Slack",
      logo: "/placeholder.svg?height=40&width=120&text=Slack",
      category: "Communication",
    },
    {
      name: "Google Calendar",
      logo: "/placeholder.svg?height=40&width=120&text=Google+Calendar",
      category: "Calendar",
    },
    {
      name: "Google Sheets",
      logo: "/placeholder.svg?height=40&width=120&text=Google+Sheets",
      category: "Spreadsheets",
    },
    {
      name: "Stripe",
      logo: "/placeholder.svg?height=40&width=120&text=Stripe",
      category: "Payments",
    },
    {
      name: "Zapier",
      logo: "/placeholder.svg?height=40&width=120&text=Zapier",
      category: "Automation",
    },
    {
      name: "Airtable",
      logo: "/placeholder.svg?height=40&width=120&text=Airtable",
      category: "Database",
    },
    {
      name: "Meta",
      logo: "/placeholder.svg?height=40&width=120&text=Meta",
      category: "Social Media",
    },
    {
      name: "Mercado Pago",
      logo: "/placeholder.svg?height=40&width=120&text=Mercado+Pago",
      category: "Payments",
    },
    {
      name: "Instagram",
      logo: "/placeholder.svg?height=40&width=120&text=Instagram",
      category: "Social Media",
    },
    {
      name: "WhatsApp",
      logo: "/placeholder.svg?height=40&width=120&text=WhatsApp",
      category: "Messaging",
    },
    {
      name: "Notion",
      logo: "/placeholder.svg?height=40&width=120&text=Notion",
      category: "Productivity",
    },
    {
      name: "ClickUp",
      logo: "/placeholder.svg?height=40&width=120&text=ClickUp",
      category: "Project Management",
    },
    {
      name: "GitHub",
      logo: "/placeholder.svg?height=40&width=120&text=GitHub",
      category: "Development",
    },
    {
      name: "Figma",
      logo: "/placeholder.svg?height=40&width=120&text=Figma",
      category: "Design",
    },
    {
      name: "HubSpot",
      logo: "/placeholder.svg?height=40&width=120&text=HubSpot",
      category: "CRM",
    },
    {
      name: "Salesforce",
      logo: "/placeholder.svg?height=40&width=120&text=Salesforce",
      category: "CRM",
    },
    {
      name: "Mailchimp",
      logo: "/placeholder.svg?height=40&width=120&text=Mailchimp",
      category: "Email Marketing",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de scroll infinito
      gsap.to(scrollRef.current, {
        x: "-50%",
        duration: 30,
        repeat: -1,
        ease: "none",
      })
      gsap.to(duplicateRef.current, {
        x: "-50%",
        duration: 30,
        repeat: -1,
        ease: "none",
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Integrado a las mejores herramientas</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Conectamos tu ecosistema tecnológico existente para crear soluciones que se integran perfectamente con tus
          herramientas favoritas
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-8 rounded-2xl">
        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden">
          {/* Primera fila de logos */}
          <div ref={scrollRef} className="flex gap-12 items-center py-4 whitespace-nowrap">
            {integrations.map((integration, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-md transition-all">
                  <Image
                    src={integration.logo || "/placeholder.svg"}
                    alt={`${integration.name} integration`}
                    width={120}
                    height={40}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs font-medium text-gray-700 group-hover:text-navy transition-colors">
                    {integration.name}
                  </div>
                  <div className="text-xs text-gray-500">{integration.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila de logos (duplicada para scroll infinito) */}
          <div ref={duplicateRef} className="flex gap-12 items-center py-4 whitespace-nowrap">
            {integrations.map((integration, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 group cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-md transition-all">
                  <Image
                    src={integration.logo || "/placeholder.svg"}
                    alt={`${integration.name} integration`}
                    width={120}
                    height={40}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs font-medium text-gray-700 group-hover:text-navy transition-colors">
                    {integration.name}
                  </div>
                  <div className="text-xs text-gray-500">{integration.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy mb-2">100+</div>
          <div className="text-sm text-gray-600">Integraciones disponibles</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy mb-2">24/7</div>
          <div className="text-sm text-gray-600">Sincronización automática</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy mb-2">99.9%</div>
          <div className="text-sm text-gray-600">Uptime garantizado</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy mb-2">API</div>
          <div className="text-sm text-gray-600">Conexiones personalizadas</div>
        </div>
      </div>
    </div>
  )
}
