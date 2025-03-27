import { IconBrandWhatsapp } from '@tabler/icons-react'
import { useTranslations } from 'next-intl'

export const WhatsAppButtonFooter = () => {
  const t = useTranslations('WhatsappMsg')
  const phoneNumber = '5545991280101'
  const message = encodeURIComponent(`${t('msg')}`)

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="flex items-center gap-2 text-sm duration-500 ease-in-out hover:underline md:text-base"
    >
      <IconBrandWhatsapp size={20} /> WhatsApp
    </a>
  )
}
