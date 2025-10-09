"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2022",
    title: "Fundação",
    description: "A Campo Forte Agronegócios e Consultoria nasceu em 2022, em Luanda, Angola, movida pelo desejo de impulsionar o desenvolvimento do agronegócio nacional.",
  },
  {
    year: "2022",
    title: "A que nos propómos",
    description: "Desde o início, nossa missão foi clara: atender com excelência às necessidades dos produtores locais, oferecendo produtos e soluções de alta qualidade, pautadas na confiança, no profissionalismo e no comprometimento.",
  },
  {
    year: "2022",
    title: "Nosso Diferencial",
    description: "Mais do que uma empresa, somos parceiros do campo, atuando lado a lado com quem produz e constrói o futuro do agronegócio angolano. Com uma equipe dedicada e experiente, crescemos sustentados pela transparência nos relacionamentos e respeito aos clientes. A busca constante pela melhoria contínua e a experiência nos tornaram hoje símbolo de solidez, credibilidade e resultados — valores que nos tornaram referência em nosso segmento.",
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
