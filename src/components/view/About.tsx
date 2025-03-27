import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { WhatsAppButtonShadcn } from './WhatsappBtn2'

export const About = () => {
  // HOOK TO HANDLE MULTILINGUAL SUPPORT FOR THIS PAGE
  const t = useTranslations('About')

  return (
    <section className="mb-24 mt-8 md:mt-0">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* LEFT COLUMN CONTAINING TEXTUAL CONTENT */}
        <div className="mb-8 max-w-md lg:max-w-xl">
          {/* TITLE SECTION */}
          <h1 className="mb-6 text-xl font-semibold lg:text-3xl">{t('title')}</h1>

          {/* PARAGRAPH 1 */}
          <p className="text-justify text-sm lg:text-base">{t('paragraph1')}</p>
          <br />

          {/* PARAGRAPH 2 */}
          <p className="text-justify text-sm lg:text-base">{t('paragraph2')}</p>
          <br />

          {/* PARAGRAPH 3 */}
          <p className="text-justify text-sm lg:text-base">{t('paragraph3')}</p>
          <br />

          {/* PARAGRAPH 4 WITH ADDITIONAL SPACING */}
          <p className="mb-8 text-justify text-sm lg:text-base">{t('paragraph4')}</p>

          {/* WHATSAPP BUTTON FOR QUICK CONTACT */}
          <WhatsAppButtonShadcn />
        </div>

        {/* RIGHT COLUMN CONTAINING IMAGE */}
        <div className="overflow-hidden rounded shadow-2xl brightness-110">
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
