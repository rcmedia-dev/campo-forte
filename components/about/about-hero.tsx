"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Leaf, TrendingUp, Users, Award } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero/boiada-campo-forte.png"
            alt="Agricultura CampoForte"
            fill
            className="object-cover"
            priority
          />
          Enhanced Gradient Overlays
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/15 via-transparent to-emerald-500/10" />
          
          {/* Animated Light Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-400/15"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400/50 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-2/3 w-2.5 h-2.5 bg-primary/30 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Background Pattern - More Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-[20%] sm:py-[8%] text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-background/20 backdrop-blur-md border border-primary/30 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-base font-semibold text-primary">Sobre a CampoForte</span>
            </div>
            <div className="w-1 h-1 bg-primary/40 rounded-full" />
            <span className="text-sm text-muted-foreground">Desde 2022</span>
          </motion.div>

          {/* Main Title */}
          <motion.div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight"
            >
              Cultivando o{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary via-primary to-emerald-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Futuro
              </motion.span>{" "}
              da Agricultura & Pecuária
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "200px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-primary to-emerald-500 rounded-full mx-auto"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-foreground/90 text-pretty max-w-4xl mx-auto leading-relaxed font-light"
          >
            A <span className="font-semibold text-primary">Campo Forte</span> aposta em
            soluções inovadoras para o setor agropecuário, combinando tradição com tecnologia de ponta para criar 
            um futuro sustentável e produtivo.
          </motion.p>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8"
          >
            {[
              { icon: Users, value: "500+", label: "Clientes Ativos" },
              { icon: Award, value: "25+", label: "Anos de Experiência" },
              { icon: TrendingUp, value: "98%", label: "Satisfação" },
              { icon: Leaf, value: "50K+", label: "Hectares Atendidos" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-background/10 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-background/80 backdrop-blur-md border border-border rounded-xl font-semibold hover:bg-background/90 transition-all duration-300"
            >
              Fale Conosco
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-7 h-12 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 backdrop-blur-md bg-background/10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}