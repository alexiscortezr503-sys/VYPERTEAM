"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/juegos", label: "Juegos" },
    { href: "/reclutamiento", label: "Reclutamiento" },
    { href: "/staff", label: "Staff" },
    { href: "/noticias", label: "Noticias" },
    { href: "/merchandising", label: "Merchandising" },
    { href: "/comunidad", label: "Comunidad" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-foreground flex items-center gap-3 transition-transform hover:scale-105"
          >
            <Image
              src="/vyper-logo.png"
              alt="Vyper Team Logo"
              width={48}
              height={48}
              className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            />
            <span className="hidden sm:inline bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              VYPER TEAM
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2 overflow-x-auto max-w-[calc(100%-200px)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs lg:text-sm font-semibold px-3 py-2 rounded-lg transition-all whitespace-nowrap ${
                  pathname === link.href
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <select
              className="bg-background/50 border border-border/40 rounded-lg px-3 py-2 text-sm font-semibold text-foreground cursor-pointer"
              value={pathname}
              onChange={(e) => (window.location.href = e.target.value)}
            >
              {navLinks.map((link) => (
                <option key={link.href} value={link.href}>
                  {link.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile menu button */}
          <button className="transition-transform hover:scale-110" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border/40">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a
                  href="https://discord.com/invite/vyper-team-963590130604572723"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </Button>
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/reclutamiento">Únete</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
