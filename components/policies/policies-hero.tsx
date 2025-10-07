"use client"

import { motion } from "framer-motion"

export function PoliciesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-sm font-medium text-primary">Políticas</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance"
          >
            Políticas e Termos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed"
          >
            Transparência e confiança são fundamentais para nós. Conheça as nossas políticas de privacidade e termos de
            uso.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
