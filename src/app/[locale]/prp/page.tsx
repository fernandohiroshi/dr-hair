import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { useTranslations } from 'next-intl'
import { ServicesBtn } from '@/components/view/ServicesBtn'

export default function PrpPage() {
  const t = useTranslations('PrpPage.sections')

  const prpContent = [
    {
      title: t('prp_title'),
      description: (
        <>
          <p>{t('prp_description.0')}</p>
          <p>{t('prp_description.1')}</p>
        </>
      ),
      badge: t('prp_badge'),
      image: 'https://imgix.cosmicjs.com/abb1e130-e7d0-11ef-8a63-eb57d6c77a36-prp1.jpg',
    },
    {
      title: t('growth_factors_title'),
      description: (
        <>
          <p>{t('growth_factors_description.0')}</p>
          <ul>
            <li>{t('growth_factors_description.1')}</li>
            <li>{t('growth_factors_description.2')}</li>
            <li>{t('growth_factors_description.3')}</li>
            <li>{t('growth_factors_description.4')}</li>
            <li>{t('growth_factors_description.5')}</li>
          </ul>
        </>
      ),
      badge: t('growth_factors_badge'),
      image: 'https://imgix.cosmicjs.com/abb0a8b0-e7d0-11ef-8a63-eb57d6c77a36-prp2.jpg',
    },
    {
      title: t('exclusive_protocol_title'),
      description: (
        <>
          <p>{t('exclusive_protocol_description.0')}</p>
          <ul>
            <li>{t('exclusive_protocol_description.1')}</li>
            <li>{t('exclusive_protocol_description.2')}</li>
            <li>{t('exclusive_protocol_description.3')}</li>
            <li>{t('exclusive_protocol_description.4')}</li>
            <li>{t('exclusive_protocol_description.5')}</li>
            <li>{t('exclusive_protocol_description.6')}</li>
            <li>{t('exclusive_protocol_description.7')}</li>
          </ul>
        </>
      ),
      badge: t('exclusive_protocol_badge'),
      image: 'https://imgix.cosmicjs.com/4edecdf0-eaa6-11ef-a238-c1ad09f4b1ad-prp03.jpeg',
    },
  ]

  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {prpContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 w-fit rounded-xl bg-[#A79356] px-4 py-1 text-lg text-white md:text-2xl">
                {item.badge}
              </h2>

              <p className="mb-4 text-base md:text-xl">{item.title}</p>

              <div className="prose prose-sm dark:prose-invert text-justify text-base leading-8">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="mb-10 max-h-[24rem] rounded-lg object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}

          <ServicesBtn />
        </div>
      </TracingBeam>
    </main>
  )
}
