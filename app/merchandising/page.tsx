import { Merchandising } from "@/components/merchandising"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function MerchandisingPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Merchandising />
      </main>
      <Footer />
    </div>
  )
}
