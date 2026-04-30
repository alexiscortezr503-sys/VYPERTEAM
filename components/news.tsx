import { Calendar, Megaphone, Trophy, UserPlus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsItems = [
  {
    title: "Reclutamiento abierto en todos los juegos",
    date: "Enero 2026",
    category: "Reclutamiento",
    icon: UserPlus,
    description: "Estamos buscando nuevos talentos para fortalecer nuestros equipos en todos los juegos activos.",
  },
  {
    title: "Formación del roster de Valorant",
    date: "Enero 2026",
    category: "Equipo",
    icon: Trophy,
    description: "Nuestro equipo de Valorant está en formación. Buscamos un Iniciador y un Suplente.",
  },
  {
    title: "Próximos torneos y scrims",
    date: "Próximamente",
    category: "Eventos",
    icon: Megaphone,
    description: "Preparándonos para participar en torneos competitivos. Mantente atento en Discord.",
  },
]

export function News() {
  return (
    <section id="noticias" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">// Últimas noticias</span>
          <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Mantente <span className="text-primary">informado</span>
          </h2>
          <p className="text-muted-foreground text-lg">Las últimas novedades y anuncios importantes de Vyper Team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mb-12">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-bold text-xl mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group bg-transparent" asChild>
            <a
              href="https://discord.com/invite/vyper-team-963590130604572723"
              target="_blank"
              rel="noopener noreferrer"
            >
              Más noticias en Discord
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
