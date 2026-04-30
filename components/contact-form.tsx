"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            CONTÁCTANOS
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Si te gustaría tener contacto con el área comercial de Vyper Team en representación de marcas,
            organizaciones o intereses particulares, o si te interesa ser parte del equipo de trabajo.
          </p>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <p className="text-green-500 text-sm">Mensaje enviado exitosamente. Te contactaremos pronto.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="access_key" value="50674dda-8cdb-4458-88a0-28f0dae6b0fa" />
          <input type="hidden" name="subject" value="Nuevo mensaje desde Vyper Team Web" />
          <input type="hidden" name="from_name" value="Vyper Team Website" />

          <div>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full bg-black/40 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 h-12"
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-black/40 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 h-12"
            />
          </div>

          <div>
            <Input
              type="text"
              name="asunto"
              placeholder="Asunto"
              required
              className="w-full bg-black/40 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 h-12"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Mensaje"
              required
              rows={6}
              className="w-full bg-black/40 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-500 resize-none"
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox name="terms" required className="mt-1 border-purple-500/30 data-[state=checked]:bg-purple-600" />
            <label htmlFor="terms" className="text-sm text-gray-400 leading-relaxed">
              Acepto los términos de tratamiento de datos y autorizo el uso de mi información para ser contactado.
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold h-12 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
