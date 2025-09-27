import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Tecnología", href: "#technology" },
    { name: "Nosotros", href: "#about" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/dwg",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/dwg.tech",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@dwgtech",
      icon: Youtube,
      color: "hover:text-red-400",
    },
  ]

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Columna 1: Logo + Texto */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%208-ncQmQsAi4cIvdVZqyzwPqdQT0kVz0Z.png"
                alt="DWG Logo"
                width={140}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Transformamos empresas a través de soluciones tecnológicas innovadoras, integrando inteligencia artificial
              y automatización para impulsar el crecimiento.
            </p>
          </div>

          {/* Columna 2: Links de Navegación */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto + Redes */}
          <div>
            {/* Información de Contacto */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-6 text-white">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">+54 11 1234-5678</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">hola@dwg.com</span>
                </div>
                <div className="flex items-start text-white/80">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <div>Buenos Aires, Argentina</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-white/20 ${social.color} transition-all duration-300 hover:scale-110`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright centrado */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} DWG - Digital Web Group. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
