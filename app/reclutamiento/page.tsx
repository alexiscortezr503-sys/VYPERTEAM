import { Recruitment } from "@/components/recruitment"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ReclutamientoPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Recruitment />
      </main>
      <Footer />
    </div>
  )
}
