"use client"

import { Leaf, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const agriculturalProducts = [
  {
    id: 1,
    name: "Sistema de Irrigação Inteligente",
    description: "Tecnologia avançada de irrigação que reduz o consumo de água em até 40% enquanto aumenta a produtividade.",
    image: "/hero/PEGASUS.png",
    category: "Irrigação",
    features: ["Automatizado", "Econômico", "Sustentável", "IoT"]
  },
  {
    id: 2,
    name: "Fertilizante Orgânico Premium",
    description: "Fertilizante 100% natural que aumenta a produtividade em 25% sem agredir o solo ou o meio ambiente.",
    image: "/hero/RAMBO NOVO.png",
    category: "Insumos",
    features: ["100% Natural", "Alta Produtividade", "Ecológico", "Certificado"]
  },
  {
    id: 3,
    name: "Fertilizante Orgânico Premium",
    description: "Fertilizante 100% natural que aumenta a produtividade em 25% sem agredir o solo ou o meio ambiente.",
    image: "/hero/PLANTAR NOVO.jpg",
    category: "Insumos",
    features: ["100% Natural", "Alta Produtividade", "Ecológico", "Certificado"]
  },
  {
    id: 4,
    name: "Fertilizante Orgânico Premium",
    description: "Fertilizante 100% natural que aumenta a produtividade em 25% sem agredir o solo ou o meio ambiente.",
    image: "/hero/TETRA-MICINA NOVO BANNER.jpg",
    category: "Insumos",
    features: ["100% Natural", "Alta Produtividade", "Ecológico", "Certificado"]
  },
  {
    id: 5,
    name: "Fertilizante Orgânico Premium",
    description: "Fertilizante 100% natural que aumenta a produtividade em 25% sem agredir o solo ou o meio ambiente.",
    image: "/hero/SEMENTES.jpg",
    category: "Insumos",
    features: ["100% Natural", "Alta Produtividade", "Ecológico", "Certificado"]
  },
]

interface HeroProps {
  currentSlide: number
  onNextSlide: () => void
  onPrevSlide: () => void
  onGoToSlide: (index: number) => void
}

export default function Hero({ currentSlide, onNextSlide, onPrevSlide, onGoToSlide }: HeroProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const currentProduct = agriculturalProducts[currentSlide]

  return (
    <section className="relative bg-white min-h-[400px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden -z-10">
      
      {/* Background Image with Smart Object Fit Switching */}
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
            {/* Container inteligente que inverte o comportamento */}
            <div className={`relative w-full h-full bg-white ${
              isMobile 
                ? "flex items-center justify-center bg-white" 
                : ""
            }`}>
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className={`${
                  isMobile 
                    ? "object-contain scale-105" // Contain no mobile com zoom sutil
                    : "object-contain" // Cover no desktop
                }`}
                priority
                onLoad={() => setImageLoaded(true)}
                quality={85}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Elements - Otimizados para mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute ${
            isMobile 
              ? "top-1/6 left-1/6" 
              : "top-1/4 left-1/4"
          } w-2 h-2 bg-primary/30 rounded-full`}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className={`absolute ${
            isMobile 
              ? "top-1/4 right-1/4" 
              : "top-1/3 right-1/3"
          } w-1 h-1 bg-emerald-400/40 rounded-full`}
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className={`absolute ${
            isMobile 
              ? "bottom-1/6 left-1/4" 
              : "bottom-1/4 left-1/3"
          } w-1.5 h-1.5 bg-primary/20 rounded-full`}
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Slide Indicators */}
      <div className={`absolute ${
        isMobile ? "bottom-32" : "bottom-24"
      } left-1/2 -translate-x-1/2 z-20`}>
        <div className="flex items-center gap-3">
          {agriculturalProducts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`relative rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white shadow-lg"
                  : "w-2 bg-white/30 hover:bg-white/50"
              } h-2`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full bg-white"
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
        className={`absolute ${
          isMobile ? "bottom-16" : "bottom-8"
        } left-1/2 -translate-x-1/2 z-20`}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 backdrop-blur-md bg-background/10"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}