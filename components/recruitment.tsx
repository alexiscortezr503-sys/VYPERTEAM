import { Button } from "@/components/ui/button"
import { CheckCircle2, Target, Sparkles } from "lucide-react"

export function Recruitment() {
  return (
    <section id="reclutamiento" className="py-20 md:py-28 border-b border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-5 py-3 rounded-full mb-6 text-sm font-bold border border-primary/30 shadow-lg shadow-primary/10">
            <Sparkles className="h-4 w-4" />
            Reclutamiento Abierto
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight">
            Únete a <span className="text-primary">Vyper Team</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Actualmente estamos reclutando jugadores comprometidos en todos nuestros juegos activos. Si tu perfil cumple
            los requisitos, serás contactado a través de Discord.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <h3 className="font-bold text-2xl mb-4 text-center text-primary">Valorant</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">Buscamos: Iniciador</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">Suplente para el equipo</span>
              </div>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
              size="lg"
              asChild
            >
              <a href="https://forms.gle/2Q6NjJs69sSJNPDG7" target="_blank" rel="noopener noreferrer">
                Aplicar
              </a>
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <h3 className="font-bold text-2xl mb-4 text-center text-primary">Honor of Kings</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-5">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">Reclutamiento activo</span>
              </div>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
              size="lg"
              asChild
            >
              <a href="https://forms.gle/aSvrkwSnpWNb5NeJ8" target="_blank" rel="noopener noreferrer">
                Aplicar
              </a>
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <h3 className="font-bold text-2xl mb-4 text-center text-primary">BloodStrike</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-5">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">Reclutamiento activo</span>
              </div>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
              size="lg"
              asChild
            >
              <a href="https://forms.gle/KExGd4SHR24PB79u5" target="_blank" rel="noopener noreferrer">
                Aplicar
              </a>
            </Button>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <h3 className="font-bold text-2xl mb-4 text-center text-primary">Mobile Legends</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-5">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">Reclutamiento activo</span>
              </div>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
              size="lg"
              asChild
            >
              <a href="https://forms.gle/CDvSWHSfUWozF7J86" target="_blank" rel="noopener noreferrer">
                Aplicar
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 rounded-xl p-8 text-center backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-3 text-foreground">Proceso de reclutamiento</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              El proceso de selección continúa en nuestro servidor de Discord. Si cumples con los requisitos y tu perfil
              encaja con lo que buscamos, nuestro staff se pondrá en contacto contigo.
            </p>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
              asChild
            >
              <a
                href="https://discord.com/invite/vyper-team-963590130604572723"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
