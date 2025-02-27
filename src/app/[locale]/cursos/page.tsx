import Image from 'next/image'
import { Timeline } from '@/components/ui/timeline'
import ImersaoFUE from '@/components/view/imersaoFueSections/ImersaoFue'
import { ContactForm } from '@/components/view/Form'
import { useTranslations } from 'next-intl'

export default function CursoPage() {
  const t = useTranslations('CursoPage')

  const items = [
    {
      title: t('sections.introduction.title'),
      content: (
        <div className="text-justify">
          <p className="mb-8 text-xs text-black/90 md:text-lg">{t('sections.introduction.content')}</p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://imgix.cosmicjs.com/1d9e79d0-e9f1-11ef-9da4-c1d07900a603-WhatsApp-Image-2025-02-07-at-15-52-24.jpeg"
              alt={t('imageAlt')}
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: t('sections.courses.title'),
      content: (
        <div className="text-justify">
          <ul className="mb-8 text-xs text-black/90 md:text-lg">
            <li>🔹 {t('sections.courses.botox')}</li>
            <li className="my-8">
              <Image
                src="https://imgix.cosmicjs.com/293705f0-eaa5-11ef-af71-9552422268b6-curso02.jpeg"
                alt={t('imageAlt')}
                width={500}
                height={500}
                className="max-h-[24rem] w-full rounded-lg object-cover"
              />
            </li>
            <li>🔹 {t('sections.courses.signals_removal')}</li>
            <li className="my-8">
              <Image
                src="https://imgix.cosmicjs.com/29361b90-eaa5-11ef-af71-9552422268b6-curso03.jpeg"
                alt={t('imageAlt')}
                width={500}
                height={500}
                className="max-h-[24rem] w-full rounded-lg object-cover"
              />
            </li>
            <li>🔹 {t('sections.courses.peeling')}</li>
          </ul>
        </div>
      ),
    },
    {
      title: t('sections.why_choose_us.title'),
      content: (
        <div className="text-justify">
          <ul className="mb-8 text-xs text-black/90 md:text-lg">
            {t.raw('sections.why_choose_us.advantages').map((adv: string, index: number) => (
              <li key={index}>🔹 {adv}</li>
            ))}
          </ul>
        </div>
      ),
    },
  ]

  return (
    <main className="mx-auto mt-8 max-w-screen-xl scroll-mt-24 px-2 py-16 md:mt-24 md:pt-24">
      <ImersaoFUE />
      <Timeline title={t('timelineTitle')} description={t('timelineDescription')} data={items} />
      <ContactForm />
    </main>
  )
}
