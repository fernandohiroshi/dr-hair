'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export function Clinic() {
  const t = useTranslations('Clinic')
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  const images = [
    'https://imgix.cosmicjs.com/e41cddd0-e448-11ef-8a63-eb57d6c77a36-frente.jpeg',
    'https://imgix.cosmicjs.com/e4a33980-e9a6-11ef-9da4-c1d07900a603-recepcao.jpg',
    'https://imgix.cosmicjs.com/e35017f0-e448-11ef-8a63-eb57d6c77a36-cirugia-py.jpeg',
    'https://imgix.cosmicjs.com/92458030-eaa0-11ef-af71-9552422268b6-clinic4.jpeg',
    'https://imgix.cosmicjs.com/8293af50-eabd-11ef-af71-9552422268b6-clinic05.jpg',
  ]

  return (
    <section className="scroll-mt-28 md:px-4" id="clinics">
      <div className="mb-8 md:mb-16">
        <h2 className="mb-2 text-xl font-semibold md:text-2xl">{t('title')}</h2>
        <p className="max-w-2xl text-justify text-xs md:text-sm lg:text-lg">{t('description')}</p>
      </div>

      <div className="mb-8 flex flex-col gap-1">
        <h3 className="lg;text-lg text-sm md:text-base">{t('address')}</h3>

        <a
          href="https://maps.app.goo.gl/mx9HA18hSStDPDLp6"
          title="Google Map"
          className="ml-2 text-sm text-red-900 duration-300 ease-in-out hover:underline lg:text-lg"
        >
          {t('googleMap')}
        </a>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-7xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square h-[18rem] w-full items-center justify-center md:h-[24rem] lg:h-[32rem] xl:h-[38rem]">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="h-full w-full bg-cover object-center"
                    quality={100}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
