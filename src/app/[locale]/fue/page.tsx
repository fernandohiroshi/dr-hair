import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { useTranslations } from 'next-intl'
import { ServicesBtn } from '@/components/view/ServicesBtn'

export default function FuePage() {
  const t = useTranslations('FuePage')

  const fueContent = [
    {
      title: t('sections.transplant_title'),
      description: (
        <>
          <p>{t('sections.transplant_description.0')}</p>
          <ul>
            <li>{t('sections.transplant_description.1')}</li>
            <li>{t('sections.transplant_description.2')}</li>
            <li>{t('sections.transplant_description.3')}</li>
          </ul>
        </>
      ),
      badge: t('sections.transplant_badge'),
      image: 'https://imgix.cosmicjs.com/f4e57f50-eaa1-11ef-a238-c1ad09f4b1ad-fue1.jpeg',
    },
    {
      title: t('sections.how_it_is_done_title'),
      description: (
        <>
          <ul>
            <li>{t('sections.how_it_is_done_description.0')}</li>
            <li>{t('sections.how_it_is_done_description.1')}</li>
            <li>{t('sections.how_it_is_done_description.2')}</li>
            <li>{t('sections.how_it_is_done_description.3')}</li>
          </ul>
        </>
      ),
      badge: t('sections.how_it_is_done_badge'),
      image: 'https://imgix.cosmicjs.com/a9b684c0-eaa1-11ef-a238-c1ad09f4b1ad-fue2.jpeg',
    },
    {
      title: t('sections.choose_safely_title'),
      description: (
        <>
          <p>{t('sections.choose_safely_description.0')}</p>
          <ul>
            <li>{t('sections.choose_safely_description.1')}</li>
            <li>{t('sections.choose_safely_description.2')}</li>
            <li>{t('sections.choose_safely_description.3')}</li>
          </ul>
          <p>{t('sections.choose_safely_description.4')}</p>
        </>
      ),
      badge: t('sections.choose_safely_badge'),
      image: 'https://imgix.cosmicjs.com/a869a2a0-e470-11ef-8a63-eb57d6c77a36-fue3.jpg',
    },
  ]

  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {fueContent.map((item, index) => (
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
