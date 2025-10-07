"use client"

import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <div className="flex-1 max-w-2xl w-full space-y-10">
      <div className="text-center space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full"
        >
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          <span className="text-green-700 font-medium text-sm">Disponível para si</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight"
        >
          Fale Connosco
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          Na CampoForte, cada contacto é uma oportunidade para cultivar 
          uma parceria de sucesso. Estamos aqui para ouvir e ajudar.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <ContactCard 
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          }
          title="Telefone"
          content="+244 972 345 675"
          subtitle="Linha direta"
          delay={0.3}
          x={-20}
        />

        <ContactCard 
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title="Email"
          content="geral@campoforte.ao"
          subtitle="Resposta em 24h"
          delay={0.4}
          x={20}
        />

        <ContactCard 
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          title="Morada"
          content="AV.Principal, Lar do Patriota"
          subtitle="Visite-nos"
          delay={0.5}
          x={-20}
        />

        <ContactCard 
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="Horário"
          content="Seg - Sex: 8h-18h"
          subtitle="Sáb: 8h-13h"
          delay={0.6}
          x={20}
        />
      </div>
    </div>
  )
}

function ContactCard({ 
  icon, 
  title, 
  content, 
  subtitle, 
  delay,
  x 
}: { 
  icon: React.ReactNode
  title: string
  content: string
  subtitle: string
  delay: number
  x: number
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:scale-105 w-full max-w-xs"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:rotate-3 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-lg">{content}</p>
      <p className="text-green-700 text-sm mt-2">{subtitle}</p>
    </motion.div>
  )
}