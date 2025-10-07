"use client"

import { FileText } from "lucide-react"
import { motion } from "framer-motion"

export function TermsOfUse() {
  return (
    <motion.section
      id="termos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-20"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold">Termos de Uso</h2>
      </div>

      <div className="prose prose-gray max-w-none space-y-6">
        <div className="text-sm text-muted-foreground mb-6">Última atualização: Janeiro de 2025</div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Aceitação dos Termos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ao aceder e utilizar o website da CampoForte, concorda em cumprir e estar vinculado aos presentes Termos
              de Uso. Se não concordar com estes termos, não deve utilizar este website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Uso do Website</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              O utilizador compromete-se a utilizar o website de forma responsável e legal, nomeadamente:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Não utilizar o website para fins ilegais ou não autorizados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Não tentar obter acesso não autorizado a sistemas ou redes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Não transmitir vírus, malware ou qualquer código malicioso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>Não copiar, reproduzir ou distribuir conteúdo sem autorização</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Propriedade Intelectual</h3>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo presente neste website, incluindo textos, gráficos, logotipos, imagens e software, é
              propriedade da CampoForte ou dos seus licenciadores e está protegido por leis de direitos de autor e
              propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia por
              escrito.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">4. Serviços e Produtos</h3>
            <p className="text-muted-foreground leading-relaxed">
              As informações sobre serviços e produtos apresentadas neste website são meramente informativas. A
              CampoForte reserva-se o direito de modificar, suspender ou descontinuar qualquer serviço ou produto sem
              aviso prévio. Os preços e disponibilidade estão sujeitos a alterações.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">5. Limitação de Responsabilidade</h3>
            <p className="text-muted-foreground leading-relaxed">
              A CampoForte não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais
              resultantes do uso ou impossibilidade de uso deste website. Não garantimos que o website estará sempre
              disponível, livre de erros ou vírus.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">6. Links Externos</h3>
            <p className="text-muted-foreground leading-relaxed">
              Este website pode conter links para websites de terceiros. A CampoForte não é responsável pelo conteúdo ou
              práticas de privacidade desses websites externos. A inclusão de links não implica aprovação ou
              responsabilidade pelo conteúdo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">7. Modificações dos Termos</h3>
            <p className="text-muted-foreground leading-relaxed">
              A CampoForte reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações
              entrarão em vigor imediatamente após a sua publicação no website. O uso continuado do website após as
              alterações constitui aceitação dos novos termos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">8. Lei Aplicável</h3>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Uso são regidos pelas leis de Portugal. Qualquer litígio decorrente destes termos será
              submetido à jurisdição exclusiva dos tribunais portugueses.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">9. Contacto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Para questões sobre estes Termos de Uso, contacte-nos através do email{" "}
              <a href="mailto:legal@campoforte.pt" className="text-primary hover:underline">
                legal@campoforte.pt
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
