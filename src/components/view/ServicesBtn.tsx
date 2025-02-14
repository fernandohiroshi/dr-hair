import Link from 'next/link'
import React from 'react'

function ServicesBtn() {
  return (
    <Link href="/#services" title="Clicar">
      <div className="max-w-fit cursor-pointer rounded-full bg-[#f5f2ed7c] px-4 py-2 text-base font-semibold shadow-md shadow-black/20 duration-500 hover:bg-[#f5f2ed]">
        Ver outros serviços
      </div>
    </Link>
  )
}

export default ServicesBtn
