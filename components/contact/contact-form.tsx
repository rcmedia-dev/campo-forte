"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_ID!, // Substitua pelo seu Service ID
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!, // Substitua pelo seu Template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY // Substitua pela sua Public Key
      )
      
      setIsSent(true)
      formRef.current.reset()
      
      // Reset do estado após 5 segundos
      setTimeout(() => {
        setIsSent(false)
      }, 5000)
      
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex-1 max-w-2xl w-full"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
        {/* Elementos decorativos animados */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-green-100 rounded-full -translate-y-16 translate-x-16"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-4 left-4 w-8 h-8 bg-green-200 rounded-full opacity-50"
        ></motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-2 justify-center lg:justify-start"
          >
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <h3 className="text-3xl font-bold text-green-900 text-center lg:text-left">
              Envie a sua Mensagem
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 text-lg text-center lg:text-left"
          >
            Preencha o formulário abaixo e entraremos em contacto consigo.
          </motion.p>
          
          {isSent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl"
            >
              ✅ Mensagem enviada com sucesso! Entraremos em contacto em breve.
            </motion.div>
          )}
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                  Primeiro Nome *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="firstName"
                  name="first_name" // Nome para o EmailJS
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="Seu primeiro nome"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                  Último Nome *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="lastName"
                  name="last_name" // Nome para o EmailJS
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                  placeholder="Seu último nome"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email *
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email" // Nome para o EmailJS
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                placeholder="seu.email@exemplo.pt"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Telefone
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                id="phone"
                name="phone" // Nome para o EmailJS
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
                placeholder="+244 931 415 925"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                Assunto *
              </label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                id="subject"
                name="subject" // Nome para o EmailJS
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300 appearance-none bg-white"
              >
                <option value="">Selecione um assunto</option>
                <option value="products">Produtos Agrícolas</option>
                <option value="support">Suporte Técnico</option>
                <option value="partnership">Parcerias</option>
                <option value="visit">Agendar Visita</option>
                <option value="other">Outro</option>
              </motion.select>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Mensagem *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message" // Nome para o EmailJS
                rows={6}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300 resize-none"
                placeholder="Descreva como podemos ajudá-lo..."
              ></motion.textarea>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: isLoading ? 1 : 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-5 px-6 rounded-xl font-bold text-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <motion.span 
                className="flex items-center justify-center gap-3"
                whileHover={{ x: isLoading ? 0 : 5 }}
                transition={{ duration: 0.2 }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </motion.span>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}