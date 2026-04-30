import { MessageCircle, Twitter, Instagram, Music } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/vyper-logo.png" alt="Vyper Team Logo" width={32} height={32} className="object-contain" />
              <h3 className="font-bold text-lg">VYPER TEAM</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Equipo y comunidad gaming competitiva. Disciplina, respeto y trabajo en equipo.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/juegos" className="text-muted-foreground hover:text-primary transition-colors">
                  Juegos
                </Link>
              </li>
              <li>
                <Link href="/reclutamiento" className="text-muted-foreground hover:text-primary transition-colors">
                  Reclutamiento
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-muted-foreground hover:text-primary transition-colors">
                  Staff
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-muted-foreground hover:text-primary transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/merchandising" className="text-muted-foreground hover:text-primary transition-colors">
                  Merchandising
                </Link>
              </li>
              <li>
                <Link href="/comunidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://faq-vyper-team.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a
                  href="https://sponsors-vyper-team.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="https://politica-de-privacidad-vyper-team.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="https://terminos-y-condiciones-vyper.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Redes sociales</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://discord.com/invite/vyper-team-963590130604572723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/VYPERTEAM_X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vyperteam.oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@vyp.rey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Vyper Team. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a
              href="https://discord.com/invite/vyper-team-963590130604572723"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </a>
            <a
              href="https://x.com/VYPERTEAM_X"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/vyperteam.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@vyp.rey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Music className="h-5 w-5" />
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
