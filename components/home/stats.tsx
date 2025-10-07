"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "25+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Satisfeitos" },
  { value: "50K+", label: "Hectares Geridos" },
  { value: "98%", label: "Taxa de Satisfação" },
]

export function Stats() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Resultados que Falam por Si</h2>
          <p className="text-lg text-primary-foreground/80 text-pretty leading-relaxed">
            Números que demonstram o nosso compromisso com a excelência
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
