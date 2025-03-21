import Link from 'next/link'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useTranslations } from 'next-intl'

export const AssessmentBtn = () => {
  const t = useTranslations('AssessmentBtn')

  return (
    <Link href="https://wa.me/5545991280101" title={t('buttonTitle')}>
      <div className="flex max-w-fit cursor-pointer items-center gap-2 rounded-full bg-[#f5f2ed7c] px-4 py-2 text-base font-semibold shadow-md shadow-black/20 duration-500 hover:bg-emerald-300/90">
        {t('buttonText')}
        <IoLogoWhatsapp size={24} />
      </div>
    </Link>
  )
}
