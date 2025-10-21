"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Innovation() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Tecnologia Avançada</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Inovação que Transforma o Campo</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Campo Forte, acreditamos que a tecnologia é a chave para uma agricultura mais eficiente e sustentável.
              Desenvolvemos soluções que combinam inovação digital com conhecimento agrícola tradicional.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Monitorização inteligente de culturas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Análise de dados para decisões precisas</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Automação de processos agrícolas</span>
              </li>
            </ul>
            <Button asChild size="lg" className="group">
              <Link href="/servicos">
                Explore Nossas Soluções
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted border border-border">
              <img
                src="/hero/produtos e serviços/Pagasus_.png"
                alt="Tecnologia agrícola avançada"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
