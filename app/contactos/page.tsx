import { ContactForm } from "@/components/contact/contact-form"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contactos",
  description:
    "Entre em contacto com a CampoForte. Estamos disponíveis para ajudar com as suas necessidades agrícolas.",
}

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col">
        {/* <ContactHero /> */}
        <div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8 py-2 lg:py-42">
          <div className="flex flex-col lg:flex-row gap-16 justify-center items-center w-full max-w-7xl">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>  
      </div>
    </>
  )
}