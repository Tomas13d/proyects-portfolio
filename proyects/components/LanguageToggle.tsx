"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button variant="outline" size="sm" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
      {language === "es" ? "EN" : "ES"}
    </Button>
  )
}
