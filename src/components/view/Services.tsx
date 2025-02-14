import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import Image from 'next/image'
import { IconDeviceDesktop, IconDroplet, IconMedicineSyrup, IconNeedle } from '@tabler/icons-react'
import { PiMouseLeftClickLight } from 'react-icons/pi'

interface SkeletonProps {
  imageSrc: string
}

export function Services() {
  return (
    <section id="services" className="mb-16 scroll-mt-28 md:mb-24">
      <h2 className="mb-2 text-xl font-semibold md:text-2xl">Conheça nossos serviços</h2>
      <p className="mb-8 max-w-2xl text-justify text-xs md:text-lg">
        Oferecemos tratamentos capilares inovadores e minimamente invasivos para restaurar a saúde e a aparência dos
        seus cabelos. Descubra soluções personalizadas com tecnologia de ponta para estimular o crescimento capilar e
        fortalecer os fios.
      </p>
      <BentoGrid className="mx-auto max-w-screen-xl auto-rows-[20rem] md:auto-rows-[28rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            // description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

const Skeleton: React.FC<SkeletonProps> = ({ imageSrc }) => (
  <div className="relative flex h-full min-h-[6rem] w-full flex-1 rounded-xl">
    <Image
      src={imageSrc}
      alt="Background"
      width={500}
      height={500}
      className="relative h-full max-h-[24rem] w-full rounded-xl object-cover"
      loading="lazy"
    />
    <div className="absolute right-0 top-0 flex h-full max-h-[24rem] w-full items-start justify-end rounded-xl bg-black/20 p-4 text-4xl text-white opacity-0 duration-300 ease-in-out hover:opacity-100">
      <PiMouseLeftClickLight size={32} className="animate-bounce" />
    </div>
  </div>
)

const items = [
  {
    title: 'Transplante (FUE)',
    // description:
    //   "Recupere seus cabelos com a técnica FUE, natural e minimamente invasiva.",
    header: <Skeleton imageSrc="https://imgix.cosmicjs.com/783d3240-e439-11ef-8a63-eb57d6c77a36-fue.jpg" />,
    className: 'md:col-span-2',
    icon: <IconNeedle className="h-4 w-4 text-neutral-500" />,
    href: '/fue',
  },
  {
    title: 'Tratamento (PRP)',
    // description:
    //   "Fortalece e estimula o crescimento capilar com regeneração celular.",
    header: (
      <Skeleton imageSrc="https://imgix.cosmicjs.com/b339dc60-e3c9-11ef-ab06-8dbcfab76004-Plasma-Rico-em-Plaquetas-PRP.jpg" />
    ),
    className: 'md:col-span-1',
    icon: <IconDroplet className="h-4 w-4 text-neutral-500" />,
    href: '/prp',
  },
  {
    title: 'Microfusao de medicamentos',
    // description: "Nutre e fortalece os fios, estimulando a saúde capilar.",
    header: (
      <Skeleton imageSrc="https://imgix.cosmicjs.com/b33e4930-e3c9-11ef-ab06-8dbcfab76004-Microfusao-de-medicamentos---MMP.jpg" />
    ),
    className: 'md:col-span-1',
    icon: <IconMedicineSyrup className="h-4 w-4 text-neutral-500" />,
    href: '/mmp',
  },
  {
    title: 'Fotobiomodulacao a Laser',
    // description:
    //   "Laser estimula o couro cabeludo e melhora a circulação para o crescimento capilar.",
    header: (
      <Skeleton imageSrc="https://imgix.cosmicjs.com/18b6d400-e3dc-11ef-8a63-eb57d6c77a36-Fotobiomodulacao-a-Laser.jpg" />
    ),
    className: 'md:col-span-2',
    icon: <IconDeviceDesktop className="h-4 w-4 text-neutral-500" />,
    href: '/fotobiomodulacao',
  },
]
