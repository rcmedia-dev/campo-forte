import type { Metadata } from "next"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductsList } from "@/components/products/products-list"

export const metadata: Metadata = {
  title: "Produtos | CampoForte",
  description:
    "Descubra nossa linha completa de produtos agrícolas de alta qualidade. Sementes, fertilizantes, defensivos e equipamentos para maximizar sua produtividade.",
  keywords: "produtos agrícolas, sementes, fertilizantes, defensivos, equipamentos agrícolas, insumos",
}

export default function ProdutosPage() {
  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductsList />
    </main>
  )
}
