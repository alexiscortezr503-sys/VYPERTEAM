"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <img
                  src="/vyper-logo.png"
                  alt="Loading"
                  className="w-24 h-24 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                />
              </motion.div>

              <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-purple-400 to-primary"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="text-sm text-muted-foreground font-semibold"
              >
                Cargando...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </>
  )
}
