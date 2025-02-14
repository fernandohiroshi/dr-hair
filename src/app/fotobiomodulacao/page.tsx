import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import ServicesBtn from '@/components/view/ServicesBtn'

export default function FotobiomodulacaoPage() {
  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {fotobiomodulacaoContent.map((item, index) => (
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

const fotobiomodulacaoContent = [
  {
    title: 'Laser de Baixa Potência',
    description: (
      <>
        <ul>
          <li>Estimula a atividade celular;</li>
          <li>Promove reparação e regeneração tecidual;</li>
          <li>Acelera crescimento, espessamento e fortalecimento capilar;</li>
          <li>Aumenta energia disponível para as células do cabelo.</li>
        </ul>
      </>
    ),
    badge: 'Benefícios do Tratamento',
    image: 'https://imgix.cosmicjs.com/db741120-e7d2-11ef-b333-e101bec29f3d-laser1.jpg',
  },
  {
    title: 'Tratamento com Laser',
    description: (
      <>
        <p>
          O laser de baixa potência é uma tecnologia aprovada e com comprovação científica para o tratamento capilar.
          Além da calvície e da queda de cabelos, o laser pode ser aplicado após o transplante capilar, auxiliando na
          cicatrização, regeneração e desenvolvimento dos fios transplantados.
        </p>
      </>
    ),
    badge: 'Eficácia Comprovada',
    image: 'https://imgix.cosmicjs.com/db7c4e80-e7d2-11ef-b333-e101bec29f3d-lase2.jpg',
  },
  {
    title: 'Irrigação Sanguínea',
    description: (
      <>
        <ul>
          <li>Aumento da irrigação sanguínea do couro cabeludo;</li>
          <li>O laser capilar induz a liberação do óxido nítrico, aumentando a dilatação dos vasos sanguíneos;</li>
          <li>A melhora do fluxo sanguíneo nutre e ativa os folículos capilares, promovendo a saúde capilar.</li>
        </ul>
      </>
    ),
    badge: 'Melhoria na Circulação',
    image: 'https://imgix.cosmicjs.com/db54c950-e7d2-11ef-b333-e101bec29f3d-laser2.jpg',
  },
  {
    title: 'Protocolo Exclusivo Dr. Hair',
    description: (
      <>
        <ul>
          <li>Queda capilar, cabelos ralos e fracos (folículos ativos no local);</li>
          <li>Pós-transplante capilar;</li>
          <li>Aplicações semanais/mensais;</li>
          <li>Aplicação no couro cabeludo (indolor);</li>
          <li>Mínimo de 3 sessões;</li>
          <li>Sessões de manutenção semestrais;</li>
          <li>Home-care: tônicos capilares e polivitamínicos (personalizado);</li>
          <li>Tratamentos auxiliares: intradermoterapia, PRP, carboxiterapia, ozonioterapia, microagulhamento, MMP.</li>
        </ul>
      </>
    ),
    badge: 'Cuidados Personalizados',
    image: 'https://imgix.cosmicjs.com/025538f0-e7d3-11ef-b333-e101bec29f3d-laser4.png',
  },
]
