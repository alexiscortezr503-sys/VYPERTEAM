import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
