'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { IconMail, IconBrandInstagram } from '@tabler/icons-react'
import { WhatsAppButtonFooter } from './WhatsappBtn3'

// ARRAY CONTAINING LINKS TO THE SERVICES OFFERED
const servicesLinks = [
  { href: '/fue', label: 'fue' },
  { href: '/prp', label: 'prp' },
  { href: '/fotobiomodulacao', label: 'fotobiomodulacao' },
  { href: '/mmp', label: 'mmp' },
]

// ARRAY CONTAINING CONTACT LINKS (INSTAGRAM AND E-MAIL)
const contactLinks = [
  { href: 'https://www.instagram.com/drhairtransplantecapilar/', label: 'Instagram', icon: IconBrandInstagram },
  { href: 'mailto:drhairtransplantecapilar@gmail.com', label: 'E-Mail', icon: IconMail },
]

export const Footer = () => {
  // USING NEXT-INTL TO GET THE TRANSLATIONS FOR THE FOOTER
  const t = useTranslations('Footer')

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-stone-50" id="contact">
      {/* CONTAINER FOR FOOTER CONTENT */}
      <div className="col-span-1 mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-8 md:grid-cols-[2fr_2fr_1fr] md:px-8 md:py-32">
        {/* SERVICES SECTION */}
        <div className="flex flex-col gap-2 text-justify tracking-wider">
          <h3 className="text-xl font-semibold md:mb-2">{t('services')}</h3>
          {/* LOOP THROUGH SERVICE LINKS AND RENDER THEM */}
          {servicesLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm duration-500 ease-in-out hover:underline md:text-base">
              {t(`servicesLinks.${label}`)} {/* TRANSLATED SERVICE LABEL */}
            </Link>
          ))}
        </div>

        {/* CONTACT SECTION */}
        <div className="flex flex-col gap-2 text-justify tracking-wider">
          <h3 className="text-xl font-semibold md:mb-2">{t('contact')}</h3>
          {/* LOOP THROUGH CONTACT LINKS AND RENDER THEM */}
          {contactLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-2 text-sm duration-500 ease-in-out hover:underline md:text-base"
            >
              <Icon size={20} />
              {label}
            </a>
          ))}

          {/* WHATSAPP BUTTON */}
          <WhatsAppButtonFooter />
        </div>

        {/* LOGO AND LINK BACK TO HOME */}
        <Link
          href="#home"
          title={t('backToHome')}
          className="flex items-center justify-center duration-500 ease-in-out hover:scale-90"
        >
          <Image
            src="/logo.jpeg"
            alt="Dr Hair Transplante Capilar"
            width={200}
            height={200}
            quality={100}
            loading="lazy"
            className="animate-pulse rounded-full shadow-lg shadow-black/40"
          />
        </Link>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="px-4 py-4 text-center font-sans text-xs md:text-start md:text-sm">
        <span>{t('copyright', { year: new Date().getFullYear() })} </span>
        <a
          href="https://konbinicode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Konbini Code
        </a>
        .
      </div>
    </footer>
  )
}
