'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { Link } from '@/i18n/routing'
import { LanguageSwitcher } from './LanguageSwitcher'

// NAVIGATION LINKS
const navLinks = [
  { href: '/', title: 'home', key: 'home' },
  { href: '/#services', title: 'services', key: 'services' },
  { href: '/#clinics', title: 'clinics', key: 'clinics' },
  { href: '/antesedepois', title: 'beforeAfter', key: 'beforeAfter' },
  { href: '/cursos', title: 'courses', key: 'courses' },
  { href: '#contact', title: 'contact', key: 'contact' },
]

export const Nav = () => {
  // USING NEXT-INTL TO GET THE TRANSLATIONS FOR NAVIGATION
  const t = useTranslations('Nav')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <nav role="navigation" className="hidden items-center gap-2 text-sm md:gap-6 lg:flex lg:gap-8 xl:text-base">
        {navLinks.map(({ href, title, key }) => (
          <Link key={href} className="duration-300 ease-in-out hover:tracking-wider hover:underline" href={href}>
            {t(key)}
          </Link>
        ))}
        {/* LANGUAGE SWITCHER FOR DESKTOP */}
        <LanguageSwitcher />
      </nav>

      {/* MOBILE NAVIGATION */}
      <div className="lg:hidden">
        {/* BUTTON TO OPEN THE MENU */}
        <button onClick={() => setIsOpen(true)} aria-label="Open menu">
          <IconMenu2 className="h-8 w-8" />
        </button>

        {/* MOBILE MENU DISPLAY WHEN OPEN */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center bg-black bg-opacity-95 text-xl text-white"
            role="dialog"
            aria-modal="true"
          >
            {/* BUTTON TO CLOSE THE MENU */}
            <button onClick={() => setIsOpen(false)} className="absolute right-5 top-5" aria-label="Close menu">
              <IconX className="h-8 w-8" />
            </button>

            {/* MOBILE NAVIGATION LINKS */}
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
            {/* LANGUAGE SWITCHER FOR MOBILE */}
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
