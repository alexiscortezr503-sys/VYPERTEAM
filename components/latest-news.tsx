import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "Actualización importante de la plataforma",
    description:
      "Descubre las nuevas funcionalidades que hemos implementado para mejorar tu experiencia en la comunidad.",
    date: "15 de Marzo, 2024",
    category: "Actualización",
  },
  {
    title: "Evento especial de la comunidad",
    description:
      "Únete a nosotros en nuestro próximo evento virtual donde compartiremos novedades y responderemos preguntas.",
    date: "10 de Marzo, 2024",
    category: "Evento",
  },
  {
    title: "Nuevas guías disponibles",
    description:
      "Hemos publicado una serie de tutoriales detallados para ayudarte a aprovechar al máximo todas las herramientas.",
    date: "5 de Marzo, 2024",
    category: "Contenido",
  },
]

export function LatestNews() {
  return (
    <section id="noticias" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">Últimas Noticias</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Mantente al día con las últimas actualizaciones, eventos y novedades de nuestra comunidad
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-3 w-fit">
                    {item.category}
                  </div>
                  <CardTitle className="text-xl text-balance">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" className="gap-2 bg-transparent">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
