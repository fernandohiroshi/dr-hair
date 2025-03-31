'use client'

import { motion } from 'framer-motion'
import { ImagesSlider } from '@/components/ui/images-slider'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export const Hero = () => {
  // USING NEXT-INTL TO GET THE TRANSLATIONS FOR THE HERO SECTION
  const t = useTranslations('Hero')

  // IMAGE URLS FOR DESKTOP VIEW
  const images = [
    'https://imgix.cosmicjs.com/194eafe0-0bec-11f0-a62c-63df89a79a6a-heroImg2.jpeg',
    'https://imgix.cosmicjs.com/193d23b0-0bec-11f0-a62c-63df89a79a6a-heroImg1.jpeg',
    'https://imgix.cosmicjs.com/e6ce8650-0e37-11f0-a62c-63df89a79a6a-heroImg3.jpeg',
  ]

  // IMAGE URLS FOR MOBILE VIEW
  const imagesMobile = [
    'https://imgix.cosmicjs.com/194eafe0-0bec-11f0-a62c-63df89a79a6a-heroImg2.jpeg',
    'https://imgix.cosmicjs.com/194eafe0-0bec-11f0-a62c-63df89a79a6a-heroImg2.jpeg',
    'https://imgix.cosmicjs.com/193d23b0-0bec-11f0-a62c-63df89a79a6a-heroImg1.jpeg',
  ]

  // ANIMATION PROPS FOR TEXT TRANSITIONS
  const animationProps = {
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  // TEXT SECTION COMPONENT FOR HERO
  const TextSection = ({ title, description }: { title: string; description: string }) => (
    <motion.div {...animationProps} className="absolute inset-0 z-50 flex flex-col items-center justify-center p-4">
      {/* TITLE ANIMATION */}
      <motion.p className="hidden animate-pulse text-center text-xl font-bold md:flex md:text-3xl md:text-black">
        {title} <span className="animate-bounce md:text-black">.</span>
      </motion.p>
      {/* DESCRIPTION ANIMATION */}
      <motion.p className="hidden py-2 text-center text-xs font-semibold text-black/60 md:flex md:max-w-xl md:py-2 md:text-sm lg:max-w-2xl lg:text-base">
        {description}
      </motion.p>
      {/* LINK BUTTON */}
      <Link
        href="/cursos"
        title="Saiba mais!"
        className="relative mx-auto rounded bg-[#A79356]/80 px-4 py-2 text-center text-white shadow-xl backdrop-blur-sm duration-300 ease-in-out hover:brightness-125"
      >
        <span className="flex flex-col items-center">
          <span className="text-lg font-bold">{t('immerseTitle')}</span>
          <span className="text-sm font-semibold">{t('immerseDescription')}</span>
        </span>
      </Link>
    </motion.div>
  )

  return (
    <div className="relative mb-4 mt-4">
      {/* SLIDER FOR DESKTOP VIEW */}
      <div className="hidden md:block">
        <ImagesSlider className="h-[20rem] md:h-[24rem] lg:h-[30rem] xl:h-[40rem]" images={images}>
          <TextSection title={t('title')} description={t('description')} />
        </ImagesSlider>
      </div>

      {/* SLIDER FOR MOBILE VIEW */}
      <div className="mt-16 block md:hidden">
        {/* MOBILE TITLE */}
        <p className="flex animate-pulse justify-center text-center text-xl font-bold md:text-3xl md:text-black">
          {t('mobileTitle')} <span className="animate-bounce md:text-black">.</span>
        </p>
        {/* MOBILE DESCRIPTION */}
        <p className="py-2 text-center text-xs font-semibold text-black/60 md:max-w-xl md:py-2 md:text-sm lg:max-w-2xl lg:text-base">
          {t('mobileDescription')}
        </p>
        <ImagesSlider className="mt-8 h-[20rem] px-2" images={imagesMobile}>
          <TextSection title={t('mobileTitle')} description={t('mobileDescription')} />
        </ImagesSlider>
      </div>
    </div>
  )
}
