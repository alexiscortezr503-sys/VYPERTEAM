import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"
import { Recruitment } from "@/components/recruitment"
import { Community } from "@/components/community"
import { Creators } from "@/components/creators"
import { Games } from "@/components/games"

export default function Page() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Recruitment />
        <Games />
        <Creators />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
