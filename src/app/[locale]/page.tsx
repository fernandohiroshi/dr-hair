import { Hero } from '@/components/view/Hero'
import { Services } from '@/components/view/Services'
import { Clinic } from '@/components/view/Clinic'
import { About } from '@/components/view/About'

export default function Home() {
  return (
    <div id="home" className="scroll-mt-24">
      <Hero />

      <main className="mx-auto min-h-screen max-w-screen-xl px-2 pt-16 md:px-4 md:pt-28">
        <About />
        <Services />
        <Clinic />
      </main>
    </div>
  )
}
