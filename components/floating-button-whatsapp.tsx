"use client"

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="244931415925"  // número com código do país, sem "+"
      accountName="Campo Forte"
      chatMessage="Olá 👋, como podemos te ajudar?"
      placeholder="Escreva uma mensagem..."
      statusMessage="Online agora"
      avatar="/whatsapp-logo.jpg" // opcional (foto do perfil)
      
      darkMode={false} // muda para true se o site for escuro
      notification={true}
      notificationSound={true}
    />
  )
}
