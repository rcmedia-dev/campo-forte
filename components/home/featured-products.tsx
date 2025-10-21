"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, CheckCircle, Truck, Shield, X, Calendar, Zap, Droplets, Sprout } from "lucide-react"
import { useState } from "react"

const featuredProducts = [
  {
    id: 1,
    title: "Sementes Premium Soja MAX",
    description: "Genética avançada com alta produtividade e resistência para maximizar seus resultados no campo.",
    image: "/premium-agricultural-seeds-in-professional-packagi.jpg",
    category: "Sementes",
    variety: "Soja Intacta RR2 PRO",
    cycle: "Ciclo: 115-125 dias",
    productivity: "Potencial: 85-95 sc/ha",
    resistance: ["Ferrugem Asiática", "Cigarrinha", "Secamento Precoce"],
    features: ["Tratamento Industrial", "Alto Vigor", "Uniformidade 98%", "Germinação >95%"],
    rating: 4.8,
    reviews: 127,
    technicalSpecs: {
      plantPopulation: "240-280 mil plantas/ha",
      maturation: "Grupo 6.5",
      plantingDepth: "3-5 cm",
      spacing: "45-50 cm entre linhas"
    },
    benefits: [
      "Maior tolerância a estresses climáticos",
      "Melhor enchimento de grãos",
      "Arquitetura moderna de planta",
      "Facilidade de colheita"
    ]
  },
  {
    id: 2,
    title: "Fertilizante NutriFort Plus",
    description: "Formulação balanceada com micronutrientes essenciais para desenvolvimento radicular e vegetativo.",
    image: "/modern-agricultural-fertilizer-bags-in-warehouse.jpg",
    category: "Fertilizantes",
    variety: "NPK 10-20-20 + Zn + B",
    cycle: "Aplicação: Plantio e Cobertura",
    productivity: "Incremento: +25% produtividade",
    resistance: ["Estresse Hídrico", "Solo Ácido", "Baixa Fertilidade"],
    features: ["Liberação Gradual", "Baixa Volatilização", "Alta Solubilidade", "Sem Cloreto"],
    rating: 4.9,
    reviews: 89,
    technicalSpecs: {
      composition: "N 10%, P₂O₅ 20%, K₂O 20%",
      micronutrients: "Zn 1%, B 0.5%",
      dosage: "250-400 kg/ha",
      application: "Plantio e 30 DAE"
    },
    benefits: [
      "Desenvolvimento radicular intenso",
      "Maior aproveitamento nutricional",
      "Redução de perdas por lixiviação",
      "Compatível com defensivos"
    ]
  },
  {
    id: 3,
    title: "Trator AgroForce 4x4",
    description: "Tecnologia de precisão e máxima eficiência energética para operações pesadas.",
    image: "/modern-agricultural-tractor-in-green-field.jpg",
    category: "Equipamentos",
    variety: "Modelo 1204 - 120HP",
    cycle: "Operação: 2.000h/ano",
    productivity: "Economia: 15% combustível",
    resistance: ["Transmissão Reforçada", "Suspensão Premium", "Corrosão"],
    features: ["GPS Integrado", "Controle Eletrônico", "Cabine Comfort", "Ar Condicionado"],
    rating: 4.7,
    reviews: 203,
    technicalSpecs: {
      engine: "Turbo Diesel 6.8L",
      transmission: "16 Marchas + RE",
      hydraulic: "Sistema 110L/min",
      fuelCapacity: "210 litros"
    },
    benefits: [
      "Menor custo operacional por hectare",
      "Conforto para longas jornadas",
      "Precisão nas operações",
      "Baixa manutenção"
    ]
  }
]

interface ProductCardProps {
  product: typeof featuredProducts[0]
  index: number
  onProductClick: (product: typeof featuredProducts[0]) => void
}

function ProductCard({ product, index, onProductClick }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-60 group-hover:from-primary/10 group-hover:to-secondary/20 transition-all duration-500" />
      
      <div className="relative h-72 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium text-primary">
            {product.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 border border-border">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
      </div>

      <div className="relative p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">{product.variety}</span>
            <span className="text-muted-foreground">{product.cycle}</span>
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">Produtividade</span>
              <span className="text-sm font-bold text-primary">{product.productivity}</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2">
          {product.features.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
              <span className="text-xs text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-primary hover:bg-primary/90 group/btn"
          onClick={(e) => {
            e.stopPropagation()
            onProductClick(product)
          }}
        >
          Ver Detalhes Completos
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  )
}

interface ProductModalProps {
  product: typeof featuredProducts[0] | null
  isOpen: boolean
  onClose: () => void
}

function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-card rounded-2xl border border-border shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative h-80 lg:h-full min-h-[400px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-sm font-medium text-primary">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/30 rounded-xl">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Variedade</span>
                    </div>
                    <p className="font-semibold text-foreground">{product.variety}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4" />
                      <span>Produtividade</span>
                    </div>
                    <p className="font-semibold text-primary">{product.productivity}</p>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Especificações Técnicas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <p className="text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-sm font-medium text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Características Principais</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Benefícios</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sprout className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-4 text-sm">
                   
                  </div>
                  
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null)

  return (
    <>
      <section className="py-20 lg:py-28 bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-100 backdrop-blur-sm mb-6"
            >
              <Star className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-600">Produtos & Serviços em Destaque</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Produtos & Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Clique em qualquer produto para ver informações técnicas completas e especificações detalhadas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
                onProductClick={setSelectedProduct}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg group">
              <a href="/produtos" className="gap-2">
                Explorar Catálogo Completo
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              +150 produtos disponíveis com suporte técnico especializado
            </p>
          </motion.div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}