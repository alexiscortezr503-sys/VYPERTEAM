import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vyper Team - Equipo Gaming Competitivo",
  description:
    "Vyper Team es una comunidad gaming competitiva enfocada en el crecimiento, disciplina y trabajo en equipo. Únete a nuestros equipos de Valorant, Honor of Kings, BloodStrike, Mobile Legends y Free Fire.",
  icons: {
    icon: "/vyper-logo.png",
    apple: "/vyper-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  )
}
