import { Hero } from '@/components/view/Hero'
import { Services } from '@/components/view/Services'
import { Clinic } from '@/components/view/Clinic'
import { About } from '@/components/view/About'
import { Testimonials } from '@/components/view/Testimonials'

export default function Home() {
  return (
    <div id="home" className="scroll-mt-24">
      <main className="mx-auto min-h-screen max-w-screen-xl px-4 pt-8 md:pt-4">
        <Hero />
        <About />
        <Services />
        <Clinic />
        <Testimonials />
      </main>
    </div>
  )
}
