"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Sparkles } from "lucide-react"
import { useState } from "react"
import { gql } from "@apollo/client"
import { client } from "@/lib/apollo"
import { useQuery } from "@apollo/client/react"

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
  "Consultoria Agrícola": Sparkles,
  "Sistemas de Irrigação": Sparkles,
  "Análise de Dados": Sparkles,
  "Agricultura de Precisão": Sparkles,
  "Gestão de Equipamentos": Sparkles,
  "Produtos Agrícolas": Sparkles,
  // Adicione mais mapeamentos conforme necessário
}

// Função para mapear dados da API para o formato do componente
const mapServiceFromAPI = (servico: any, index: number) => {
  const Icon = serviceIcons[servico.nomeDoServico] || Sparkles
  
  // Processar o que inclui o serviço (assumindo que é um array ou string)
  const features = Array.isArray(servico.oqueIncluiOServico) 
    ? servico.oqueIncluiOServico 
    : typeof servico.oqueIncluiOServico === 'string'
    ? servico.oqueIncluiOServico.split(',').map((item: string) => item.trim())
    : []

  // Gerar stats placeholder baseado no índice
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
    features: features.slice(0, 4), // Limita a 4 características
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

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicos.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group cursor-pointer"
            >
              <Card className="h-full pt-0 group hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden border-border/60 bg-card backdrop-blur-sm relative">
                {/* Single Color Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-60 group-hover:from-primary/10 group-hover:to-primary/15 transition-all duration-500" />
                
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Minimal Overlay for Text Readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Icon Container */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-md flex items-center justify-center border border-border/50 shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {service.stats}
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="relative space-y-3 pb-3">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4 pt-0">
                  {service.features.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>Benefícios Incluídos</span>
                      </div>
                      <ul className="space-y-2.5">
                        {service.features.map((feature: string, idx: number) => (
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

                  {/* Hover Indicator */}
                  <motion.div 
                    className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </CardContent>

                {/* Enhanced Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        {servicos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
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
  )
}