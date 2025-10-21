import { PoliciesHero } from "@/components/policies/policies-hero"
import { PrivacyPolicy } from "@/components/policies/privacy-policy"
import { TermsOfUse } from "@/components/policies/terms-of-use"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Políticas",
  description:
    "Política de Privacidade e Termos de Uso da CampoForte. Transparência e confiança são fundamentais para nós.",
}

export default function PoliciesPage() {
  return (
    <>
      <div className="flex flex-col">
        <PoliciesHero />
        <div className="container px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto space-y-16">
            <PrivacyPolicy />
            <TermsOfUse />
          </div>
        </div>
      </div>
    </>
  )
}
