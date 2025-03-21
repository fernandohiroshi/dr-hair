'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from './LanguageSwitcher'

const navLinks = [
  { href: '/', title: 'home', key: 'home' },
  { href: '/#services', title: 'services', key: 'services' },
  { href: '/#clinics', title: 'clinics', key: 'clinics' },
  { href: '/antesedepois', title: 'beforeAfter', key: 'beforeAfter' },
  { href: '/cursos', title: 'courses', key: 'courses' },
  { href: '#contact', title: 'contact', key: 'contact' },
]

export const Nav = () => {
  const t = useTranslations('Nav')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav role="navigation" className="hidden items-center gap-2 text-sm md:gap-6 lg:flex lg:gap-8 xl:text-base">
        {navLinks.map(({ href, title, key }) => (
          <Link
            key={href}
            className="duration-300 ease-in-out hover:tracking-wider hover:underline"
            href={href}
            title={title}
          >
            {t(key)}
          </Link>
        ))}
        <LanguageSwitcher />
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)} aria-label="Abrir menu">
          <IconMenu2 className="h-8 w-8" />
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center bg-black bg-opacity-95 text-xl text-white"
            role="dialog"
            aria-modal="true"
          >
            <button onClick={() => setIsOpen(false)} className="absolute right-5 top-5" aria-label="Fechar menu">
              <IconX className="h-8 w-8" />
            </button>

            {navLinks.map(({ href, title, key }) => (
              <Link
                key={href}
                className="py-2 hover:underline"
                href={href}
                title={title}
                onClick={() => setIsOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
