"use client"

import { Shield } from "lucide-react"
import { motion } from "framer-motion"

export function PrivacyPolicy() {
  return (
    <motion.section
      id="privacidade"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-20"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          <Shield className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">Política de Privacidade</h2>
      </div>

      <div className="prose prose-gray max-w-none space-y-6">
        <div className="text-sm text-muted-foreground mb-6">Última atualização: Janeiro de 2025</div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Introdução</h3>
            <p className="text-muted-foreground leading-relaxed">
              A CampoForte está comprometida em proteger a privacidade dos seus utilizadores. Esta Política de
              Privacidade descreve como recolhemos, usamos, armazenamos e protegemos as suas informações pessoais quando
              utiliza os nossos serviços e visita o nosso website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Informações que Recolhemos</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Podemos recolher as seguintes categorias de informações:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  <strong>Informações de Contacto:</strong> Nome, email, telefone e morada fornecidos através de
                  formulários de contacto.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  <strong>Informações de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo
                  de permanência no site.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  <strong>Cookies:</strong> Utilizamos cookies para melhorar a experiência do utilizador e analisar o
                  tráfego do website.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Como Utilizamos as Suas Informações</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">As informações recolhidas são utilizadas para:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Responder às suas solicitações e fornecer os serviços solicitados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Melhorar os nossos produtos e serviços</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Enviar comunicações de marketing (com o seu consentimento)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Cumprir obrigações legais e regulamentares</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">4. Proteção de Dados</h3>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas informações
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Os dados são armazenados em
              servidores seguros e o acesso é restrito apenas a pessoal autorizado.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">5. Os Seus Direitos</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              De acordo com o RGPD, tem os seguintes direitos:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Direito de acesso aos seus dados pessoais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Direito de retificação de dados incorretos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Direito ao apagamento dos seus dados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Direito de oposição ao tratamento dos seus dados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Direito à portabilidade dos dados</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">6. Contacto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Para exercer os seus direitos ou esclarecer dúvidas sobre esta política, contacte-nos através do email{" "}
              <a href="mailto:privacidade@campoforte.pt" className="text-primary hover:underline">
                privacidade@campoforte.pt
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
