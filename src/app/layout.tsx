import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/view/Header'
import Footer from '@/components/view/Footer'
import { IoLogoWhatsapp } from 'react-icons/io'

const M = Montserrat({
  subsets: ['latin'],
  weight: '300',
})

export const metadata: Metadata = {
  title: 'DR Hair - Transplante Capilar e Tratamentos para Queda de Cabelo',
  description:
    'Especialistas em transplante capilar FUE e tratamentos para queda de cabelo, como PRP, laser de baixa potência, fotobiomodulação e MMP. Recupere a densidade e saúde dos seus fios com tecnologia avançada.',
  keywords: [
    'transplante capilar',
    'FUE',
    'PRP capilar',
    'laser capilar',
    'fotobiomodulação',
    'MMP capilar',
    'queda de cabelo',
    'restauração capilar',
    'tratamento para calvície',
    'crescimento capilar',
    'saúde capilar',
    'densidade capilar',
    'especialista em calvície',
    'recuperação capilar',
    'cabelos saudáveis',
    'rejuvenescimento capilar',
    'fortalecimento dos fios',
    'técnicas avançadas para calvície',
    'intradermoterapia capilar',
    'ozonioterapia capilar',
    'microagulhamento capilar',
    'tratamento para fios fracos',
    'queda de cabelo masculina',
    'queda de cabelo feminina',
    'clínica de transplante capilar',
    'couro cabeludo saudável',
    'solução definitiva para calvície',
    'implante capilar',
    'autoestima e cabelo',
    'renovação capilar',
  ],
  openGraph: {
    title: 'DR Hair - Especialistas em Transplante Capilar e Saúde Capilar',
    description:
      'Traga de volta sua confiança com os tratamentos capilares da DR Hair. Técnicas como FUE, PRP, laser capilar e MMP para resultados naturais e duradouros.',
    url: 'https://drhairtransplantecapilar.com.br/',
    type: 'website',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/18b6d400-e3dc-11ef-8a63-eb57d6c77a36-Fotobiomodulacao-a-Laser.jpg',
        width: 1200,
        height: 630,
        alt: 'DR Hair - Clínica Especializada em Transplante Capilar',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_BR" suppressHydrationWarning className="!scroll-smooth">
      <body className={`${M.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/5545991280101"
          title="Fale conosco!"
          className="fixed bottom-4 right-4 rounded-2xl border border-emerald-500/40 bg-emerald-500 px-4 py-2 text-center text-white backdrop-blur-sm duration-300 ease-in-out hover:bg-emerald-400"
        >
          <span className="flex items-center gap-4 text-xs font-semibold md:text-base">
            <IoLogoWhatsapp size={40} />
          </span>
          <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        </a>
      </body>
    </html>
  )
}
