import Image from 'next/image'
import { useTranslations } from 'next-intl'

function FueSection1() {
  const t = useTranslations('FueSection1')

  return (
    <section className="flex flex-col items-center gap-8 md:flex-row">
      <div className="md:w-1/2">
        <div className="mb-4 inline-block rounded-lg bg-[#A79356] px-4 py-2 text-sm font-bold text-white lg:text-lg">
          {t('title')}
        </div>

        <h2 className="text-md font-bold text-black lg:text-xl">{t('subtitle')}</h2>

        <p className="mt-4 text-sm text-black/90 md:text-base">{t('description')}</p>

        <div className="mt-6 inline-block rounded-lg border border-[#A79356] px-4 py-2 text-sm font-light shadow-sm md:text-base">
          {t('hours')}
        </div>
      </div>

      {/* Imagem */}
      <div className="shadow-2xl md:w-1/2">
        <Image
          src="https://imgix.cosmicjs.com/afd28a10-ee80-11ef-af71-9552422268b6-imersao1.jpeg"
          alt={t('title')}
          width={500}
          height={500}
          className="h-auto max-h-[26rem] w-full rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

export default FueSection1
