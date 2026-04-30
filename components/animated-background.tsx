"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    // Crear partículas
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Mover partícula
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Efecto de wrapping
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Dibujar partícula con glow morado
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`
        ctx.shadowBlur = 10
        ctx.shadowColor = "rgba(168, 85, 247, 0.5)"
        ctx.fill()
        ctx.shadowBlur = 0

        // Conectar partículas cercanas
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
