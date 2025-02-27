import Link from 'next/link'
import { useTranslations } from 'next-intl'

function ServicesBtn() {
  const t = useTranslations('ServicesBtn')

  return (
    <Link href="/#services" title={t('buttonTitle')}>
      <div className="max-w-fit cursor-pointer rounded-full bg-[#f5f2ed7c] px-4 py-2 text-base font-semibold shadow-md shadow-black/20 duration-500 hover:bg-[#f5f2ed]">
        {t('buttonText')}
      </div>
    </Link>
  )
}

export default ServicesBtn
