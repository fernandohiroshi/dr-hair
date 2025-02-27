import { useState } from 'react'
import { useTranslations } from 'next-intl'

export const useContactForm = () => {
  const t = useTranslations('ContactForm')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isDoctor: 'Não',
    message: '',
  })
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', isDoctor: '', message: '' })

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => /^\d{3,}$/.test(phone)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'name' && value.length < 3) {
      setErrors((prev) => ({ ...prev, name: t('errorName') }))
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: t('errorEmail') }))
    } else if (name === 'phone' && !validatePhone(value)) {
      setErrors((prev) => ({ ...prev, phone: t('errorPhone') }))
    } else {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = () => {
    if (Object.values(errors).some((error) => error) || Object.values(formData).some((field) => !field)) {
      alert(t('formAlert'))
      return
    }

    const { name, email, phone, isDoctor, message } = formData
    const whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0ACelular: ${phone}%0AÉ médico?: ${isDoctor}%0AMensagem: ${message}`
    const whatsappUrl = `https://wa.me/5545991280101?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return { formData, errors, handleChange, handleSubmit, t }
}
