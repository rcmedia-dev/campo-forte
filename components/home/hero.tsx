"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const agriculturalProducts = [
  {
    id: 1,
    name: "Trator Moderno 4x4",
    description: "Trator de última geração com tecnologia de precisão e economia de combustível para maximizar sua produtividade no campo.",
    image: "/hero/trator-4x4.jpg",
    category: "Maquinário",
    features: ["GPS Integrado", "4x4", "Econômico", "Alta Performance"]
  },
  {
    id: 2,
    name: "Sistema de Irrigação Inteligente",
    description: "Tecnologia avançada de irrigação que reduz o consumo de água em até 40% enquanto aumenta a produtividade.",
    image: "/hero/tecnologia-irrigacao.jpg",
    category: "Irrigação",
    features: ["Automatizado", "Econômico", "Sustentável", "IoT"]
  },
  {
    id: 3,
    name: "Fertilizante Orgânico Premium",
    description: "Fertilizante 100% natural que aumenta a produtividade em 25% sem agredir o solo ou o meio ambiente.",
    image: "/hero/fertilizante.jpg",
    category: "Insumos",
    features: ["100% Natural", "Alta Produtividade", "Ecológico", "Certificado"]
  },
  {
    id: 4,
    name: "Colheitadeira de Precisão",
    description: "Colheitadeira com sensores IoT que garantem máxima eficiência e precisão na colheita de grãos.",
    image: "/hero/colheitedeira.jpg",
    category: "Maquinário",
    features: ["Sensores IoT", "Alta Capacidade", "Precisão", "Automática"]
  },
  {
    id: 5,
    name: "Sementes Geneticamente Melhoradas",
    description: "Sementes de alta qualidade com resistência a pragas e adaptabilidade a diferentes climas.",
    image: "/hero/sementes.png",
    category: "Sementes",
    features: ["Alta Germinação", "Resistente", "Produtiva", "Certificada"]
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % agriculturalProducts.length)
    setImageLoaded(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + agriculturalProducts.length) % agriculturalProducts.length)
    setImageLoaded(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setImageLoaded(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  const currentProduct = agriculturalProducts[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-800/10">
      
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              className="object-cover"
              priority
              onLoad={() => setImageLoaded(true)}
              quality={85}
            />

            {/* 🔆 Overlays suavizadas para deixar a imagem mais visível */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-background/25" />
            <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-emerald-400/5" />

            {/* Animated Light Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-400/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400/40 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 z-20 p-3 rounded-full bg-background/10 backdrop-blur-md border border-primary/30 hover:bg-background/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 z-20 p-3 rounded-full bg-background/10 backdrop-blur-md border border-primary/30 hover:bg-background/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
      </motion.button>

    
      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-lg"
            >
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{currentProduct.category}</span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight drop-shadow-lg"
            >
              {currentProduct.name}{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Premium
              </motion.span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
              {currentProduct.description}
            </motion.p>
          </AnimatePresence>

          {/* Features */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`features-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {currentProduct.features.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-background/20 backdrop-blur-md border border-primary/20 text-sm text-foreground font-medium shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`buttons-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg">
                <Link href={`/produtos/${currentProduct.id}`}>
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="backdrop-blur-md border-primary/30 hover:bg-primary/10">
                <Link href="/produtos">Ver Catálogo Completo</Link>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-3">
          {agriculturalProducts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary shadow-lg"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              } h-2`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 backdrop-blur-md bg-background/10"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}