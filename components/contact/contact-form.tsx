"use client"

import { motion } from "framer-motion"

export function ContactForm() {
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
          
          <form className="space-y-7">
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
                rows={6}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300 resize-none"
                placeholder="Descreva como podemos ajudá-lo..."
              ></motion.textarea>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              type="submit"
              className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-5 px-6 rounded-xl font-bold text-lg hover:from-green-800 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <motion.span 
                className="flex items-center justify-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Enviar Mensagem
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.span>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}