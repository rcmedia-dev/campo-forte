"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Sparkles, ArrowRight, Zap, Clock, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"
import { gql } from "@apollo/client"
import { client } from "@/lib/apollo"
import { useQuery } from "@apollo/client/react"
import { Button } from "@/components/ui/button"

export const GET_SERVICOS = gql`
  query {
    servicos {
      nomeDoServico
      slugDoServico
      descricaoDoServico
      oqueIncluiOServico
      imagemDoServico {
        fileName
        url
      }
      createdAt
    }
  }
`

// Mapeamento de ícones para serviços
const serviceIcons: { [key: string]: any } = {
  "Consultoria Agrícola": TrendingUp,
  "Sistemas de Irrigação": Zap,
  "Análise de Dados": Sparkles,
  "Agricultura de Precisão": Shield,
  "Gestão de Equipamentos": Clock,
  "Produtos Agrícolas": Sparkles,
}

// Função para mapear dados da API para o formato do componente
const mapServiceFromAPI = (servico: any, index: number) => {
  const Icon = serviceIcons[servico.nomeDoServico] || Sparkles
  
  const features = Array.isArray(servico.oqueIncluiOServico) 
    ? servico.oqueIncluiOServico 
    : typeof servico.oqueIncluiOServico === 'string'
    ? servico.oqueIncluiOServico.split(',').map((item: string) => item.trim())
    : []

  const statsOptions = [
    "Aumento de 35% na produtividade",
    "Economia de 40% em água",
    "Decisões baseadas em dados",
    "Otimização de recursos",
    "Redução de 25% em custos",
    "Qualidade garantida"
  ]
  
  const stats = statsOptions[index % statsOptions.length]

  return {
    id: servico.slugDoServico || `servico-${index}`,
    icon: Icon,
    title: servico.nomeDoServico || "Serviço Sem Nome",
    description: servico.descricaoDoServico || "Descrição não disponível",
    image: servico.imagemDoServico?.url || "/placeholder-service.jpg",
    features: features.slice(0, 4),
    stats: stats,
    rawData: servico
  }
}

interface Servico {
  nomeDoServico: string
  slugDoServico: string
  descricaoDoServico: string
  oqueIncluiOServico: string[]
  imagemDoServico: {
    fileName: string
    url: string
  }
  createdAt: string
}

interface GetServicosData {
  servicos: Servico[]
}

export function ServicesList() {
  const { data, loading, error } = useQuery<GetServicosData>(GET_SERVICOS, {
    client,
    fetchPolicy: "cache-and-network"
  })

  const [selectedService, setSelectedService] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  if (loading) {
    return (
      <section className="py-20 flex justify-center lg:py-32 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-foreground/10 rounded-t-lg" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-foreground/10 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-foreground/10 rounded" />
                    <div className="h-4 bg-foreground/10 rounded w-5/6" />
                  </div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-3 bg-foreground/10 rounded" />
                    ))}
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
      <section className="py-20 flex justify-center lg:py-32 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-destructive mb-4">
            <p>Erro ao carregar serviços: {error.message}</p>
          </div>
        </div>
      </section>
    )
  }

  const servicos = data?.servicos?.map(mapServiceFromAPI) || []

  return (
    <>
      <section className="py-20 flex justify-center lg:py-32 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                }}
                className="group cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                {/* Card com layout alternativo - Minimalista com borda sutil */}
                <Card className="h-full overflow-hidden border-2 border-border/30 bg-card/80 backdrop-blur-sm relative transition-all duration-500 hover:border-primary/40 hover:shadow-lg">
                  
                  {/* Header com ícone e título alinhados */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-bold text-foreground truncate">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground mt-1">
                          Serviço especializado
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Imagem em formato mais compacto */}
                  <div className="relative h-40 mx-4 rounded-xl overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
                    
                    {/* Badge de estatística */}
                    <div className="absolute bottom-3 left-3">
                      <div className="px-2 py-1 rounded-lg bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-primary">
                        {service.stats}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-4">
                    {/* Descrição compacta */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features em grid compacto */}
                    {service.features.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-foreground/60 uppercase tracking-wide">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>Inclui</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature: string, idx: number) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-2 text-xs text-foreground/70"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA sutil */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span>Saiba mais</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>

                  {/* Efeito de brilho sutil no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          {servicos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Todos os serviços incluem suporte técnico especializado</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          )}

          {servicos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="max-w-md mx-auto space-y-4">
                <Sparkles className="w-16 h-16 text-muted-foreground mx-auto opacity-50" />
                <h3 className="text-xl font-semibold text-foreground">
                  Nenhum serviço encontrado
                </h3>
                <p className="text-muted-foreground">
                  Não há serviços disponíveis no momento.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal para detalhes do serviço (MANTIDO IGUAL) */}
      {selectedService && (
        <ServiceModal 
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  )
}

// Componente Modal para detalhes do serviço (MANTIDO EXATAMENTE IGUAL)
function ServiceModal({ service, isOpen, onClose }: { service: any, isOpen: boolean, onClose: () => void }) {
  if (!service) return null

  return (
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
        className="relative bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
        >
          <ArrowRight className="w-5 h-5 rotate-45" />
        </button>

        <div className="flex flex-col">
          {/* Image Section - NO TOPO */}
          <div className="relative h-64 w-full">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover rounded-t-2xl"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 border border-border">
                <service.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Serviço</span>
              </div>
            </div>
          </div>

          {/* Content Section - EMBAIXO */}
          <div className="p-6 lg:p-8 space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                {service.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="p-4 bg-secondary/30 rounded-xl">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4" />
                <span>Resultado Esperado</span>
              </div>
              <p className="font-semibold text-primary mt-1">{service.stats}</p>
            </div>

            {/* Features */}
            {service.features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">O Que Inclui Este Serviço</h3>
                <div className="grid gap-3">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA - REMOVIDO O BOTÃO DE SOLICITAR ORÇAMENTO */}
            <div className="flex items-center justify-center pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Suporte especializado incluído</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}