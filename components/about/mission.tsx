"use client"

import { Target, Eye, Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const items = [
  {
    icon: Target,
    title: "Missão",
    description: "Promover o fortalecimento do agronegócio em Angola, oferecendo produtos, serviços e consultorias que garantam produtividade, sustentabilidade e rentabilidade aos nossos clientes. Trabalhamos para que cada parceria se transforme em uma história de sucesso no campo, baseada na confiança e na entrega de resultados reais..",
    color: "from-blue-500/20 to-cyan-600/20",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-cyan-600/30",
    features: ["Inovação Tecnológica", "Sustentabilidade", "Rentabilidade", "Segurança Alimentar"]
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser reconhecida nacionalmente como uma empresa referência em agronegócio e consultoria, destacando-se pela qualidade dos produtos, ética nos relacionamentos e inovação nas soluções que impulsionam o crescimento do setor.",
    color: "from-emerald-500/20 to-green-600/20",
    hoverColor: "group-hover:from-emerald-500/30 group-hover:to-green-600/30",
    features: ["Liderança Regional", "Excelência Comprovada", "Impacto Positivo", "Referência Setorial"]
  },
  {
    icon: Heart,
    title: "Compromisso",
    description: "Atuamos com profissionalismo, comprometimento e confiança, construindo relações baseadas na transparência e respeito. Com inovação e foco no cliente, buscamos soluções que impulsionem o desenvolvimento do agronegócio, sempre com responsabilidade e dedicação em cada projeto.",
    color: "from-rose-500/20 to-pink-600/20",
    hoverColor: "group-hover:from-rose-500/30 group-hover:to-pink-600/30",
    features: ["Qualidade Garantida", "Satisfação Total", "Investimento Tecnológico", "Desenvolvimento Humano"]
  },
]

export function Mission() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-100 backdrop-blur-sm mb-6"
          >
            <Target className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">Nossos Pilares</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Missão, Visão e Compromisso
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Os fundamentos que orientam cada decisão e ação na CampoForte, construindo um legado de excelência e inovação no setor agrícola
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 h-full flex flex-col items-center text-center hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} ${item.hoverColor} transition-all duration-500 opacity-60`} />
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <motion.div 
                  className="relative w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-md flex items-center justify-center mb-6 group-hover:bg-background/90 transition-all duration-300 border border-border/50 shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <item.icon className="w-10 h-10 text-primary" />
                  
                  {/* Floating Element */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-primary/60 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative space-y-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    {item.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Decoration */}
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-6 opacity-60"
                  whileInView={{ width: "64px" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mt-4">
            Descubra como transformamos esses pilares em ações concretas
          </p>
        </motion.div>
      </div>
    </section>
  )
}