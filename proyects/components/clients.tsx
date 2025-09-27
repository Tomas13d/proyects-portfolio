"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"

export function Clients() {
  const scrollRef = useRef(null)
  const duplicateRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: "-50%",
        duration: 20,
        repeat: -1,
        ease: "none",
      })
      gsap.to(duplicateRef.current, {
        x: "-50%",
        duration: 20,
        repeat: -1,
        ease: "none",
      })
    })

    return () => ctx.revert()
  }, [])

  const logos = Array(6).fill("/placeholder.svg")

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">Trusted by Industry Leaders</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          We work with forward-thinking companies across various industries
        </p>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div ref={scrollRef} className="flex gap-16 items-center py-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[180px] h-[60px] bg-white/40 backdrop-blur-sm rounded-lg p-4">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Client logo ${index + 1}`}
                  width={180}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div ref={duplicateRef} className="flex gap-16 items-center py-8">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[180px] h-[60px] bg-white/40 backdrop-blur-sm rounded-lg p-4"
              >
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Client logo ${index + 1}`}
                  width={180}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
