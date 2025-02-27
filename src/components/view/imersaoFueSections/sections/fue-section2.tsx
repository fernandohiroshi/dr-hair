import Image from 'next/image'
import { useTranslations } from 'next-intl'

function FueSection2() {
  const t = useTranslations('FueSection2')

  return (
    <section className="mt-16">
      <h3 className="text-md font-semibold text-black md:text-xl">{t('title')}</h3>

      <p className="mt-4 text-sm text-black/90 md:text-base">{t('description')}</p>

      <ul className="mt-4 space-y-3 text-sm text-black/90 md:text-base">
        <li>
          🔹 <strong>{t('focus.male')}</strong>
        </li>
        <li>
          🔹 <strong>{t('focus.female')}</strong>
        </li>
        <li>
          🔹 <strong>{t('focus.eyebrow')}</strong>
        </li>
        <li>
          🔹 <strong>{t('focus.beard')}</strong>
        </li>
      </ul>

      <p className="mt-8 text-sm text-black/90 md:text-base">{t('callToAction')}</p>

      <div className="mt-8 grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
        <Image
          src="https://imgix.cosmicjs.com/afb27ef0-ee80-11ef-af71-9552422268b6-imsersao3.jpeg"
          alt="Centro Cirúrgico"
          width={500}
          height={500}
          className="max-h-[26rem] w-full rounded-lg object-cover"
        />
        <Image
          src="https://imgix.cosmicjs.com/afd76c10-ee80-11ef-af71-9552422268b6-imersao4.jpeg"
          alt="Centro Cirúrgico"
          width={500}
          height={500}
          className="max-h-[26rem] w-full rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

export default FueSection2
