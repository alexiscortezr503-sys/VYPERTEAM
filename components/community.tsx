"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Twitter, Instagram, Music, FileText, DollarSign, Shield, FileCheck } from "lucide-react"

export function Community() {
  return (
    <section
      id="comunidad"
      className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
            Comunidad y <span className="text-primary">Redes</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
            Síguenos en nuestras redes sociales oficiales y mantente conectado
          </p>
          <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl shadow-primary/10">
            <p className="text-xl font-bold mb-3">El corazón de Vyper Team late en Discord y WhatsApp</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <span className="text-primary font-black text-2xl">3,390 miembros</span> en Discord para scrims y llamadas
              de equipo. WhatsApp para coordinación diaria y mensajes rápidos.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <Button
            variant="default"
            size="lg"
            className="h-auto flex-col gap-6 p-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all rounded-2xl max-w-md w-full"
            asChild
          >
            <a
              href="https://discord.com/invite/vyper-team-963590130604572723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-16 w-16" />
              <div className="text-center">
                <span className="font-black text-2xl block mb-2">Discord</span>
                <span className="text-base opacity-90">3,390 miembros activos</span>
              </div>
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
          <Button
            variant="outline"
            size="lg"
            className="h-auto flex-col gap-4 p-8 hover:border-primary hover:bg-primary/10 bg-card/50 backdrop-blur-sm border-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 rounded-2xl min-w-[160px]"
            asChild
          >
            <a href="https://x.com/VYPERTEAM_X" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-10 w-10" />
              <span className="font-bold text-base">Twitter / X</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-auto flex-col gap-4 p-8 hover:border-primary hover:bg-primary/10 bg-card/50 backdrop-blur-sm border-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 rounded-2xl min-w-[160px]"
            asChild
          >
            <a href="https://www.instagram.com/vyperteam.oficial" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-10 w-10" />
              <span className="font-bold text-base">Instagram</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-auto flex-col gap-4 p-8 hover:border-primary hover:bg-primary/10 bg-card/50 backdrop-blur-sm border-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 rounded-2xl min-w-[160px]"
            asChild
          >
            <a href="https://www.tiktok.com/@vyp.rey" target="_blank" rel="noopener noreferrer">
              <Music className="h-10 w-10" />
              <span className="font-bold text-base">TikTok</span>
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Enlaces importantes</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <Button
              variant="ghost"
              size="lg"
              className="h-auto flex-col gap-3 p-6 bg-card/30 hover:bg-card/50 hover:border-primary/50 border-2 border-transparent transition-all hover:scale-105 rounded-xl"
              asChild
            >
              <a href="https://faq-vyper-team.netlify.app/" target="_blank" rel="noopener noreferrer">
                <FileText className="h-8 w-8 text-primary" />
                <span className="text-base font-semibold">FAQ</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-auto flex-col gap-3 p-6 bg-card/30 hover:bg-card/50 hover:border-primary/50 border-2 border-transparent transition-all hover:scale-105 rounded-xl"
              asChild
            >
              <a href="https://sponsors-vyper-team.netlify.app/" target="_blank" rel="noopener noreferrer">
                <DollarSign className="h-8 w-8 text-primary" />
                <span className="text-base font-semibold">Sponsors</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-auto flex-col gap-3 p-6 bg-card/30 hover:bg-card/50 hover:border-primary/50 border-2 border-transparent transition-all hover:scale-105 rounded-xl"
              asChild
            >
              <a
                href="https://politica-de-privacidad-vyper-team.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-base font-semibold">Privacidad</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-auto flex-col gap-3 p-6 bg-card/30 hover:bg-card/50 hover:border-primary/50 border-2 border-transparent transition-all hover:scale-105 rounded-xl"
              asChild
            >
              <a href="https://terminos-y-condiciones-vyper.netlify.app/" target="_blank" rel="noopener noreferrer">
                <FileCheck className="h-8 w-8 text-primary" />
                <span className="text-base font-semibold">Términos</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
