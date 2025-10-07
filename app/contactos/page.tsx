import { ContactForm } from "@/components/contact/contact-form"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Contactos",
  description:
    "Entre em contacto com a CampoForte. Estamos disponíveis para ajudar com as suas necessidades agrícolas.",
}

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col">
        <ContactHero />
        <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="flex flex-col lg:flex-row gap-16 justify-center items-center w-full max-w-7xl">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>  
      </div>
      <ScrollToTop />
    </>
  )
}