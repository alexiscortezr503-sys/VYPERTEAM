import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, Code } from "lucide-react"

const docCategories = [
  {
    title: "Guías de Inicio",
    description: "Todo lo que necesitas saber para comenzar en la comunidad",
    icon: BookOpen,
    articles: 12,
  },
  {
    title: "Tutoriales",
    description: "Aprende paso a paso con nuestros tutoriales detallados",
    icon: Video,
    articles: 28,
  },
  {
    title: "Referencias",
    description: "Documentación técnica y especificaciones completas",
    icon: FileText,
    articles: 45,
  },
  {
    title: "Ejemplos de Código",
    description: "Código de ejemplo y plantillas para empezar rápido",
    icon: Code,
    articles: 34,
  },
]

export function Documentation() {
  return (
    <section id="documentacion" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
              Documentación y Recursos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Explora nuestra biblioteca completa de guías, tutoriales y recursos para la comunidad
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {docCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-balance">{category.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-3">{category.articles} artículos</div>
                    <Button variant="ghost" size="sm" className="w-full">
                      Explorar
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-balance">¿No encuentras lo que buscas?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta o problema que tengas
            </p>
            <Button size="lg">Contactar Soporte</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
