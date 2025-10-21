import { AboutHero } from "@/components/about/about-hero"
import { History } from "@/components/about/history"
import { Mission } from "@/components/about/mission"
import { Values } from "@/components/about/values"
import { Team } from "@/components/about/team"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história, missão, visão e valores da CampoForte. Mais de 25 anos de inovação no setor agrícola.",
}

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col">
        <AboutHero />
        <History />
        <Mission />
        <Values />
        {/* <Team /> */}
      </div>
    </>
  )
}
