import Image from 'next/image'
import React from 'react'

export default function ImersaoFUE() {
  return (
    <section className="mx-auto mb-8 max-w-screen-xl rounded-xl px-4 py-8 shadow-2xl md:mb-16 md:py-32">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="md:w-1/2">
          <div className="mb-4 inline-block rounded-lg bg-[#A79356] px-4 py-2 text-2xl font-bold text-white">
            IMERSÃO F.U.E. <span className="hidden md:inline">- MÉTODO EXCLUSIVO</span>
          </div>
          <h2 className="text-xl font-bold text-black md:text-2xl">
            MÉDICO, DOMINE TÉCNICAS AVANÇADAS EM TRANSPLANTE CAPILAR, SOBRANCELHA E BARBA!
          </h2>
          <p className="mt-4 text-xs text-black/90 md:text-lg">
            Aprenda na prática, do início ao fim, e se destaque em uma área lucrativa e de alta demanda. Exclusivo para
            médicos que querem elevar sua carreira a um novo patamar!
          </p>
          <div className="mt-6 inline-block animate-pulse rounded-lg border border-[#A79356] px-4 py-2 text-xs font-bold text-[#A79356] shadow-lg md:text-lg">
            60H DE APRENDIZADO
          </div>
        </div>
        <div className="shadow-2xl md:w-1/2">
          <Image
            src="https://imgix.cosmicjs.com/afd28a10-ee80-11ef-af71-9552422268b6-imersao1.jpeg"
            alt="Médico"
            width={500}
            height={500}
            className="max-h-[28rem] w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-black md:text-2xl">
          IMERSÃO F.U.E. – A Arte e a Ciência do Implante Capilar
        </h3>
        <p className="mt-4 text-xs text-black/90 md:text-lg">
          Uma experiência exclusiva para médicos que desejam dominar a técnica F.U.E. com precisão e excelência. Nossa
          imersão proporciona aprendizado prático e imersivo, com focos cirúrgicos essenciais:
        </p>
        <ul className="mt-4 space-y-3 text-xs text-black/90 md:text-lg">
          <li>
            🔹 <strong>Alopecia Masculina</strong> – Técnicas avançadas para restauração capilar eficaz.
          </li>
          <li>
            🔹 <strong>Alopecia Feminina</strong> – Abordagens refinadas para resultados naturais e harmoniosos.
          </li>
          <li>
            🔹 <strong>Transplante de Sobrancelhas</strong> – Redefinição estética com precisão e delicadeza.
          </li>
          <li>
            🔹 <strong>Transplante de Barba</strong> – Construção e aprimoramento do contorno facial.
          </li>
        </ul>
        <p className="mt-8 text-xs text-black/90 md:text-lg">
          Aprenda com especialistas, transforme sua carreira e conquiste um mercado em ascensão!
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr]">
          <Image
            src="https://imgix.cosmicjs.com/afb27ef0-ee80-11ef-af71-9552422268b6-imsersao3.jpeg"
            alt="Centro Cirúrgico"
            width={500}
            height={500}
            className="max-h-[28rem] w-full rounded-lg object-cover"
          />
          <Image
            src="https://imgix.cosmicjs.com/afd76c10-ee80-11ef-af71-9552422268b6-imersao4.jpeg"
            alt="Centro Cirúrgico"
            width={500}
            height={500}
            className="max-h-[28rem] w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-black md:text-2xl">IMERSÃO F.U.E. – Hands-On Exclusivo</h3>
        <p className="mt-4 text-xs text-black/90 md:text-lg">
          Uma jornada transformadora para médicos que desejam dominar o transplante capilar com excelência. Nosso
          programa é estruturado em cinco dias intensivos, combinando teoria, prática e inovação.
        </p>
        <p className="mt-6 text-xs text-black/90 md:text-lg">
          <strong>🗓️ Dia 1 e 2</strong> – Base teórica aprofundada: fundamentos, técnicas, discussão de casos e
          esclarecimento de dúvidas.
        </p>
        <p className="mt-4 text-xs text-black/90 md:text-lg">
          <strong>🗓️ Dia 2</strong> – Super Bônus: Imersão prática e aprofundamento técnico com Terapias Avançadas.
        </p>
        <p className="mt-4 text-xs text-black/90 md:text-lg">
          <strong>🗓️ Dia 3</strong> – Imersão prática no Transplante Capilar: aplicação prática dos alunos sob a
          supervisão do Dr. Ediney Galvão.
        </p>
        <p className="mt-4 text-xs text-black/90 md:text-lg">
          <strong>🗓️ Dia 4</strong> – Imersão prática no Transplante de Sobrancelhas: aplicação prática dos alunos sob a
          supervisão do Dr. Ediney Galvão.
        </p>
        <p className="mt-4 text-xs text-black/90 md:text-lg">
          <strong>🗓️ Dia 5</strong> – Imersão prática no Transplante de Barba: aplicação prática dos alunos sob a
          supervisão do Dr. Ediney Galvão.
        </p>
        <p className="mt-6 text-xs text-black/90 md:text-lg">
          Uma experiência única para elevar sua expertise e conquistar um mercado em plena expansão!
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-bold text-black md:text-2xl">CRONOGRAMA – IMERSÃO F.U.E.</h3>
        <div className="mt-6 space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-black md:text-2xl">Dia 1 - Teórico</h4>
            <ul className="mt-3 space-y-2 text-xs text-black/90 md:text-lg">
              <li>
                🔹 Calvície Masculina e Feminina – Como explicar para o paciente sobre seu grau de alopecia e opções de
                tratamento.
              </li>
              <li>🔹 Tratamentos Clínicos – Estratégias para adesão ao tratamento e fidelização do paciente.</li>
              <li>🔹 Anatomia do Folículo Piloso – Entendimento essencial para um transplante preciso.</li>
              <li>🔹 Consulta Especializada – Abordagem clínica sobre calvície e restauração capilar.</li>
              <li>🔹 Definição de Expectativas – Como alinhar resultados realistas e satisfatórios.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black md:text-2xl">Dia 2 - Teórico e Prático</h4>
            <ul className="mt-3 space-y-2 text-xs text-black/90 md:text-lg">
              <li>
                🔹 Técnica F.U.E. – Fundamentos e Precisão – Compreenda os pilares dessa técnica inovadora e seus
                diferenciais.
              </li>
              <li>🔹 Implantação Capilar – Passo a passo para resultados naturais, duradouros e personalizados.</li>
              <li>🔹 Implanters x Pré-Incision – Como escolher a abordagem mais eficaz e começar com segurança.</li>
              <li>🔹 Plano Cirúrgico Estratégico – Uma metodologia simples, eficaz e adaptável a cada caso.</li>
            </ul>
            <p className="mt-6 text-xs text-black/90 md:text-lg">
              Super Bônus: Terapias Avançadas – PRP, MMP, Fotobiomodulação a LASER e Ozonioterapia. Transforme sua
              prática com conhecimento profundo e técnicas avançadas para se destacar no mercado de transplante capilar!
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black md:text-2xl">Dia 3 - Transplante Capilar Masculino</h4>
            <ul className="mt-3 space-y-2 text-xs text-black/90 md:text-lg">
              <li>
                🔹 Abordagem e Preparo do Paciente – Como conduzir a consulta, definir expectativas e preparar o
                paciente para o procedimento.
              </li>
              <li>🔹 Montagem da Sala Cirúrgica – Organização estratégica para eficiência e segurança.</li>
              <li>🔹 Disposição da Equipe – Coordenação e fluxo cirúrgico para otimizar o procedimento.</li>
              <li>🔹 Anestesia Prática – Aplicação de anestesia tumescente e bloqueios para conforto do paciente.</li>
              <li>🔹 Raciocínio Cirúrgico e Programação – Estratégia para extração e distribuição dos folículos.</li>
              <li>
                🔹 Procedimento Hands-On – Os alunos realizarão o transplante sob supervisão de um médico altamente
                experiente.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black md:text-2xl">Dia 4 - Transplante de Sobrancelhas</h4>
            <ul className="mt-3 space-y-2 text-xs text-black/90 md:text-lg">
              <li>
                🔹 Arte e Técnica do Design – Como desenhar sobrancelhas harmoniosas e naturais, respeitando a anatomia
                facial.
              </li>
              <li>
                🔹 Prática Cirúrgica Avançada – Os alunos realizarão o transplante sob a supervisão de um médico
                experiente, garantindo aprendizado real e seguro.
              </li>
              <li>
                🔹 Acompanhamento Pós-Operatório – Técnicas para avaliação, remoção de curativo e cuidados
                pós-operatórios.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-black md:text-2xl">Dia 5 - Transplante de Barba</h4>
            <ul className="mt-3 space-y-2 text-xs text-black/90 md:text-lg">
              <li>
                🔹 Design Personalizado – Aprenda a desenhar uma barba harmoniosa, respeitando os princípios do
                visagismo e a anatomia facial.
              </li>
              <li>
                🔹 Prática Cirúrgica Avançada – Realização do procedimento pelos alunos, sob a supervisão de um médico
                especialista.
              </li>
              <li>
                🔹 Acompanhamento Pós-Operatório – Cuidados essenciais, manejo de curativos e orientações
                pós-operatórias para o sucesso do transplante.
              </li>
            </ul>
          </div>
          <div className="mt-6 text-xs text-black/90 md:text-lg">
            <h4 className="text-xl font-semibold text-black md:text-2xl">Encerramento & Entrega de Certificados</h4>
            <p>
              Celebramos o fechamento dessa jornada transformadora com a certificação oficial, marcando o início de uma
              nova fase na sua carreira médica. Torne-se um especialista desejado no mercado e ofereça resultados
              excepcionais aos seus pacientes!
            </p>
          </div>
        </div>
      </div>

      <div id="formulario" className="mt-12 text-center">
        <h3 className="mb-8 text-xl font-bold text-black">Garanta sua vaga agora!</h3>
        <a
          href="mailto:drhairtransplantecapilar@gmail.com"
          className="max-w-fit cursor-pointer rounded-full bg-[#f5f2ed7c] px-4 py-2 text-xl font-semibold text-black shadow-lg transition duration-300 hover:bg-[#A79356] hover:text-white"
        >
          Enviar e-mail para inscrição
        </a>
      </div>
    </section>
  )
}
