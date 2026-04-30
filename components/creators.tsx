import { Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const creators = [
  {
    name: "Bartiel",
    username: "bartielffarg",
    game: "Free Fire",
    followers: "571",
    url: "https://www.tiktok.com/@bartielffarg",
    avatar: "/bartiel-avatar.png", // Added Bartiel's avatar
  },
  {
    name: "Diogen3s",
    username: "diogen3sbs",
    game: "BloodStrike",
    followers: "571",
    url: "https://www.tiktok.com/@diogen3sbs",
    avatar: "/diogenes-avatar.png",
  },
  {
    name: "Roy",
    username: "vyp_roy30",
    game: "BloodStrike",
    followers: "571",
    url: "https://www.tiktok.com/@vyp_roy30",
    avatar: "/rey-ceo.png", // Changed Roy's avatar from roy-avatar.png to rey-ceo.png
  },
]

export function Creators() {
  return (
    <section
      id="creadores"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-transparent to-secondary/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            Creadores de <span className="text-primary">Contenido</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
            Nuestros creadores compartiendo contenido gaming en TikTok
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/30 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center ring-4 ring-primary/20 shadow-xl shadow-primary/30 overflow-hidden">
                {creator.avatar ? (
                  <Image
                    src={creator.avatar || "/placeholder.svg"}
                    alt={creator.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Video className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                )}
              </div>
              <h3 className="font-bold text-xl md:text-2xl mb-2">{creator.name}</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-2 font-mono">@{creator.username}</p>
              <p className="text-sm md:text-base text-primary font-semibold mb-4 md:mb-6">{creator.game}</p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold shadow-lg shadow-primary/30"
              >
                <a href={creator.url} target="_blank" rel="noopener noreferrer">
                  Ver TikTok
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            Síguelos en TikTok para ver highlights, tutoriales y contenido exclusivo de nuestros juegos competitivos.
          </p>
        </div>
      </div>
    </section>
  )
}
