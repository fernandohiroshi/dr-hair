import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import ServicesBtn from '@/components/view/ServicesBtn'

export default function FuePage() {
  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {fueContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 w-fit rounded-xl bg-[#A79356] px-4 py-1 text-lg text-white md:text-2xl">
                {item.badge}
              </h2>

              <p className="mb-4 text-base md:text-xl">{item.title}</p>

              <div className="prose prose-sm dark:prose-invert text-justify text-base leading-8">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="mb-10 max-h-[24rem] rounded-lg object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
          <ServicesBtn />
        </div>
      </TracingBeam>
    </main>
  )
}

const fueContent = [
  {
    title: 'Transplante Capilar FUE',
    description: (
      <>
        <p>
          O Transplante Capilar FUE é uma solução definitiva para a calvície, utilizando tecnologia avançada para
          restaurar os cabelos com naturalidade.
        </p>
        <ul>
          <li>Minimamente invasivo, sem cicatrizes lineares;</li>
          <li>Recuperação rápida e sem necessidade de internação;</li>
          <li>Resultados naturais e duradouros.</li>
        </ul>
      </>
    ),
    badge: 'Recupere sua confiança!',
    image: 'https://imgix.cosmicjs.com/f4e57f50-eaa1-11ef-a238-c1ad09f4b1ad-fue1.jpeg',
  },
  {
    title: 'Como é realizado?',
    description: (
      <>
        <ul>
          <li>O procedimento é feito sob anestesia local;</li>
          <li>Os folículos são extraídos um a um da área doadora;</li>
          <li>Os fios são implantados na região receptora de forma estratégica;</li>
          <li>A recuperação é rápida, com fechamento das microincisões em poucos dias.</li>
        </ul>
      </>
    ),
    badge: 'Entenda o processo',
    image: 'https://imgix.cosmicjs.com/a9b684c0-eaa1-11ef-a238-c1ad09f4b1ad-fue2.jpeg',
  },
  {
    title: 'Escolha com segurança',
    description: (
      <>
        <p>
          O sucesso do transplante depende da experiência do cirurgião e do cuidado em cada etapa do procedimento.
          Garantimos:
        </p>
        <ul>
          <li>Técnica avançada e precisa;</li>
          <li>Acompanhamento médico completo;</li>
          <li>Equipe altamente qualificada.</li>
        </ul>
        <p>Recupere sua autoestima com um tratamento seguro e eficaz. Agende sua consulta!</p>
      </>
    ),
    badge: 'Cuidado e experiência',
    image: 'https://imgix.cosmicjs.com/a869a2a0-e470-11ef-8a63-eb57d6c77a36-fue3.jpg',
  },
]
