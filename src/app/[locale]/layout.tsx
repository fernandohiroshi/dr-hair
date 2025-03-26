import type { Metadata } from 'next'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/view/Header'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { WhatsAppButton } from '@/components/view/WhatsappBtn'
import { Footer } from '@/components/view/Footer'

const M = Montserrat({
  subsets: ['latin'],
  weight: '300',
})

export const metadata: Metadata = {
  title: 'DR Hair',
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning className="!scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5ZJ835G2');`}
        </Script>
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className={`${M.className} antialiased`}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5ZJ835G2"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
