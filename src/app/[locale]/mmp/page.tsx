import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { useTranslations } from 'next-intl'
import { ServicesBtn } from '@/components/view/ServicesBtn'

// MAIN COMPONENT FOR THE MMP PAGE
export default function MmpPage() {
  // HOOK FOR TRANSLATIONS
  const t = useTranslations('MmpPage.sections')

  // ARRAY CONTAINING CONTENT SECTIONS FOR THE PAGE
  const mmpContent = [
    {
      title: t('mmp_title'),
      description: (
        <>
          <p>{t('mmp_description.0')}</p>
          <p>{t('mmp_description.1')}</p>
        </>
      ),
      badge: t('mmp_badge'),
      image: 'https://imgix.cosmicjs.com/227cf6c0-e7d5-11ef-8a63-eb57d6c77a36-mmp1.jpg',
    },
    {
      title: t('how_mmp_works_title'),
      description: (
        <ul>
          <li>{t('how_mmp_works_description.0')}</li>
          <li>{t('how_mmp_works_description.1')}</li>
          <li>{t('how_mmp_works_description.2')}</li>
          <li>{t('how_mmp_works_description.3')}</li>
        </ul>
      ),
      badge: t('how_mmp_works_badge'),
      image: 'https://imgix.cosmicjs.com/22528b60-e7d5-11ef-8a63-eb57d6c77a36-mmp3.jpg',
    },
    {
      title: t('exclusive_protocol_title'),
      description: (
        <ul>
          <li>{t('exclusive_protocol_description.0')}</li>
          <li>{t('exclusive_protocol_description.1')}</li>
          <li>{t('exclusive_protocol_description.2')}</li>
          <li>{t('exclusive_protocol_description.3')}</li>
          <li>{t('exclusive_protocol_description.4')}</li>
          <li>{t('exclusive_protocol_description.5')}</li>
          <li>{t('exclusive_protocol_description.6')}</li>
          <li>{t('exclusive_protocol_description.7')}</li>
        </ul>
      ),
      badge: t('exclusive_protocol_badge'),
      image: 'https://imgix.cosmicjs.com/ac75b280-eaa6-11ef-a238-c1ad09f4b1ad-mmp3.jpeg',
    },
  ]

  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {/* LOOP THROUGH CONTENT SECTIONS AND RENDER THEM */}
          {mmpContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {/* SECTION TITLE WITH STYLED BADGE */}
              <h2 className="mb-4 w-fit rounded-xl bg-[#A79356] px-4 py-1 text-lg text-white md:text-2xl">
                {item.badge}
              </h2>

              {/* SECTION HEADER */}
              <p className="mb-4 text-base md:text-xl">{item.title}</p>

              {/* SECTION CONTENT */}
              <div className="prose prose-sm dark:prose-invert text-justify text-base leading-8">
                {/* IMAGE DISPLAY IF AVAILABLE */}
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
          {/* BUTTON TO NAVIGATE TO SERVICES PAGE */}
          <ServicesBtn />
        </div>
      </TracingBeam>
    </main>
  )
}
