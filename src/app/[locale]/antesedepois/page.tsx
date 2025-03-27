import Image from 'next/image'
import { Timeline } from '@/components/ui/timeline'
import { useTranslations } from 'next-intl'
import { AssessmentBtn } from '@/components/view/AssessmentBtn'
import { WhatsAppButtonShadcn } from '@/components/view/WhatsappBtn2'

export default function AntesEDepoisPage() {
  // HOOK TO HANDLE MULTILINGUAL SUPPORT FOR THIS PAGE
  const t = useTranslations('AntesEDepoisPage')

  // ARRAY CONTAINING THE CONTENT FOR EACH SECTION
  const items = [
    {
      title: t('sections.transformation_title'),
      content: (
        <div className="text-justify">
          {/* TRANSFORMATION SECTION WITH CONTENT AND IMAGE */}
          <p className="font-base mb-8 text-xs text-black/90 md:text-lg">{t('sections.transformation_content')}</p>
          <p className="font-base my-8 text-xs text-black/90 md:text-lg">{t('sections.concern_title')}</p>
          <p className="font-base my-8 text-xs text-black/90 md:text-lg">{t('sections.concern_content')}</p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://imgix.cosmicjs.com/382c65d0-eaa2-11ef-a238-c1ad09f4b1ad-antesedepois01.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
            <p className="font-base mb-8 text-xs text-black/90 md:text-lg">
              {t('sections.procedure_title')}
              <br />
              {t('sections.procedure_content')}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t('sections.before_after_title'),
      content: (
        <div className="text-justify">
          {/* BEFORE AND AFTER IMAGE SECTION */}
          <p className="font-base mb-8 text-xs text-black/90 md:text-lg">{t('sections.before_after_content')}</p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Image
              src="https://imgix.cosmicjs.com/3e2972c0-eaa2-11ef-a238-c1ad09f4b1ad-antesdepois1.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
            <Image
              src="https://imgix.cosmicjs.com/3e28fd90-eaa2-11ef-a238-c1ad09f4b1ad-antesdepois2.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
            <Image
              src="https://imgix.cosmicjs.com/3e283a40-eaa2-11ef-a238-c1ad09f4b1ad-antesdepois3.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: t('sections.schedule_assessment_title'),
      content: (
        <div className="flex flex-col items-end text-justify">
          {/* WHATSAPP BUTTON */}
          <p className="font-base mb-8 text-xs text-black/90 md:text-lg">{t('sections.schedule_assessment_content')}</p>
          <WhatsAppButtonShadcn />
        </div>
      ),
    },
  ]

  return (
    <main className="mx-auto mt-8 max-w-screen-xl scroll-mt-24 px-2 py-16 md:mt-24 md:pt-24">
      {/* TIMELINE SECTION WITH DATA FROM `items` ARRAY */}
      <Timeline title={t('timelineTitle')} description={t('timelineDescription')} data={items} />
    </main>
  )
}
