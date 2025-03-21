import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl'

export const About = () => {
  const t = useTranslations('About')

  return (
    <section className="mb-16 md:mb-24">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-8 max-w-md lg:max-w-xl">
          <h1 className="mb-6 text-2xl font-semibold lg:text-3xl">{t('title')}</h1>
          <p className="text-justify text-sm lg:text-base">{t('paragraph1')}</p>
          <br />
          <p className="text-justify text-sm lg:text-base">{t('paragraph2')}</p>
          <br />
          <p className="text-justify text-sm lg:text-base">{t('paragraph3')}</p>
          <br />
          <p className="mb-8 text-justify text-sm lg:text-base">{t('paragraph4')}</p>

          <Link href="#contact">
            <Button variant="outline">{t('buttonText')}</Button>
          </Link>
        </div>

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
