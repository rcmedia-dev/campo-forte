"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ServicesCTA() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 rounded-2xl bg-primary text-primary-foreground"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">
                Precisa de uma Solução Personalizada?
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                A nossa equipa está pronta para desenvolver uma solução à medida das necessidades específicas do seu
                negócio.
              </p>
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contactos">
                  Fale Connosco
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Phone CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">Prefere Falar Diretamente?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ligue-nos e fale com um dos nossos especialistas. Estamos disponíveis de segunda a sexta, das 9h às 18h.
              </p>
              <Button asChild size="lg" variant="outline" className="group bg-transparent">
                <a href="tel:+351123456789">
                  <Phone className="mr-2 w-4 h-4" />
                  +351 123 456 789
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
