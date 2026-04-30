import { Community } from "@/components/community"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ComunidadPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Community />
      </main>
      <Footer />
    </div>
  )
}
