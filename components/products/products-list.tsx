"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sprout, Droplets, Shield, Tractor, Leaf, Package, CheckCircle, ArrowRight, Star, X, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { gql } from "@apollo/client"
import { client } from "@/lib/apollo"
import { useQuery } from "@apollo/client/react"

export const GET_PRODUTOS = gql`
  query {
    produtos(first: 600, orderBy: createdAt_DESC) {
      nomeDoProduto
      slugDoProduto
      imagemDoProduto {
        fileName
        url
      }
      categoriaDoProduto
      resumoDoProduto
      caracteristicasDoProduto
      descricaoCompletaDoProduto {
        raw
      }
      beneficiosDoProduto
      createdAt
    }
  }
`

// Mapeamento de ícones para categorias
const categoryIcons: { [key: string]: any } = {
  "sementes": Sprout,
  "produtosAgropecuarios": Droplets,
  "medicamentosVeterinarios": Heart
}

// Lista de categorias disponíveis
const CATEGORIAS = [
  { id: "todos", nome: "Todos os Produtos", icon: Package },
  { id: "medicamentosVeterinarios", nome: "Medicamentos", icon: Heart },
  { id: "sementes", nome: "Sementes", icon: Sprout },
  { id: "produtosAgropecuarios", nome: "Produtos Agropecuários", icon: Droplets },
]

const extractTextFromRichText = (richText: any): string => {
  if (!richText?.raw) return "Descrição completa não disponível"

  try {
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

// Função para mapear dados da API para o formato do componente
const mapProductFromAPI = (produto: any, index: number) => {
  // Usar a categoria diretamente da API ou determinar baseada no nome
  const categoria = produto.categoriaDoProduto || "produtosAgropecuarios"
  const Icon = categoryIcons[categoria] || Package
  
  // Processar características
  const features = Array.isArray(produto.caracteristicasDoProduto) 
    ? produto.caracteristicasDoProduto 
    : []

  // Processar benefícios
  const benefits = Array.isArray(produto.beneficiosDoProduto)
    ? produto.beneficiosDoProduto
    : []

  // Determinar badge baseado na categoria
  const getBadgeInfo = (categoria: string) => {
    const badges: { [key: string]: { text: string; color: string } } = {
      "sementes": { text: "Sementes", color: "bg-amber-500 text-amber-950" },
      "produtosAgropecuarios": { text: "Produtos Agropecuários", color: "bg-blue-500 text-white" },
      "medicamentosVeterinarios": { text: "Medicamentos", color: "bg-red-500 text-white" }
    }
    return badges[categoria] || { text: null, color: "" }
  }

  const badgeInfo = getBadgeInfo(categoria)

  // Gerar rating e reviews placeholder
  const rating = 4.5 + (index * 0.1) > 4.9 ? 4.9 : 4.5 + (index * 0.1)
  const reviews = 30 + (index * 15)

  return {
    id: produto.slugDoProduto || `produto-${index}`,
    icon: Icon,
    category: formatCategoryName(categoria),
    originalCategory: categoria,
    title: produto.nomeDoProduto || "Produto Sem Nome",
    description: produto.resumoDoProduto || "Descrição não disponível",
    fullDescription: extractTextFromRichText(produto.descricaoCompletaDoProduto),
    image: produto.imagemDoProduto?.url || "/placeholder-product.jpg",
    features: features.slice(0, 8),
    benefits: benefits.slice(0, 8),
    badge: badgeInfo.text,
    badgeColor: badgeInfo.color,
    rating: parseFloat(rating.toFixed(1)),
    reviews,
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

            <div className="flex flex-col">
              {/* Image Section - Top */}
              <div className="relative h-80 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-2xl"
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

                {/* Category Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content Section - Bottom */}
              <div className="p-6 lg:p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

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
  imagemDoProduto: {
    fileName: string
    url: string
  }
  categoriaDoProduto: string
  resumoDoProduto: string
  caracteristicasDoProduto: string[]
  descricaoCompletaDoProduto: {
    raw: string
  }
  beneficiosDoProduto: string[]
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
              const produtosNaCategoria = data?.produtos?.filter(produto => {
                if (categoria.id === "todos") return true
                const productCategory = produto.categoriaDoProduto || "produtosAgropecuarios"
                return productCategory === categoria.id
              }).length || 0

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
                <a href="/contactos">
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