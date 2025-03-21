'use client'

import { motion } from 'framer-motion'
import { ImagesSlider } from '@/components/ui/images-slider'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Hero = () => {
  const t = useTranslations('Hero')

  const images = [
    'https://imgix.cosmicjs.com/1bbd26b0-eaa1-11ef-a238-c1ad09f4b1ad-h01.jpeg',
    'https://imgix.cosmicjs.com/1bbead50-eaa1-11ef-a238-c1ad09f4b1ad-h02.jpeg',
    'https://imgix.cosmicjs.com/1bc4eee0-eaa1-11ef-a238-c1ad09f4b1ad-h03.jpeg',
  ]

  const imagesMobile = [
    'https://imgix.cosmicjs.com/1bee1c50-e8e1-11ef-b333-e101bec29f3d-h01.jpeg',
    'https://imgix.cosmicjs.com/d8278e40-e8cf-11ef-b333-e101bec29f3d-mobile2.jpeg',
    'https://imgix.cosmicjs.com/fe3836f0-e8e0-11ef-b333-e101bec29f3d-h04.jpeg',
    'https://imgix.cosmicjs.com/fe392150-e8e0-11ef-b333-e101bec29f3d-h03.jpeg',
  ]

  const animationProps = {
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const TextSection = ({ title, description }: { title: string; description: string }) => (
    <motion.div {...animationProps} className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <motion.p className="flex animate-pulse text-center text-xl font-bold text-white md:text-3xl lg:text-4xl">
        {title} <span className="animate-bounce text-white">.</span>
      </motion.p>
      <motion.p className="py-2 text-center text-xs font-semibold text-white md:max-w-xl md:py-4 md:text-sm lg:max-w-2xl lg:text-base">
        {description}
      </motion.p>
      <Link
        href="/cursos"
        title="Saiba mais!"
        className="relative mx-auto rounded bg-[#A79356] px-4 py-3 text-center text-white shadow-xl backdrop-blur-sm duration-300 ease-in-out hover:brightness-125"
      >
        <span className="items-centertext-xs flex flex-col md:text-sm">
          <span className="text-base font-bold">{t('immerseTitle')}</span>
          <span className="font-semibold">{t('immerseDescription')}</span>
        </span>
      </Link>
    </motion.div>
  )

  return (
    <div className="relative">
      {/* Slider Desktop */}
      <div className="hidden md:block">
        <ImagesSlider
          className="mt-16 h-[20rem] px-2 md:mt-20 md:h-[24rem] md:px-0 lg:mt-24 lg:h-[30rem] xl:h-[40rem]"
          images={images}
        >
          <TextSection title={t('title')} description={t('description')} />
        </ImagesSlider>
      </div>

      {/* Slider Mobile */}
      <div className="block md:hidden">
        <ImagesSlider className="mt-16 h-[20rem] px-2" images={imagesMobile}>
          <TextSection title={t('mobileTitle')} description={t('mobileDescription')} />
        </ImagesSlider>
      </div>
    </div>
  )
}
