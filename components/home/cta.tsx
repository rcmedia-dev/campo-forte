"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Pronto para Transformar o Seu Negócio Agrícola?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Entre em contacto connosco e descubra como a CampoForte pode ajudar a impulsionar a produtividade e
            sustentabilidade da sua operação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/contactos">
                Fale Connosco
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
