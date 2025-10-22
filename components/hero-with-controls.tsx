"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Hero from "./home/hero"

export function HeroWithControls() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % agriculturalProducts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + agriculturalProducts.length) % agriculturalProducts.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <div className="relative">
      {/* Hero com z-index negativo */}
      <Hero 
        currentSlide={currentSlide}
        onNextSlide={nextSlide}
        onPrevSlide={prevSlide}
        onGoToSlide={goToSlide}
      />
      
      {/* Botões fora da Hero com z-index alto */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[9999] p-3 rounded-full bg-background/10 backdrop-blur-md border border-white/30 hover:bg-background/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:text-white/80 transition-colors" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[9999] p-3 rounded-full bg-background/10 backdrop-blur-md border border-white/30 hover:bg-background/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:text-white/80 transition-colors" />
      </motion.button>
    </div>
  )
}

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