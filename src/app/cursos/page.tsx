import Image from 'next/image'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import ImersaoFUE from '@/components/view/ImersaoFue'
import { ContactForm } from '@/components/view/Form'

export default function CursoPage() {
  const items = [
    {
      title: 'Aprenda e Transforme sua Carreira!',
      content: (
        <div className="text-justify">
          <p className="mb-8 text-xs text-black/90 md:text-lg">
            A área da estética avançada está em constante crescimento, e a especialização é a chave para o sucesso! Na
            Clínica Dr. Hair, oferecemos cursos exclusivos para profissionais da saúde que desejam aprimorar suas
            técnicas e expandir suas oportunidades no mercado.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://imgix.cosmicjs.com/1d9e79d0-e9f1-11ef-9da4-c1d07900a603-WhatsApp-Image-2025-02-07-at-15-52-24.jpeg"
              alt="Cursos de Estética"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Nossos Cursos',
      content: (
        <div className="text-justify">
          <ul className="mb-8 text-xs text-black/90 md:text-lg">
            <li>
              🔹
              <span className="font-semibold underline">Curso de Toxina Botulínica (Botox®)</span> – Aprenda as
              técnicas mais avançadas para aplicação segura e eficaz da toxina botulínica, proporcionando
              rejuvenescimento facial com naturalidade. Nosso curso aborda desde a anatomia facial até protocolos de
              aplicação e gestão de intercorrências.
            </li>
            <li className="my-8">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="https://imgix.cosmicjs.com/293705f0-eaa5-11ef-af71-9552422268b6-curso02.jpeg"
                  alt="Estética avançada"
                  width={500}
                  height={500}
                  className="max-h-[24rem] w-full rounded-lg object-cover"
                />
              </div>
            </li>
            <li>
              🔹
              <span className="font-semibold underline">Curso de Retirada Estética de Sinais</span> – Capacitação
              prática para remoção segura de sinais e lesões benignas, utilizando técnicas minimamente invasivas. Ideal
              para profissionais que desejam agregar mais um serviço à sua atuação clínica.
            </li>
            <li className="my-8">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="https://imgix.cosmicjs.com/29361b90-eaa5-11ef-af71-9552422268b6-curso03.jpeg"
                  alt="Estética avançada"
                  width={500}
                  height={500}
                  className="max-h-[24rem] w-full rounded-lg object-cover"
                />
              </div>
            </li>
            <li>
              🔹
              <span className="font-semibold underline">Curso de Peeling Rose de MER</span> – Domine a aplicação deste
              peeling inovador, feito com minerais exclusivos do Mar Morto de Israel. Um protocolo de rejuvenescimento
              poderoso, que promove renovação celular profunda e melhora a textura e luminosidade da pele.
            </li>

            <li className="my-8">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  src="https://imgix.cosmicjs.com/295a6c70-eaa5-11ef-af71-9552422268b6-curso04.jpeg"
                  alt="Estética avançada"
                  width={500}
                  height={500}
                  className="max-h-[24rem] w-full rounded-lg object-cover"
                />
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Por que escolher nossos cursos?',
      content: (
        <div className="text-justify">
          <ul className="mb-8 text-xs text-black/90 md:text-lg">
            <li>🔹 Aulas teóricas e práticas com pacientes reais</li>
            <li>🔹 Certificação reconhecida</li>
            <li>🔹 Material didático completo</li>
            <li>🔹 Suporte pós-curso para dúvidas e aperfeiçoamento</li>
          </ul>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://imgix.cosmicjs.com/295ae1a0-eaa5-11ef-af71-9552422268b6-curso05.jpeg"
              alt="Cursos de Estética"
              width={500}
              height={500}
              className="max-h-[24rem] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      ),
    },
  ]

  return (
    <main className="mx-auto mt-8 max-w-screen-xl scroll-mt-24 px-2 py-16 md:mt-24 md:pt-24">
      <ImersaoFUE />
      <Timeline
        title="Cursos de Estética Avançada"
        description="Aprimore suas técnicas com especialistas e expanda suas oportunidades no mercado."
        data={items}
      />
      <ContactForm />
    </main>
  )
}
