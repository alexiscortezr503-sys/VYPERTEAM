import { AboutUs } from "@/components/about-us"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}
