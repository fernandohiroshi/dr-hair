import Image from 'next/image'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import AssessmentBtn from '@/components/view/AssessmentBtn'

export default function AntesEDepoisPage() {
  const items = [
    {
      title: 'Sua Transformação Começa Aqui',
      content: (
        <div className="text-justify">
          <p className="font-base mb-8 text-xs text-black/90 md:text-lg">
            A queda de cabelo pode afetar não apenas a aparência, mas também a autoestima e a confiança. O transplante
            capilar é a solução definitiva para recuperar fios naturais e um visual rejuvenescido.
          </p>
          <p className="font-base my-8 text-xs text-black/90 md:text-lg">
            Muitas pessoas chegam à nossa clínica preocupadas com a rarefação capilar, entradas acentuadas ou calvície
            avançada. A insegurança com a aparência pode impactar desde a vida social até o desempenho profissional.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://imgix.cosmicjs.com/382c65d0-eaa2-11ef-a238-c1ad09f4b1ad-antesedepois01.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
            <p className="font-base mb-8 text-xs text-black/90 md:text-lg">
              Com a técnica avançada de transplante capilar FUE, os fios são implantados estrategicamente para um
              resultado natural e definitivo. Após alguns meses, o cabelo cresce com força e densidade, proporcionando
              um visual mais jovem e harmonioso.
              <br />
              Aqui na Dr. Hair, acompanhamos de perto cada paciente para garantir um procedimento seguro e resultados
              surpreendentes.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Antes e Depois',
      content: (
        <div className="text-justify">
          <p className="font-base mb-8 text-xs text-black/90 md:text-lg">
            🔹 Confira nossas fotos de antes e depois e veja como podemos transformar sua autoestima!
          </p>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Image
              src="https://imgix.cosmicjs.com/3e2972c0-eaa2-11ef-a238-c1ad09f4b1ad-antesdepois1.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
            <Image
              src="https://imgix.cosmicjs.com/3e28fd90-eaa2-11ef-a238-c1ad09f4b1ad-antesdepois2.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
            <Image
              src="https://imgix.cosmicjs.com/3e283a40-eaa2-11ef-a238-c1ad09f4b1ad-antesdepois3.jpeg"
              alt="Estética avançada"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Agende sua Avaliação',
      content: (
        <div className="flex flex-col items-end text-justify">
          <p className="font-base mb-8 text-xs text-black/90 md:text-lg">
            Quer saber se o transplante capilar é para você? Agende uma avaliação e dê o primeiro passo para sua
            transformação!
          </p>
          <AssessmentBtn />
        </div>
      ),
    },
  ]

  return (
    <main className="mx-auto mt-8 max-w-screen-xl scroll-mt-24 px-2 py-16 md:mt-24 md:pt-24">
      <Timeline
        title="Antes e Depois"
        description="Veja os resultados reais dos nossos pacientes que realizaram o transplante capilar."
        data={items}
      />
    </main>
  )
}
