import { useTranslations } from 'next-intl'

export const FueSection3 = () => {
  const t = useTranslations('FueSection3')

  return (
    <section className="mt-16">
      {/* Title */}
      <h3 className="text-md font-semibold text-black md:text-xl">{t('title')}</h3>

      {/* Initial description */}
      <p className="mt-4 text-sm text-black/90 md:text-base">{t('description')}</p>

      {/* Schedule */}
      <p className="mt-6 text-sm text-black/90 md:text-base">
        <strong>{t('schedule.day1_2')}</strong>
      </p>
      <p className="mt-4 text-sm text-black/90 md:text-base">
        <strong>{t('schedule.day2_bonus')}</strong>
      </p>
      <p className="mt-4 text-sm text-black/90 md:text-base">
        <strong>{t('schedule.day3')}</strong>
      </p>
      <p className="mt-4 text-sm text-black/90 md:text-base">
        <strong>{t('schedule.day4')}</strong>
      </p>
      <p className="mt-4 text-sm text-black/90 md:text-base">
        <strong>{t('schedule.day5')}</strong>
      </p>

      {/* Final call to action */}
      <p className="mt-6 text-sm text-black/90 md:text-base">{t('callToAction')}</p>
    </section>
  )
}
