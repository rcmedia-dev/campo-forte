"use client"

import { Lightbulb, Users, Award, Leaf, TrendingUp, Shield, Sparkles, Target } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente novas soluções e tecnologias para melhorar o setor agrícola.",
    color: "from-purple-500/20 to-violet-600/20",
    hoverColor: "group-hover:from-purple-500/30 group-hover:to-violet-600/30",
    features: ["P&D Contínuo", "Tecnologia de Ponta", "Soluções Criativas", "Melhoria Constante"]
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em parceria com os nossos clientes para alcançar objetivos comuns.",
    color: "from-blue-500/20 to-cyan-600/20",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-cyan-600/30",
    features: ["Parcerias Sólidas", "Trabalho em Equipe", "Objetivos Compartilhados", "Suporte Mútuo"]
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometemo-nos com os mais altos padrões de qualidade em tudo o que fazemos.",
    color: "from-amber-500/20 to-orange-600/20",
    hoverColor: "group-hover:from-amber-500/30 group-hover:to-orange-600/30",
    features: ["Qualidade Superior", "Padrões Elevados", "Resultados Comprovados", "Reconhecimento Setorial"]
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Priorizamos práticas que protegem o meio ambiente para as gerações futuras.",
    color: "from-emerald-500/20 to-green-600/20",
    hoverColor: "group-hover:from-emerald-500/30 group-hover:to-green-600/30",
    features: ["Agricultura Regenerativa", "Preservação Ambiental", "Recursos Renováveis", "Legado Sustentável"]
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Investimos no desenvolvimento contínuo da nossa equipa e dos nossos clientes.",
    color: "from-indigo-500/20 to-blue-600/20",
    hoverColor: "group-hover:from-indigo-500/30 group-hover:to-blue-600/30",
    features: ["Desenvolvimento Contínuo", "Evolução Constante", "Expansão Sustentável", "Aprendizado Permanente"]
  },
  {
    icon: Shield,
    title: "Integridade",
    description: "Agimos com transparência, ética e responsabilidade em todas as nossas relações.",
    color: "from-slate-500/20 to-gray-600/20",
    hoverColor: "group-hover:from-slate-500/30 group-hover:to-gray-600/30",
    features: ["Transparência Total", "Ética Profissional", "Responsabilidade Social", "Confiança Mútua"]
  },
]

export function Values() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-amber-500/3 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <span className="text-sm font-medium text-red-600">Nossa Essência</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Os Nossos Valores
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Princípios fundamentais que orientam cada decisão e ação, construindo a base do nosso sucesso e relacionamento com clientes e parceiros
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 h-full hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} ${value.hoverColor} transition-all duration-500 opacity-50`} />
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-4">
                  {/* Icon Container */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:bg-background/90 transition-all duration-300 border border-border/50 shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <value.icon className="w-7 h-7 text-primary" />
                    
                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-2 h-2 bg-primary/60 rounded-full"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3 
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-1.5">
                      {value.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <Sparkles className="w-3 h-3 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-60"
                  whileInView={{ width: "48px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}