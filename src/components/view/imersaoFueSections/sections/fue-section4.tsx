import { useTranslations } from 'next-intl'

interface DaySchedule {
  title: string
  activities: string[]
  bonus?: string
}

function FueSection4() {
  const t = useTranslations('FueSection4')
  const schedule: DaySchedule[] = t.raw('schedule') // Tipando 'schedule' como DaySchedule[]

  return (
    <div className="mt-16">
      <h3 className="text-md font-semibold text-black md:text-xl">{t('title')}</h3>
      <div className="mt-6 space-y-8">
        {schedule.map((day: DaySchedule, index: number) => (
          <div key={index}>
            <h4 className="text-lg font-semibold text-black">{day.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-black/90 md:text-base">
              {day.activities.map(
                (
                  activity: string,
                  i: number, // Tipando 'activity' como string e 'i' como number
                ) => (
                  <li key={i}>{activity}</li>
                ),
              )}
            </ul>
            {day.bonus && <p className="mt-6 text-sm text-black/90 md:text-base">{day.bonus}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FueSection4
