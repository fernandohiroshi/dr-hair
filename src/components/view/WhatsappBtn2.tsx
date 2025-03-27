import { useTranslations } from 'next-intl'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Button } from '../ui/button'

export const WhatsAppButtonShadcn = () => {
  const t = useTranslations('WhatsappMsg')
  const phoneNumber = '5545991280101'
  const message = encodeURIComponent(`${t('msg')}`)

  return (
    <a href={`https://wa.me/${phoneNumber}?text=${message}`}>
      <Button variant="outline">
        <IoLogoWhatsapp size={40} /> {t('buttonText')}
      </Button>
    </a>
  )
}
