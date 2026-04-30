import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-[85vh] md:min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2.5">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">EQUIPO COMPETITIVO</span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
                <span className="block text-foreground">ÚNETE A</span>
                <span className="block text-primary mt-2">VYPER TEAM</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Más que un clan. Una comunidad gaming donde la disciplina, el respeto y la competitividad se unen para
                crear campeones.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all text-base"
                  asChild
                >
                  <a
                    href="https://discord.com/invite/vyper-team-963590130604572723"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unirse al Discord
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border hover:border-primary hover:bg-primary/5 transition-all bg-background/50 text-base"
                  asChild
                >
                  <a href="#reclutamiento">Ver reclutamiento</a>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-10">
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary">5</div>
                  <div className="text-sm text-muted-foreground mt-1">Juegos Activos</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary">3.3K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Miembros</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Comunidad</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] md:blur-[120px] rounded-full" />
                <div className="relative">
                  <Image
                    src="/vyper-logo.png"
                    alt="Vyper Team Logo"
                    width={500}
                    height={500}
                    className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
