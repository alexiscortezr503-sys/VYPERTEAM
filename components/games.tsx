import { Button } from "@/components/ui/button"
import Image from "next/image"

const games = [
  {
    name: "Valorant",
    logo: "/valorant-logo.png",
    recruiting: true,
    formUrl: "https://forms.gle/2Q6NjJs69sSJNPDG7",
  },
  {
    name: "Honor of Kings",
    logo: "/honor-of-kings-logo.png",
    recruiting: true,
    formUrl: "https://forms.gle/aSvrkwSnpWNb5NeJ8",
  },
  {
    name: "BloodStrike",
    logo: "/bloodstrike-logo.png",
    recruiting: true,
    formUrl: "https://forms.gle/KExGd4SHR24PB79u5",
  },
  {
    name: "Mobile Legends",
    logo: "/mobile-legends-logo.png",
    recruiting: true,
    formUrl: "https://forms.gle/CDvSWHSfUWozF7J86",
  },
  {
    name: "Free Fire",
    logo: "/free-fire-logo.png",
    recruiting: false,
    formUrl: "https://forms.gle/FreeFireRecruitment",
  },
]

export function Games() {
  return (
    <section
      id="juegos"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            Juegos <span className="text-primary">Activos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
            Compite con nosotros en los mejores títulos del gaming competitivo
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-xl md:rounded-2xl overflow-hidden hover:border-primary/70 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary/70 to-secondary/30 flex items-center justify-center p-6 md:p-10 group-hover:from-primary/10 group-hover:to-secondary/50 transition-all duration-300">
                <Image
                  src={game.logo || "/placeholder.svg"}
                  alt={`${game.name} logo`}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-bold text-lg md:text-2xl mb-3 md:mb-4 text-center group-hover:text-primary transition-colors">
                  {game.name}
                </h3>
                {game.recruiting && (
                  <span className="inline-block w-full text-center text-xs md:text-sm font-semibold bg-primary/20 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4 border border-primary/30">
                    Reclutando
                  </span>
                )}
                {game.recruiting && (
                  <Button
                    variant="default"
                    size="default"
                    className="w-full text-sm md:text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
                    asChild
                  >
                    <a href={game.formUrl} target="_blank" rel="noopener noreferrer">
                      Aplicar
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
