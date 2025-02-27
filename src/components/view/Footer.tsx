'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import logo from '../../../public/logo.jpeg'

const servicesLinks = [
  { href: '/fue', label: 'fue' },
  { href: '/prp', label: 'prp' },
  { href: '/fotobiomodulacao', label: 'fotobiomodulacao' },
  { href: '/mmp', label: 'mmp' },
]

const contactLinks = [
  { href: 'https://wa.me/5545991280101', label: 'Whatsapp' },
  { href: 'mailto:drhairtransplantecapilar@gmail.com', label: 'E-Mail' },
  {
    href: 'https://www.instagram.com/drhairtransplantecapilar/',
    label: 'Instagram',
  },
]

function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-stone-50" id="contact">
      <div className="col-span-1 mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-8 md:grid-cols-[2fr_2fr_1fr] md:px-8 md:py-32">
        <div className="flex flex-col gap-2 text-justify tracking-wider">
          <h3 className="text-xl font-semibold md:mb-2">{t('services')}</h3>
          {servicesLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm duration-500 ease-in-out hover:underline md:text-base">
              {t(`servicesLinks.${label}`)}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-justify tracking-wider">
          <h3 className="text-xl font-semibold md:mb-2">{t('contact')}</h3>
          {contactLinks.map(({ href, label }) => (
            <a key={href} href={href} className="text-sm duration-500 ease-in-out hover:underline md:text-base">
              {label}
            </a>
          ))}
        </div>

        <Link
          href="#home"
          title={t('backToHome')}
          className="flex items-center justify-center duration-500 ease-in-out hover:scale-90"
        >
          <Image
            src={logo}
            alt="Dr Hair Transplante Capilar"
            width={200}
            height={200}
            quality={100}
            loading="lazy"
            className="animate-pulse rounded-full shadow-lg shadow-black/40"
          />
        </Link>
      </div>
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

export default Footer
