import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import WhatsAppButton from "@/components/floating-button-whatsapp";
import { ApolloWrapper } from "@/providers/apollo-provider";
import BProgressProvider from "@/components/bprogress-provider";

export const metadata: Metadata = {
  title: {
    default: "CampoForte - Inovação Agrícola",
    template: "%s | CampoForte",
  },
  description:
    "Líder em soluções inovadoras para o setor agrícola. Tecnologia de ponta, sustentabilidade e excelência ao serviço da agricultura moderna.",
  keywords: [
    "agricultura",
    "inovação agrícola",
    "tecnologia agrícola",
    "sustentabilidade",
    "consultoria agrícola",
    "Portugal",
  ],
  authors: [{ name: "CampoForte" }],
  creator: "CampoForte",
  publisher: "CampoForte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://campoforte.pt",
    siteName: "CampoForte",
    title: "CampoForte - Inovação Agrícola",
    description: "Líder em soluções inovadoras para o setor agrícola",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampoForte - Inovação Agrícola",
    description: "Líder em soluções inovadoras para o setor agrícola",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">
            <BProgressProvider>
              <ApolloWrapper>
                {children}
              </ApolloWrapper>
            </BProgressProvider>
            <WhatsAppButton />
          </main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
