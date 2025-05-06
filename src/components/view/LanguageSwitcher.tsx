'use client'

import { Link, usePathname } from '@/i18n/routing'
import Image from 'next/image'

export const LanguageSwitcher = () => {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Link href={pathname} locale="pt">
        <Image
          src="/brasilia.png"
          alt="Português"
          width={32}
          height={32}
          className="rounded-full border duration-100 ease-in-out hover:scale-110 hover:brightness-110"
        />
      </Link>
      <Link href={pathname} locale="es">
        <Image
          src="/paraguai.png"
          alt="Español"
          width={32}
          height={32}
          className="rounded-full border duration-100 ease-in-out hover:scale-110 hover:brightness-110"
        />
      </Link>
    </div>
  )
}
