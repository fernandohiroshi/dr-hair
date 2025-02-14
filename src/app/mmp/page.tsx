import Image from 'next/image'
import { TracingBeam } from '@/components/ui/tracing-beam'
import ServicesBtn from '@/components/view/ServicesBtn'

export default function MmpPage() {
  return (
    <main className="mx-auto mt-24 max-w-screen-xl scroll-mt-24 px-2 py-16 md:pt-24">
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl px-4 pt-4 antialiased">
          {mmpContent.map((item, index) => (
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

const mmpContent = [
  {
    title: 'MMP - Microinfusão de Medicamentos na Pele',
    description: (
      <>
        <p>
          O MMP capilar, também conhecido como Microinfusão de Medicamentos na Pele, é um procedimento inovador que vem
          ganhando destaque no tratamento da queda de cabelo e outros problemas capilares.
        </p>
        <p>
          Ele consiste na aplicação direta de medicamentos no couro cabeludo, de forma precisa e controlada, visando
          estimular o crescimento capilar e melhorar a saúde do couro cabeludo.
        </p>
      </>
    ),
    badge: 'Tratamento Avançado',
    image: 'https://imgix.cosmicjs.com/227cf6c0-e7d5-11ef-8a63-eb57d6c77a36-mmp1.jpg',
  },
  {
    title: 'Como funciona o MMP capilar?',
    description: (
      <>
        <ul>
          <li>
            O MMP capilar é realizado com um dispositivo especial com microagulhas, permitindo a aplicação precisa dos
            medicamentos.
          </li>
          <li>
            Os medicamentos aplicados estimulam os folículos capilares, promovendo o crescimento de novos fios e
            fortalecendo os fios existentes.
          </li>
          <li>Equilibra a produção de sebo, reduz inflamações e melhora a saúde do couro cabeludo.</li>
          <li>Oferece resultados naturais sem efeitos colaterais sistêmicos.</li>
        </ul>
      </>
    ),
    badge: 'Benefícios do MMP',
    image: 'https://imgix.cosmicjs.com/22528b60-e7d5-11ef-8a63-eb57d6c77a36-mmp3.jpg',
  },
  {
    title: 'Protocolo exclusivo Dr. Hair',
    description: (
      <>
        <ul>
          <li>Indicado para queda capilar, cabelos ralos e fracos.</li>
          <li>Pós-transplante capilar.</li>
          <li>Aplicações semanais ou mensais.</li>
          <li>Aplicação indolor no couro cabeludo.</li>
          <li>Mínimo de 3 sessões.</li>
          <li>Sessões de manutenção semestrais.</li>
          <li>Home-care: tônicos capilares e polivitamínicos personalizados.</li>
          <li>Tratamentos auxiliares: intradermoterapia, PRP, ozonioterapia, microagulhamento.</li>
        </ul>
      </>
    ),
    badge: 'Cuidados e Tratamentos',
    image: 'https://imgix.cosmicjs.com/ac75b280-eaa6-11ef-a238-c1ad09f4b1ad-mmp3.jpeg',
  },
]
