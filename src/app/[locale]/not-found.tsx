import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg">{t('description')}</p>
      <Link href="/" className="mt-4">
        <Button variant="default">{t('backToHome')}</Button>
      </Link>
    </div>
  )
}
