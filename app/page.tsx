import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Innovation } from "@/components/home/innovation"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Stats } from "@/components/home/stats"
import { CTA } from "@/components/home/cta"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <Features />
        <Innovation />
        <FeaturedProducts />
        <Stats />
        <CTA />
      </div>
      <ScrollToTop />
    </>
  )
}
