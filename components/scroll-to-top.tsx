"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { WhatsappFill } from "./svg-icons/whatsapp"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
       
          <Button
            onClick={scrollToTop}
            size="icon"
            className="size-16 rounded-full shadow-lg animate-pulse fixed bottom-10 right-5 z-auto"
            aria-label="Voltar ao topo"
          >
            <WhatsappFill fontSize={40}/>
          </Button>
      )}
    </>
  )
}
