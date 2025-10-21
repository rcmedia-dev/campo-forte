"use client"

import { Sprout, Droplets, BarChart3, Cpu, Tractor, Package, CheckCircle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Sprout,
    title: "Consultoria Agrícola",
    description: "Análise detalhada do solo, planeamento de culturas e estratégias personalizadas para otimizar a produção.",
    image: "/high-quality-agricultural-seeds-close-up.jpg",
    features: ["Análise de solo", "Planeamento de culturas", "Gestão de nutrientes", "Rotação de culturas"],
    stats: "Aumento de 35% na produtividade"
  },
  {
    icon: Droplets,
    title: "Sistemas de Irrigação",
    description: "Soluções inteligentes de irrigação que economizam água e garantem a hidratação ideal das culturas.",
    image: "/modern-agricultural-technology-with-drones-and-sen.jpg",
    features: ["Irrigação por gotejamento", "Sistemas automatizados", "Monitorização remota", "Eficiência hídrica"],
    stats: "Economia de 40% em água"
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Plataforma digital para monitorização em tempo real e análise preditiva da sua operação agrícola.",
    image: "/modern-agricultural-machinery-equipment.jpg",
    features: ["Dashboard interativo", "Relatórios personalizados", "Previsão de colheitas", "Alertas inteligentes"],
    stats: "Decisões baseadas em dados"
  },
  {
    icon: Cpu,
    title: "Agricultura de Precisão",
    description: "Tecnologia de ponta para otimizar cada metro quadrado da sua propriedade com sensores e drones.",
    image: "/modern-agricultural-tractor-in-green-field.jpg",
    features: ["Mapeamento por drone", "Sensores IoT", "GPS agrícola", "Aplicação variável"],
    stats: "Otimização de recursos"
  },
  {
    icon: Tractor,
    title: "Gestão de Equipamentos",
    description: "Manutenção preventiva e otimização do uso de maquinaria agrícola para reduzir custos operacionais.",
    image: "/modern-agricultural-machinery-equipment.jpg",
    features: ["Manutenção programada", "Rastreamento de frota", "Análise de desempenho", "Gestão de combustível"],
    stats: "Redução de 25% em custos"
  },
  {
    icon: Package,
    title: "Produtos Agrícolas",
    description: "Fornecimento de insumos de alta qualidade: sementes, fertilizantes, defensivos e equipamentos.",
    image: "/agricultural-supplies-and-inputs.jpg",
    features: ["Sementes certificadas", "Fertilizantes orgânicos", "Defensivos biológicos", "Equipamentos modernos"],
    stats: "Qualidade garantida"
  },
]

export function ServicesList() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
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
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
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
        {/* <motion.div
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Serviços Especializados</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Soluções Completas
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Desenvolvemos serviços integrados que transformam desafios agrícolas em oportunidades de crescimento sustentável
          </p>
        </motion.div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group cursor-pointer"
            >
              <Card className="h-full pt-0 group hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden border-border/60 bg-card backdrop-blur-sm relative">
                {/* Single Color Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-60 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-500" />
                
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Minimal Overlay for Text Readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Icon Container */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-md flex items-center justify-center border border-border/50 shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {service.stats}
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="relative space-y-3 pb-3">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4 pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Benefícios Incluídos</span>
                    </div>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={feature}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                          className="flex items-start gap-3 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 leading-tight">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Indicator */}
                  <motion.div 
                    className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </CardContent>

                {/* Enhanced Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Todos os serviços incluem suporte técnico especializado</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}