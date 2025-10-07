"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-emerald-50/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/10" />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl py-[20%] sm:py-[8%] mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-background/60 backdrop-blur-md border border-primary/30 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold text-primary">Fale Connosco</span>
            <div className="w-1 h-1 bg-primary/40 rounded-full" />
            <span className="text-sm text-muted-foreground">Suporte Personalizado</span>
          </motion.div>

          {/* Main Title */}
          <motion.div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight"
            >
              Vamos{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary via-primary to-emerald-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Conversar
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "180px" }}
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
            Estamos aqui para ajudar. Entre em contacto connosco e descubra como podemos 
            <span className="font-semibold text-primary"> impulsionar o seu negócio</span> agrícola 
            com soluções personalizadas.
          </motion.p>

          {/* Contact Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto pt-8"
          >
            {[
              { icon: Phone, value: "24/7", label: "Suporte" },
              { icon: Mail, value: "4h", label: "Resposta" },
              { icon: MapPin, value: "Nacional", label: "Cobertura" },
              { icon: MessageCircle, value: "Grátis", label: "Consulta" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">{item.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

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
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Enviar Mensagem
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-background/60 backdrop-blur-md border border-border rounded-xl font-semibold hover:bg-background/80 transition-all duration-300"
            >
              Agendar Chamada
            </motion.button>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+351 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>contato@campoforte.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Lisboa, Portugal</span>
            </div>
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
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm text-muted-foreground font-medium">Entre em Contacto</span>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1.5 backdrop-blur-md bg-background/40">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}