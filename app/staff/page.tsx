import { Staff } from "@/components/staff"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function StaffPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Staff />
      </main>
      <Footer />
    </div>
  )
}
