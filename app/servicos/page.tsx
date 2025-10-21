import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCTA } from "@/components/services/services-cta"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Serviços e Produtos",
  description:
    "Descubra as nossas soluções inovadoras: consultoria agrícola, sistemas de irrigação, análise de dados e agricultura de precisão.",
}

export default function ServicesPage() {
  return (
    <>
      <div className="flex flex-col">
        <ServicesHero />
        <ServicesList />
        <ServicesCTA />
      </div>
    </>
  )
}
