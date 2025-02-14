import Link from 'next/link'
import { IoLogoWhatsapp } from 'react-icons/io'

function AssessmentBtn() {
  return (
    <Link href="https://wa.me/5545991280101" title="Clicar">
      <div className="flex max-w-fit cursor-pointer items-center gap-2 rounded-full bg-[#f5f2ed7c] px-4 py-2 text-base font-semibold shadow-md shadow-black/20 duration-500 hover:bg-emerald-300/90">
        Agendar
        <IoLogoWhatsapp size={24} />
      </div>
    </Link>
  )
}

export default AssessmentBtn
