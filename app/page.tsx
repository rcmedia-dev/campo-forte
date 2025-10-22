
import { Innovation } from "@/components/home/innovation"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CTA } from "@/components/home/cta"
import { HeroWithControls } from "@/components/hero-with-controls"

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <HeroWithControls />
        <Innovation />
        <FeaturedProducts />
        <CTA />
      </div>
    </>
  )
}
