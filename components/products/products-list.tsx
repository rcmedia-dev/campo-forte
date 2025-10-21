"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sprout, Droplets, Shield, Tractor, Leaf, Package, CheckCircle, ArrowRight, Star, X, Clock, Truck, ShieldCheck, Users, Zap, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { gql } from "@apollo/client"
import { client } from "@/lib/apollo"
import { useQuery } from "@apollo/client/react"

export const GET_PRODUTOS = gql`
  query {
    produtos {
      nomeDoProduto
      slugDoProduto
      resumoDoProduto
      caracteristicasDoProduto
      descricaoCompletaDoProduto {
        raw
      }
      especificacoesTecnicas
      beneficiosDoProduto
      tempoDeEntrega
      tempoDeGarantia
      precoDoProduto
      quantidadeMinimaAEncomendar
      imagemDoProduto {
        url
        fileName
      }
      categoriaDoProduto
      createdAt
    }
  }
`

// Mapeamento de ícones para categorias
const categoryIcons: { [key: string]: any } = {
  "Sementes": Sprout,
  "Fertilizantes": Droplets,
  "Defensivos": Shield,
  "Equipamentos": Tractor,
  "Orgânicos": Leaf,
  "Insumos": Package,
  "medicamentos": Heart
}

// Lista de categorias disponíveis
const CATEGORIAS = [
  { id: "todos", nome: "Todos os Produtos", icon: Package },
  { id: "medicamentosVeterinarios", nome: "Medicamentos", icon: Heart },
  { id: "Sementes", nome: "Sementes", icon: Sprout },
  { id: "produtosAgropecuarios", nome: "Produtos Agropecuários", icon: Droplets },
]

const extractTextFromRichText = (richText: any): string => {
  if (!richText?.raw) return "Descrição completa não disponível"

  try {
    // Verifica se já é um objeto
    const parsed = typeof richText.raw === 'string'
      ? JSON.parse(richText.raw)
      : richText.raw

    const paragraphs = parsed.children || []

    const fullText = paragraphs.map((p: any) => {
      const texts = p.children?.map((child: any) => child.text).filter(Boolean) || []
      return texts.join("")
    })

    return fullText.join("\n\n") || "Descrição completa não disponível"
  } catch (err) {
    console.error("Erro ao processar richText:", err)
    return "Descrição completa não disponível"
  }
}


// Função para formatar o preço em Kwanza
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA'
  }).format(price)
}


// Função para processar especificações técnicas
const processTechnicalSpecs = (specs: any[]): { [key: string]: string } => {
  if (!specs || !Array.isArray(specs)) return {}
  
  const technicalSpecs: { [key: string]: string } = {}
  
  specs.forEach(spec => {
    if (typeof spec === 'string' && spec.includes(':')) {
      const [key, ...valueParts] = spec.split(':')
      technicalSpecs[key.trim()] = valueParts.join(':').trim()
    } else {
      technicalSpecs[`Especificação ${Object.keys(technicalSpecs).length + 1}`] = String(spec)
    }
  })
  
  return technicalSpecs
}

// Função para mapear dados da API para o formato do componente
const mapProductFromAPI = (produto: any, index: number) => {
  const Icon = categoryIcons[produto.categoriaDoProduto] || Package
  
  // Processar características (já é um array)
  const features = Array.isArray(produto.caracteristicasDoProduto) 
    ? produto.caracteristicasDoProduto 
    : []

  // Processar especificações técnicas
  const technicalSpecs = processTechnicalSpecs(produto.especificacoesTecnicas)

  // Processar benefícios (já é um array)
  const benefits = Array.isArray(produto.beneficiosDoProduto)
    ? produto.beneficiosDoProduto
    : []

  // Determinar badge baseado na categoria
  const getBadgeInfo = (categoria: string) => {
    const badges: { [key: string]: { text: string; color: string } } = {
      "Sementes": { text: "Sementes", color: "bg-amber-500 text-amber-950" },
      "Produtos Agropecuários": { text: "Produtos Agropecuários", color: "bg-blue-500 text-white" },
      "medicamentosVeterinarios": { text: "Medicamentos", color: "bg-red-500 text-white" }
    }
    return badges[categoria] || { text: null, color: "" }
  }

  const badgeInfo = getBadgeInfo(produto.categoriaDoProduto)

  // Gerar rating e reviews placeholder baseado no índice
  const rating = 4.5 + (index * 0.1) > 4.9 ? 4.9 : 4.5 + (index * 0.1)
  const reviews = 30 + (index * 15)

  return {
    id: produto.slugDoProduto || `produto-${index}`,
    icon: Icon,
    category: formatCategoryName(produto.categoriaDoProduto),
    originalCategory: produto.categoriaDoProduto,
    title: produto.nomeDoProduto || "Produto Sem Nome",
    description: produto.resumoDoProduto || "Descrição não disponível",
    fullDescription: extractTextFromRichText(produto.descricaoCompletaDoProduto),
    image: produto.imagemDoProduto?.url || "/placeholder-product.jpg",
    features: features.slice(0, 4),
    technicalSpecs,
    benefits: benefits.slice(0, 4),
    badge: badgeInfo.text,
    badgeColor: badgeInfo.color,
    rating: parseFloat(rating.toFixed(1)),
    reviews,
    delivery: produto.tempoDeEntrega || "Sob consulta",
    warranty: produto.tempoDeGarantia || "12 meses",
    price: produto.precoDoProduto ? formatPrice(produto.precoDoProduto) : "Consulte",
    unit: produto.quantidadeMinimaAEncomendar ? `mín. ${produto.quantidadeMinimaAEncomendar} unidade${produto.quantidadeMinimaAEncomendar > 1 ? 's' : ''}` : "por unidade",
    rawData: produto
  }
}

// Função para formatar o nome da categoria
const formatCategoryName = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    "medicamentosVeterinarios": "Medicamentos Veterinários",
    "Sementes": "Sementes",
    "produtosAgropecuarios": "Produtos Agropecuários",
  }
  
  return categoryMap[category] || category
}

interface ProductModalProps {
  product: any | null
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
                  {/* <div className="flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wide">
                    <product.icon className="w-4 h-4" />
                    {product.category}
                  </div> */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Quick Info Grid */}
                {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-secondary/30 rounded-xl">
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
                </div> */}

                {/* Price Section */}
                {/* <div className="bg-primary/5 rounded-xl p-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Preço especial para grandes quantidades</p>
                </div> */}

                {/* Technical Specifications */}
                {Object.keys(product.technicalSpecs).length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Especificações Técnicas</h3>
                    <div className="flex flex-col gap-4">
                      {Object.entries(product.technicalSpecs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground font-medium">{key}</span>
                          <span className="text-sm font-medium text-foreground text-right">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {product.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Características Principais</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits */}
                {product.benefits.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Benefícios Comprovados</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface Produto {
  nomeDoProduto: string
  slugDoProduto: string
  resumoDoProduto: string
  caracteristicasDoProduto: string[]
  descricaoCompletaDoProduto: {
    raw: string
  }
  especificacoesTecnicas: string[]
  beneficiosDoProduto: string[]
  tempoDeEntrega: string
  tempoDeGarantia: string
  precoDoProduto: number
  quantidadeMinimaAEncomendar: number
  imagemDoProduto: {
    url: string
    fileName: string
  }
  categoriaDoProduto: string
  createdAt: string
}

interface GetProdutosData {
  produtos: Produto[]
}

export function ProductsList() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("todos")
  
  const { data, loading, error } = useQuery<GetProdutosData>(GET_PRODUTOS, {
    client,
    fetchPolicy: "cache-and-network"
  })

  // Função para filtrar produtos por categoria
  const getProdutosFiltrados = () => {
    const produtos = data?.produtos?.map(mapProductFromAPI) || []
    
    if (categoriaAtiva === "todos") {
      return produtos
    }
    
    return produtos.filter(produto => 
      produto.originalCategory === categoriaAtiva
    )
  }

  const produtosFiltrados = getProdutosFiltrados()

  if (loading) {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <div className="w-4 h-4 bg-primary/20 rounded" />
              <div className="w-24 h-4 bg-primary/20 rounded" />
            </div>
            <div className="h-12 bg-foreground/10 rounded-lg w-1/3 mx-auto mb-4" />
            <div className="h-6 bg-foreground/10 rounded w-1/2 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-foreground/10 rounded-t-lg" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-foreground/10 rounded w-1/4" />
                  <div className="h-6 bg-foreground/10 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-foreground/10 rounded" />
                    <div className="h-3 bg-foreground/10 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-destructive mb-4">
            <p>Erro ao carregar produtos: {error.message}</p>
          </div>
          <Button onClick={() => window.location.reload()}>
            Tentar Novamente
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* <motion.div
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
          </motion.div> */}

          {/* Filtros de Categoria */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIAS.map((categoria) => {
              const Icon = categoria.icon
              const isActive = categoriaAtiva === categoria.id
              const produtosNaCategoria = data?.produtos?.filter(produto => 
                categoria.id === "todos" ? true : produto.categoriaDoProduto === categoria.id
              ).length || 0

              return (
                <button
                  key={categoria.id}
                  onClick={() => setCategoriaAtiva(categoria.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 backdrop-blur-sm ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-background/50 border-border/50 hover:border-primary/30 hover:bg-background/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{categoria.nome}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isActive 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {produtosNaCategoria}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {produtosFiltrados.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="max-w-md mx-auto space-y-4">
                <Package className="w-16 h-16 text-muted-foreground mx-auto opacity-50" />
                <h3 className="text-xl font-semibold text-foreground">
                  Nenhum produto encontrado
                </h3>
                <p className="text-muted-foreground">
                  {categoriaAtiva === "todos" 
                    ? "Não há produtos disponíveis no momento."
                    : `Não há produtos na categoria ${CATEGORIAS.find(c => c.id === categoriaAtiva)?.nome}.`
                  }
                </p>
                {categoriaAtiva !== "todos" && (
                  <Button 
                    onClick={() => setCategoriaAtiva("todos")}
                    variant="outline"
                    className="mt-4"
                  >
                    Ver Todos os Produtos
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {produtosFiltrados.map((product: any, index: number) => {
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
                          {/* <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                            {product.category}
                          </div> */}
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
                        {product.features.length > 0 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>Vantagens Principais</span>
                            </div>
                            <ul className="space-y-2">
                              {product.features.slice(0, 3).map((feature: string, idx: number) => (
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
                        )}

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
          )}

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