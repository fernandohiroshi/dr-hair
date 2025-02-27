import { useTranslations } from 'next-intl'
import Link from 'next/link'
import FueSection1 from './sections/fue-section1'
import FueSection2 from './sections/fue-section2'
import FueSection3 from './sections/fue-section3'
import FueSection4 from './sections/fue-section4'

export default function ImersaoFUE() {
  const t = useTranslations('ImersaoFUE')

  return (
    <section className="mx-auto mb-8 max-w-screen-xl rounded-xl px-4 py-8 shadow-2xl md:mb-16 md:py-16">
      <FueSection1 />
      <FueSection2 />
      <FueSection3 />
      <FueSection4 />

      <div id="formulario" className="mt-12 text-center">
        <h3 className="text-md mb-8 font-semibold text-black md:text-xl">{t('title')}</h3>
        <Link
          href="#form"
          className="max-w-fit cursor-pointer rounded-full bg-[#f5f2ed7c] px-4 py-2 text-lg font-semibold text-black shadow-lg transition duration-300 hover:bg-[#A79356] hover:text-white"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  )
}
