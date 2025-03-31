'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export const Clinic = () => {
  // HOOK TO HANDLE MULTILINGUAL SUPPORT FOR THIS PAGE
  const t = useTranslations('Clinic')

  // REFERENCE FOR THE AUTOPLAY PLUGIN
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  // ARRAY CONTAINING THE IMAGE SOURCES FOR THE CAROUSEL
  const images = [
    'https://imgix.cosmicjs.com/e41cddd0-e448-11ef-8a63-eb57d6c77a36-frente.jpeg',
    'https://imgix.cosmicjs.com/e4a33980-e9a6-11ef-9da4-c1d07900a603-recepcao.jpg',
    'https://imgix.cosmicjs.com/e35017f0-e448-11ef-8a63-eb57d6c77a36-cirugia-py.jpeg',
    'https://imgix.cosmicjs.com/92458030-eaa0-11ef-af71-9552422268b6-clinic4.jpeg',
    'https://imgix.cosmicjs.com/8293af50-eabd-11ef-af71-9552422268b6-clinic05.jpg',
  ]

  return (
    <section className="scroll-mt-28 md:px-4" id="clinics">
      {/* HEADER SECTION WITH TITLE AND DESCRIPTION */}
      <div className="mb-8 md:mb-16">
        <h2 className="mb-2 text-xl font-semibold md:text-2xl">{t('title')}</h2>
        <p className="max-w-2xl text-justify text-xs md:text-sm lg:text-lg">{t('description')}</p>
      </div>

      {/* ADDRESS SECTION WITH A LINK TO GOOGLE MAP */}
      <div className="mb-8 flex flex-col gap-1">
        <h3 className="lg;text-lg text-sm md:text-base">{t('address')}</h3>

        <a
          href="https://www.google.com/maps/place/Dr+Hair+Transplante+Capilar/@-25.483108,-54.6208397,981m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94f685958537b513:0x663c07facbce1dd1!8m2!3d-25.4831129!4d-54.6182648!16s%2Fg%2F11x16zqkp6?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          title="Google Map"
          className="ml-2 text-sm font-semibold text-red-800 duration-300 ease-in-out hover:underline lg:text-lg"
        >
          {t('googleMap')}
        </a>
      </div>

      {/* CAROUSEL SECTION CONTAINING IMAGES */}
      <Carousel
        plugins={[plugin.current]} // APPLYING THE AUTOPLAY PLUGIN
        className="w-full max-w-7xl"
        onMouseEnter={plugin.current.stop} // PAUSING AUTOPLAY ON MOUSE ENTER
        onMouseLeave={plugin.current.reset} // RESUMING AUTOPLAY ON MOUSE LEAVE
      >
        <CarouselContent>
          {/* LOOPING OVER IMAGE SOURCES TO DISPLAY IN THE CAROUSEL */}
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square h-[18rem] w-full items-center justify-center md:h-[24rem] lg:h-[32rem] xl:h-[38rem]">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`} // DYNAMIC ALT TEXT FOR EACH IMAGE
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
        <CarouselPrevious /> {/* BUTTON TO GO TO THE PREVIOUS ITEM */}
        <CarouselNext /> {/* BUTTON TO GO TO THE NEXT ITEM */}
      </Carousel>
    </section>
  )
}
