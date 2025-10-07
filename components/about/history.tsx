"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2000",
    title: "Fundação",
    description: "A CampoForte nasce com a missão de revolucionar o setor agrícola português.",
  },
  {
    year: "2008",
    title: "Expansão Nacional",
    description: "Expandimos as nossas operações para todo o território nacional.",
  },
  {
    year: "2015",
    title: "Inovação Tecnológica",
    description: "Lançamento da nossa plataforma digital de gestão agrícola.",
  },
  {
    year: "2020",
    title: "Sustentabilidade",
    description: "Implementação de práticas 100% sustentáveis em todos os projetos.",
  },
  {
    year: "2025",
    title: "Liderança de Mercado",
    description: "Reconhecidos como líderes em inovação agrícola em Portugal.",
  },
]

export function History() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">A Nossa História</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Uma jornada de crescimento, inovação e compromisso com a excelência
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10">
                    <span className="text-sm font-bold text-primary-foreground">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-24 lg:pl-0 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="p-6 rounded-lg bg-card border border-border">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
