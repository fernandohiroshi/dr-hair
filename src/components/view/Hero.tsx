'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { ImagesSlider } from '@/components/ui/images-slider'
import { IoLogoWhatsapp } from 'react-icons/io'

export function Hero() {
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

  return (
    <div className="relative">
      {/* Slider para telas médias e maiores */}
      <div className="hidden md:block">
        <ImagesSlider
          className="mt-16 h-[20rem] px-2 md:mt-20 md:h-[24rem] md:px-0 lg:mt-24 lg:h-[30rem] xl:h-[40rem]"
          images={images}
        >
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
          >
            <motion.p className="flex animate-pulse text-center text-xl font-bold text-white md:text-3xl lg:text-4xl">
              Recupere Sua Confiança <br /> com DR Hair <span className="animate-bounce text-white">.</span>
            </motion.p>
            <motion.p className="py-2 text-center text-xs font-semibold text-white md:max-w-xl md:py-4 md:text-sm lg:max-w-xl lg:text-base">
              Transplante capilar natural e definitivo.
            </motion.p>
            <a
              href="https://wa.me/5545991280101"
              className="relative mx-auto mt-2 rounded-2xl border border-emerald-500/40 bg-emerald-500 px-4 py-2 text-center text-white backdrop-blur-sm duration-300 ease-in-out hover:bg-emerald-400"
            >
              <span className="flex items-center gap-4 text-xs font-semibold md:text-base">
                Fale Conosco <IoLogoWhatsapp size={24} />
              </span>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            </a>
          </motion.div>
        </ImagesSlider>
      </div>
      {/* Slider para telas menores */}
      <div className="block md:hidden">
        <ImagesSlider className="mt-16 h-[20rem] px-2" images={imagesMobile}>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center"
          >
            <motion.p className="flex animate-pulse text-center text-xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
              Recupere Sua Confiança <br /> com DR Hair <span className="animate-bounce text-white">.</span>
            </motion.p>
            <motion.p className="py-2 text-center text-xs font-semibold text-white md:max-w-xl md:py-4 md:text-sm lg:max-w-2xl lg:text-base">
              Transplantes capilares naturais e duradouros.
            </motion.p>
            <a
              href="https://wa.me/5545991280101"
              className="relative mx-auto mt-2 rounded-2xl border border-emerald-500/40 bg-emerald-500 px-4 py-2 text-center text-white backdrop-blur-sm duration-300 ease-in-out hover:bg-emerald-400"
            >
              <span className="flex items-center gap-4 text-xs font-semibold md:text-base">
                Fale Conosco <IoLogoWhatsapp size={24} />
              </span>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            </a>
          </motion.div>
        </ImagesSlider>
      </div>
    </div>
  )
}
