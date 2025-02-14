'use client'

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react'

type Testimonial = {
  quote: string
  name: string
  designation: string
  src: string
  googlemap?: string
}

export const AnimatedClinicPY = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[]
  autoplay?: boolean
}) => {
  const [active, setActive] = useState(0)
  const [randomRotations, setRandomRotations] = useState<number[]>([])

  useEffect(() => {
    setRandomRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10))
  }, [testimonials])

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000)
      return () => clearInterval(interval)
    }
  }, [autoplay, handleNext])

  return (
    <div className="mx-auto hidden max-w-sm px-4 py-20 font-sans antialiased md:block md:max-w-screen-xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold text-black">{testimonials[active].name}</h3>
            <a href={testimonials[active].googlemap} className="text-sm text-red-700 duration-300 hover:underline">
              {testimonials[active].designation}
            </a>
            <motion.p className="mt-4 text-sm text-stone-500 md:mt-8 md:text-lg">
              {testimonials[active].quote.split('\n').map((line, index) => (
                <span key={index} className="block">
                  {line.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                        delay: 0.02 * wordIndex,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-stone-300 shadow-sm shadow-black/60"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-stone-300 shadow-sm shadow-black/60"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
        <div>
          <div className="relative z-40 h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotations[index] || 0,
                  }}
                  animate={{
                    opacity: active === index ? 1 : 0.7,
                    scale: active === index ? 1 : 0.95,
                    z: active === index ? 0 : -100,
                    rotate: active === index ? 0 : randomRotations[index] || 0,
                    zIndex: active === index ? 999 : testimonials.length + 2 - index,
                    y: active === index ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotations[index] || 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
