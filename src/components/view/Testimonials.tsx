import { useTranslations } from 'next-intl'
import { Avatar, AvatarImage } from '@/components/ui/react-avatar'

export const Testimonials = () => {
  const t = useTranslations('Testimonials')

  const testimonials = [
    {
      name: t('clients.0.name'),
      profession: t('clients.0.profession'),
      image: 'https://imgix.cosmicjs.com/856524c0-0fde-11f0-a2a8-2d4dc6113f13-testimonials-profile.png',
      feedback: t('clients.0.feedback'),
    },
    {
      name: t('clients.1.name'),
      profession: t('clients.1.profession'),
      image: 'https://imgix.cosmicjs.com/856524c0-0fde-11f0-a2a8-2d4dc6113f13-testimonials-profile.png',
      feedback: t('clients.1.feedback'),
    },
    {
      name: t('clients.2.name'),
      profession: t('clients.2.profession'),
      image: 'https://imgix.cosmicjs.com/856524c0-0fde-11f0-a2a8-2d4dc6113f13-testimonials-profile.png',
      feedback: t('clients.2.feedback'),
    },
  ]

  return (
    <section className="mt-16 md:mt-24">
      <h2 className="mb-8 flex items-center justify-center text-xl font-bold md:text-2xl">{t('title')}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((client, index) => (
          <div key={index} className="flex max-h-[20rem] flex-col justify-start rounded-2xl bg-[#E4DDD1] p-4 shadow-xl">
            <div className="flex items-center justify-start">
              <Avatar>
                <AvatarImage src={client.image} alt={client.name} className="animate-pulse" />
              </Avatar>
              <h2 className="ml-2 text-sm font-semibold md:text-base">
                {client.name} - {client.profession}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-justify text-xs md:text-sm">{client.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
