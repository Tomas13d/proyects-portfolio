import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body>{children}</body>
      </LanguageProvider>
    </html>
  )
}
