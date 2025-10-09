"use client"

import { Sprout, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Sprout,
    title: "Sustentabilidade",
    description: "Práticas agrícolas que respeitam o meio ambiente e garantem a produtividade a longo prazo.",
    image: "/organic-agricultural-products-natural.jpg",
    color: "from-green-500/20 to-emerald-600/20",
    hoverColor: "group-hover:from-green-500/30 group-hover:to-emerald-600/30",
    buttonText: "Explorar Sustentabilidade",
    link: "/sustentabilidade"
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description: "Soluções que impulsionam o crescimento e a rentabilidade do seu negócio agrícola.",
    image: "/high-quality-agricultural-seeds-close-up.jpg",
    color: "from-blue-500/20 to-cyan-600/20",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-cyan-600/30",
    buttonText: "Impulsionar Negócio",
    link: "/crescimento"
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Parceria sólida com suporte técnico especializado e produtos de qualidade comprovada.",
    image: "/premium-agricultural-seeds-in-professional-packagi.jpg",
    color: "from-amber-500/20 to-orange-600/20",
    hoverColor: "group-hover:from-amber-500/30 group-hover:to-orange-600/30",
    buttonText: "Conhecer Garantias",
    link: "/confiabilidade"
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Tecnologia de ponta aplicada ao campo para maximizar resultados e eficiência.",
    image: "/modern-agricultural-technology-with-drones-and-sen.jpg",
    color: "from-purple-500/20 to-violet-600/20",
    hoverColor: "group-hover:from-purple-500/30 group-hover:to-violet-600/30",
    buttonText: "Ver Inovações",
    link: "/inovacao"
  },
]

interface FeatureCardProps {
  feature: typeof features[0]
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 h-full overflow-hidden hover:shadow-2xl hover:shadow-primary/5">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} ${feature.hoverColor} transition-all duration-500 opacity-60`} />
        
        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative h-48 overflow-hidden">
          <Image
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-background/10" />
          
          {/* Icon with Enhanced Design */}
          <div className="absolute top-4 left-4">
            <motion.div 
              className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur-md flex items-center justify-center border border-border/50 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <feature.icon className="w-6 h-6 text-primary" />
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
          />
        </div>

        <div className="relative p-6 space-y-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section className="py-20 flex justify-center lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-100 backdrop-blur-sm mb-6"
          >
            <Sprout className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">Nossos Diferenciais</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Por Que Escolher a CampoForte?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Comprometidos com a excelência e inovação no setor agrícola, oferecendo soluções 
            completas para o seu crescimento sustentável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}