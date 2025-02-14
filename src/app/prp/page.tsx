import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import ServicesBtn from '@/components/view/ServicesBtn'

export default function PrpPage() {
  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {prpContent.map((item, index) => (
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

const prpContent = [
  {
    title: 'PRP - Plasma Rico em Plaquetas',
    description: (
      <>
        <p>
          O PRP é um tratamento inovador que utiliza alta concentração de plaquetas em um volume mínimo de plasma para
          estimular o crescimento capilar.
        </p>
        <p>
          O processo envolve a centrifugação do sangue, separando os fatores de crescimento essenciais para a
          regeneração capilar.
        </p>
      </>
    ),
    badge: 'Revitalize seus cabelos!',
    image: 'https://imgix.cosmicjs.com/abb1e130-e7d0-11ef-8a63-eb57d6c77a36-prp1.jpg',
  },
  {
    title: 'Fatores de Crescimento',
    description: (
      <>
        <p>
          Os fatores de crescimento são substâncias fundamentais para estimular o crescimento dos cabelos. Entre os mais
          importantes estão:
        </p>
        <ul>
          <li>Fator de Crescimento Transformador Beta (TGF-B);</li>
          <li>Fator de Crescimento Derivado das Plaquetas (PDGF);</li>
          <li>Fatores de Crescimento Neural (NGF);</li>
          <li>Fator de Crescimento Semelhante à Insulina (IGF);</li>
          <li>Fator de Crescimento Epidérmico (EGF).</li>
        </ul>
      </>
    ),
    badge: 'Ciência e inovação',
    image: 'https://imgix.cosmicjs.com/abb0a8b0-e7d0-11ef-8a63-eb57d6c77a36-prp2.jpg',
  },
  {
    title: 'Protocolo Exclusivo Dr. Hair',
    description: (
      <>
        <p>O PRP é indicado para queda capilar, cabelos ralos e fracos, desde que haja folículos ativos na região.</p>
        <ul>
          <li>Aplicações mensais;</li>
          <li>Aplicação intradérmica com agulha 30G ou 32G;</li>
          <li>Mínimo de 3 sessões;</li>
          <li>Sessões de manutenção semestrais;</li>
          <li>Uso de 4 a 6 ml de PRP por sessão;</li>
          <li>Home-care: tônicos capilares e polivitamínicos personalizados;</li>
          <li>
            Tratamentos auxiliares: intradermoterapia, laser de baixa potência, carboxiterapia, ozonioterapia,
            microagulhamento e MMP.
          </li>
        </ul>
      </>
    ),
    badge: 'Tratamento personalizado',
    image: 'https://imgix.cosmicjs.com/4edecdf0-eaa6-11ef-a238-c1ad09f4b1ad-prp03.jpeg',
  },
]
