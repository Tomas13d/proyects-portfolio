"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { LanguageToggle } from "./LanguageToggle"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/50 backdrop-blur-sm"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%208-ncQmQsAi4cIvdVZqyzwPqdQT0kVz0Z.png"
              alt="DWG Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-navy hover:text-blue-light transition-colors">
              {t.nav.services}
            </Link>
            <Link href="#projects" className="text-navy hover:text-blue-light transition-colors">
              {t.nav.projects}
            </Link>
            <Link href="#technology" className="text-navy hover:text-blue-light transition-colors">
              {t.nav.technology}
            </Link>
            <Link href="#about" className="text-navy hover:text-blue-light transition-colors">
              {t.nav.about}
            </Link>
            <Button variant="default" className="bg-blue hover:bg-blue-light text-white">
              {t.nav.contact}
            </Button>
            <LanguageToggle />
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6 text-navy" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#services" className="block px-3 py-2 text-navy hover:text-blue-light transition-colors">
                {t.nav.services}
              </Link>
              <Link href="#projects" className="block px-3 py-2 text-navy hover:text-blue-light transition-colors">
                {t.nav.projects}
              </Link>
              <Link href="#technology" className="block px-3 py-2 text-navy hover:text-blue-light transition-colors">
                {t.nav.technology}
              </Link>
              <Link href="#about" className="block px-3 py-2 text-navy hover:text-blue-light transition-colors">
                {t.nav.about}
              </Link>
              <Button variant="default" className="w-full bg-blue hover:bg-blue-light text-white mt-4">
                {t.nav.contact}
              </Button>
              <div className="mt-4">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
