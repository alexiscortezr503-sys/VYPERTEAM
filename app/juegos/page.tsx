import { Games } from "@/components/games"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function JuegosPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Games />
      </main>
      <Footer />
    </div>
  )
}
