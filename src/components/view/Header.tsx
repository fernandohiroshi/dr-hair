import { Link } from '@/i18n/routing'
import Nav from './Nav'

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#D6C9B6]/80 py-4 text-stone-950 shadow-lg backdrop-blur-3xl md:py-6 lg:py-8">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-2">
        <Link
          href="#"
          title="Home"
          className="font-semibold duration-300 ease-in-out md:hover:tracking-widest xl:text-xl"
        >
          DR Hair
        </Link>

        <Nav />
      </div>
    </header>
  )
}
