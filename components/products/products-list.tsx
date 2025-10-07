"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sprout, Droplets, Shield, Tractor, Leaf, Package, CheckCircle, ArrowRight, Star, X, Clock, Truck, ShieldCheck, Users, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const products = [
  {
    id: 1,
    icon: Sprout,
    category: "Sementes",
    title: "Sementes de Alta Performance",
    description: "Sementes geneticamente selecionadas para máxima produtividade e resistência às condições climáticas.",
    fullDescription: "Nossa linha premium de sementes é resultado de anos de pesquisa e desenvolvimento genético. Cada variedade é cuidadosamente selecionada para oferecer máximo rendimento, adaptabilidade climática e resistência a doenças. Ideal para produtores que buscam excelência em qualidade e produtividade.",
    image: "/high-quality-agricultural-seeds-close-up.jpg",
    features: [
      "Germinação superior a 95%",
      "Resistência a pragas e doenças",
      "Adaptadas ao clima local",
      "Certificação internacional"
    ],
    technicalSpecs: {
      "Variedades": "Soja, Milho, Trigo, Arroz",
      "Embalagem": "Sacos de 25kg e 50kg",
      "Pureza": "≥ 98%",
      "Umidade": "≤ 12%",
      "Plantio": "Ano todo com restrições regionais"
    },
    benefits: [
      "Aumento de 25-35% na produtividade",
      "Redução de custos com defensivos",
      "Melhor aproveitamento de nutrientes",
      "Colheita mais uniforme"
    ],
    badge: "Mais Vendido",
    badgeColor: "bg-amber-500 text-amber-950",
    rating: 4.9,
    reviews: 142,
    delivery: "24-48 horas",
    warranty: "12 meses",
    price: "R$ 185,90",
    unit: "por saco de 25kg"
  },
  {
    id: 2,
    icon: Droplets,
    category: "Fertilizantes",
    title: "Fertilizantes Especializados",
    description: "Nutrição balanceada com tecnologia de liberação controlada para cada fase do desenvolvimento.",
    fullDescription: "Fertilizantes de última geração com tecnologia de liberação controlada que garante nutrição constante e eficiente para suas culturas. Desenvolvido com formulações específicas para cada fase de crescimento, maximizando a absorção de nutrientes e minimizando perdas.",
    image: "/agricultural-fertilizer-granules-close-up.jpg",
    features: [
      "Fórmulas NPK personalizadas",
      "Liberação controlada e eficiente",
      "Micronutrientes essenciais",
      "Aumento de 30% na produção"
    ],
    technicalSpecs: {
      "Formulação": "NPK 10-20-20 + micronutrientes",
      "Apresentação": "Granulados e líquidos",
      "Embalagem": "Sacos de 25kg e Big Bags 1T",
      "Aplicação": "Plantio e cobertura",
      "Dosagem": "250-400kg/ha conforme análise"
    },
    benefits: [
      "Economia de 20% em aplicações",
      "Desenvolvimento radicular intenso",
      "Maior resistência a estresses",
      "Melhor qualidade dos grãos"
    ],
    badge: "Inovação",
    badgeColor: "bg-blue-500 text-white",
    rating: 4.8,
    reviews: 89,
    delivery: "48 horas",
    warranty: "18 meses",
    price: "R$ 89,90",
    unit: "por saco de 25kg"
  },
  {
    id: 3,
    icon: Shield,
    category: "Defensivos",
    title: "Defensivos Agrícolas",
    description: "Proteção eficaz com baixo impacto ambiental contra pragas, doenças e plantas daninhas.",
    fullDescription: "Linha completa de defensivos agrícolas desenvolvida com foco em eficiência e sustentabilidade. Produtos com baixo impacto ambiental, alta seletividade e residual controlado, garantindo proteção prolongada sem comprometer a qualidade do solo e do meio ambiente.",
    image: "/crop-protection-spray-bottles-professional.jpg",
    features: [
      "Baixa toxicidade e residual",
      "Ação prolongada e seletiva",
      "Biodegradável",
      "Registro no MAPA"
    ],
    technicalSpecs: {
      "Classe": "Herbicidas, Fungicidas, Inseticidas",
      "Formulação": "Concentrado emulsionável",
      "Embalagem": "1L, 5L e 20L",
      "Diluição": "200-400mL/ha",
      "Carência": "15-30 dias conforme cultura"
    },
    benefits: [
      "Proteção prolongada até 45 dias",
      "Compatível com manejo integrado",
      "Redução de aplicações",
      "Preserva inimigos naturais"
    ],
    badge: null,
    badgeColor: "",
    rating: 4.7,
    reviews: 67,
    delivery: "24 horas",
    warranty: "24 meses",
    price: "R$ 145,50",
    unit: "por litro"
  },
  {
    id: 4,
    icon: Tractor,
    category: "Equipamentos",
    title: "Equipamentos Modernos",
    description: "Maquinário de última geração com tecnologia embarcada para máxima eficiência operacional.",
    fullDescription: "Soluções completas em maquinário agrícola com tecnologia de ponta. Desde implementos básicos até sistemas de agricultura de precisão, oferecemos equipamentos que aumentam a produtividade, reduzem custos operacionais e garantem precisão nas operações de campo.",
    image: "/modern-agricultural-machinery-equipment.jpg",
    features: [
      "Tecnologia GPS e telemetria",
      "Economia de 25% em combustível",
      "Manutenção preditiva",
      "Garantia de 36 meses"
    ],
    technicalSpecs: {
      "Linha": "Tratores, Colheitadeiras, Plantadeiras",
      "Potência": "80-250HP",
      "Tecnologia": "GPS, Auto-steer, Telemetria",
      "Assistência": "Nacional 24/7",
      "Financiamento": "Até 60 meses"
    },
    benefits: [
      "Operação 30% mais rápida",
      "Precisão milimétrica",
      "Dados em tempo real",
      "Valorização do patrimônio"
    ],
    badge: "Tecnologia",
    badgeColor: "bg-purple-500 text-white",
    rating: 4.9,
    reviews: 203,
    delivery: "Sob consulta",
    warranty: "36 meses",
    price: "Consulte",
    unit: "preço"
  },
  {
    id: 5,
    icon: Leaf,
    category: "Orgânicos",
    title: "Linha Orgânica Premium",
    description: "Produtos 100% naturais certificados para agricultura orgânica e sustentável.",
    fullDescription: "Solução completa para agricultura orgânica com produtos certificados que atendem aos mais rigorosos padrões internacionais. Desenvolvida para produtores que buscam diferenciação de mercado, valor agregado e produção sustentável sem comprometer a produtividade.",
    image: "/organic-agricultural-products-natural.jpg",
    features: [
      "Certificação orgânica internacional",
      "Zero resíduos químicos",
      "Biodegradável e sustentável",
      "Aumento da biodiversidade"
    ],
    technicalSpecs: {
      "Certificação": "IBD, USDA Organic, EU Bio",
      "Composição": "100% ingredientes naturais",
      "Aplicação": "Foliar e solo",
      "Frequência": "15-30 dias conforme necessidade",
      "Compatibilidade": "Mistura com outros orgânicos"
    },
    benefits: [
      "Valor agregado de 40-60%",
      "Acesso a mercados premium",
      "Melhoria contínua do solo",
      "Isenção de carência"
    ],
    badge: "Eco-Friendly",
    badgeColor: "bg-emerald-500 text-white",
    rating: 4.8,
    reviews: 94,
    delivery: "72 horas",
    warranty: "12 meses",
    price: "R$ 128,90",
    unit: "por kit inicial"
  },
  {
    id: 6,
    icon: Package,
    category: "Insumos",
    title: "Insumos Especiais",
    description: "Complementos essenciais para otimizar o manejo e produtividade da propriedade rural.",
    fullDescription: "Linha completa de insumos especiais desenvolvida para complementar e potencializar os resultados dos principais produtos agrícolas. Desde adjuvantes que melhoram a aplicação até condicionadores de solo que preparam o terreno para máxima produtividade.",
    image: "/agricultural-supplies-and-inputs.jpg",
    features: [
      "Adjuvantes de alta performance",
      "Condicionadores de solo",
      "Inoculantes específicos",
      "Corretivos agrícolas"
    ],
    technicalSpecs: {
      "Categorias": "Adjuvantes, Inoculantes, Corretivos",
      "Apresentação": "Líquido, Pó, Grânulos",
      "Embalagem": "1L, 5L, 25kg",
      "Aplicação": "Tratamento de sementes, solo",
      "Compatibilidade": "Testada com principais marcas"
    },
    benefits: [
      "Aumento de eficiência em 35%",
      "Redução de perdas na aplicação",
      "Melhor desenvolvimento inicial",
      "Otimização de recursos"
    ],
    badge: null,
    badgeColor: "",
    rating: 4.6,
    reviews: 56,
    delivery: "48 horas",
    warranty: "12 meses",
    price: "R$ 45,90",
    unit: "por unidade"
  },
]

interface ProductModalProps {
  product: typeof products[0] | null
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
            className="relative bg-card rounded-2xl border border-border shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
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
              <div className="relative h-96 lg:h-full min-h-[500px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                />
                
                {/* Badges and Info */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badge && (
                    <Badge className={`${product.badgeColor} backdrop-blur-sm border-0 font-semibold`}>
                      {product.badge}
                    </Badge>
                  )}
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
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wide">
                    <product.icon className="w-4 h-4" />
                    {product.category}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-secondary/30 rounded-xl">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Truck className="w-4 h-4" />
                      <span>Entrega</span>
                    </div>
                    <p className="font-semibold text-foreground">{product.delivery}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Garantia</span>
                    </div>
                    <p className="font-semibold text-foreground">{product.warranty}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Avaliações</span>
                    </div>
                    <p className="font-semibold text-foreground">{product.reviews}+</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4" />
                      <span>Disponível</span>
                    </div>
                    <p className="font-semibold text-green-600">Em Estoque</p>
                  </div>
                </div>

                {/* Price Section */}
                <div className="bg-primary/5 rounded-xl p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Preço especial para grandes quantidades</p>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Especificações Técnicas</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-sm text-muted-foreground font-medium">{key}</span>
                        <span className="text-sm font-medium text-foreground text-right">{value}</span>
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
                  <h3 className="text-lg font-semibold text-foreground">Benefícios Comprovados</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ProductsList() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
            >
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nossos Produtos</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Linha Completa de Produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Soluções integradas e tecnológicas para todas as etapas da sua produção agrícola
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Card className="h-full pt-0 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                    {/* Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-60 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-500" />
                    
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Badge */}
                      <div className="absolute top-4 left-4">
                        {product.badge && (
                          <Badge className={`${product.badgeColor} backdrop-blur-sm border-0 font-semibold`}>
                            {product.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 border border-border/50">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-bold">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                      </div>

                      {/* Category Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <CardHeader className="relative space-y-3">
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                          {product.category}
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground leading-tight">
                          {product.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative space-y-4">
                      {/* Features */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>Vantagens Principais</span>
                        </div>
                        <ul className="space-y-2">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <motion.li 
                              key={idx}
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

                      {/* Price Preview */}
                      <div className="pt-2 border-t border-border/50">
                        <div className="flex items-baseline justify-between">
                          <span className="text-lg font-bold text-foreground">{product.price}</span>
                          <span className="text-xs text-muted-foreground">{product.unit}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between group/btn bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 hover:border-primary/30 transition-all duration-300 mt-2"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProduct(product)
                        }}
                      >
                        <span className="text-sm font-medium">Ver Detalhes Completos</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-background/50 backdrop-blur-md rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
              <div className="text-left space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Precisa de ajuda para escolher?
                </h3>
                <p className="text-muted-foreground">
                  Nossos especialistas podem recomendar os produtos ideais para sua propriedade
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <a href="/consultoria">
                  Falar com Especialista
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
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