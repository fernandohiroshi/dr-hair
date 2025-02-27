import { IoLogoWhatsapp } from 'react-icons/io'

export const WhatsAppButton = () => {
  return (
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
  )
}
