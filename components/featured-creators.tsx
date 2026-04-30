import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, Twitch, Twitter } from "lucide-react"

const creators = [
  {
    name: "María González",
    role: "Creadora de Contenido",
    description: "Especialista en tutoriales y guías avanzadas para la comunidad",
    followers: "125K",
    platform: "YouTube",
  },
  {
    name: "Carlos Rodríguez",
    role: "Streamer",
    description: "Streams diarios y eventos especiales en vivo con la comunidad",
    followers: "89K",
    platform: "Twitch",
  },
  {
    name: "Ana Martínez",
    role: "Content Creator",
    description: "Noticias, análisis y actualizaciones constantes del proyecto",
    followers: "56K",
    platform: "Twitter",
  },
]

export function FeaturedCreators() {
  return (
    <section id="creadores" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">Creadores Destacados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Conoce a los creadores de contenido que están dando forma a nuestra comunidad
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {creators.map((creator, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {creator.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{creator.name}</h3>
                      <p className="text-sm text-muted-foreground">{creator.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{creator.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      {creator.platform === "YouTube" && <Youtube className="h-4 w-4 text-destructive" />}
                      {creator.platform === "Twitch" && <Twitch className="h-4 w-4 text-accent" />}
                      {creator.platform === "Twitter" && <Twitter className="h-4 w-4 text-primary" />}
                      <span className="font-medium">{creator.followers} seguidores</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Seguir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
