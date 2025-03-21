import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { useTranslations } from 'next-intl'
import { ServicesBtn } from '@/components/view/ServicesBtn'

export default function FotobiomodulacaoPage() {
  const t = useTranslations('FotobiomodulacaoPage')

  const fotobiomodulacaoContent = [
    {
      title: t('sections.benefits_title'),
      description: (
        <>
          <ul>
            <li>{t('sections.benefits_description.0')}</li>
            <li>{t('sections.benefits_description.1')}</li>
            <li>{t('sections.benefits_description.2')}</li>
            <li>{t('sections.benefits_description.3')}</li>
          </ul>
        </>
      ),
      badge: t('sections.benefits_title'),
      image: 'https://imgix.cosmicjs.com/db741120-e7d2-11ef-b333-e101bec29f3d-laser1.jpg',
    },
    {
      title: t('sections.efficacy_title'),
      description: (
        <>
          <p>{t('sections.efficacy_description')}</p>
        </>
      ),
      badge: t('sections.efficacy_title'),
      image: 'https://imgix.cosmicjs.com/db7c4e80-e7d2-11ef-b333-e101bec29f3d-lase2.jpg',
    },
    {
      title: t('sections.circulation_title'),
      description: (
        <>
          <ul>
            <li>{t('sections.circulation_description.0')}</li>
            <li>{t('sections.circulation_description.1')}</li>
            <li>{t('sections.circulation_description.2')}</li>
          </ul>
        </>
      ),
      badge: t('sections.circulation_title'),
      image: 'https://imgix.cosmicjs.com/db54c950-e7d2-11ef-b333-e101bec29f3d-laser2.jpg',
    },
    {
      title: t('sections.custom_protocol_title'),
      description: (
        <>
          <ul>
            <li>{t('sections.custom_protocol_description.0')}</li>
            <li>{t('sections.custom_protocol_description.1')}</li>
            <li>{t('sections.custom_protocol_description.2')}</li>
            <li>{t('sections.custom_protocol_description.3')}</li>
            <li>{t('sections.custom_protocol_description.4')}</li>
            <li>{t('sections.custom_protocol_description.5')}</li>
            <li>{t('sections.custom_protocol_description.6')}</li>
            <li>{t('sections.custom_protocol_description.7')}</li>
          </ul>
        </>
      ),
      badge: t('sections.custom_protocol_title'),
      image: 'https://imgix.cosmicjs.com/025538f0-e7d3-11ef-b333-e101bec29f3d-laser4.png',
    },
  ]

  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {fotobiomodulacaoContent.map((item, index) => (
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
