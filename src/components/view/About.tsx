import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { WhatsAppButtonShadcn } from './WhatsappBtn2'

export const About = () => {
  // HOOK TO HANDLE MULTILINGUAL SUPPORT FOR THIS PAGE
  const t = useTranslations('About')

  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-between gap-0 md:gap-8 lg:flex-row">
        {/* LEFT COLUMN CONTAINING TEXTUAL CONTENT */}
        <div className="mb-8 max-w-md lg:max-w-xl">
          {/* TITLE SECTION */}
          <h2 className="mb-4 text-lg font-semibold lg:text-3xl">{t('title')}</h2>

          {/* PARAGRAPH 1 */}
          <p className="text-justify text-xs md:text-sm lg:text-base">{t('paragraph1')}</p>
          <br />

          {/* PARAGRAPH 2 */}
          <p className="text-justify text-xs md:text-sm lg:text-base">{t('paragraph2')}</p>
          <br />

          {/* PARAGRAPH 3 */}
          <p className="text-justify text-xs md:text-sm lg:text-base">{t('paragraph3')}</p>
          <br />

          {/* PARAGRAPH 4 WITH ADDITIONAL SPACING */}
          <p className="mb-4 text-justify text-xs md:text-sm lg:text-base">{t('paragraph4')}</p>

          {/* WHATSAPP BUTTON FOR QUICK CONTACT */}
          <WhatsAppButtonShadcn />
        </div>

        {/* RIGHT COLUMN CONTAINING IMAGE */}
        <div className="overflow-hidden rounded bg-[#E4DDD1] shadow-2xl">
          <Image
            src="https://imgix.cosmicjs.com/c050f7d0-061f-11f0-9871-8341aa2caafe-about.jpeg"
            width={500}
            height={500}
            alt="About Image"
            quality={100}
            className="max-h-[30rem] scale-95 rounded object-cover object-top md:max-h-[36rem]"
          />
        </div>
      </div>
    </section>
  )
}
