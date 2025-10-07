"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function ProductsCta() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Pronto para Aumentar sua Produtividade?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 text-pretty">
            Entre em contacto com nossa equipe de especialistas e descubra as melhores soluções para sua propriedade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contactos">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="tel:+351123456789">
                <Phone className="mr-2 w-4 h-4" />
                Ligar Agora
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
