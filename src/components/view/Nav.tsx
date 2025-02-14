'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconBrandInstagram, IconMail, IconMenu2, IconX } from '@tabler/icons-react'

const navLinks = [
  { href: '/#services', title: 'services', label: 'Serviços' },
  { href: '/#clinics', title: 'clinics', label: 'Clínica' },
  { href: '/antesedepois', title: 'Antes e Depois', label: 'Antes e Depois' },
  // {
  //   href: "/esteticaavancada",
  //   title: "Estética Avançada",
  //   label: "Estética Avançada",
  // },
  { href: '/cursos', title: 'Cursos', label: 'Cursos' },
  { href: '#contact', title: 'contact', label: 'Contato' },
]

const socialLinks = [
  {
    href: 'https://www.instagram.com/drhairtransplantecapilar/',
    title: 'instagram',
    icon: <IconBrandInstagram className="h-8 w-8 duration-300 ease-in-out hover:scale-125 hover:text-[#A79356]" />,
  },
  {
    href: 'mailto:drhairtransplantecapilar@gmail.com',
    title: 'email',
    icon: <IconMail className="h-8 w-8 duration-300 ease-in-out hover:scale-125 hover:text-[#A79356]" />,
  },
]

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-2 text-sm md:gap-6 lg:flex lg:gap-8 xl:text-base">
        {navLinks.map(({ href, title, label }) => (
          <Link
            key={href}
            className="duration-300 ease-in-out hover:tracking-wider hover:underline"
            href={href}
            title={title}
          >
            {label}
          </Link>
        ))}
        <div className="flex items-center gap-2 md:gap-3">
          {socialLinks.map(({ href, title, icon }) => (
            <a key={href} href={href} title={title}>
              {icon}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <IconMenu2 className="h-8 w-8" />
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center bg-black bg-opacity-95 text-xl text-white">
            <button onClick={() => setIsOpen(false)} className="absolute right-5 top-5">
              <IconX className="h-8 w-8" />
            </button>
            {navLinks.map(({ href, title, label }) => (
              <Link
                key={href}
                className="py-2 hover:underline"
                href={href}
                title={title}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ href, title, icon }) => (
                <a key={href} href={href} title={title}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Nav
