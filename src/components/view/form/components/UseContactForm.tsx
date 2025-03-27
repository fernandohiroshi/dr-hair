import { useState } from 'react'
import { useTranslations } from 'next-intl'

export const useContactForm = () => {
  // USING NEXT-INTL TO GET TRANSLATIONS FOR THE CONTACT FORM
  const t = useTranslations('ContactForm')

  // INITIAL STATE FOR FORM DATA AND ERROR MESSAGES
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isDoctor: 'Não',
    message: '',
  })
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', isDoctor: '', message: '' })

  // EMAIL VALIDATION FUNCTION
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  // PHONE VALIDATION FUNCTION
  const validatePhone = (phone: string) => /^\d{3,}$/.test(phone)

  // HANDLER FOR FORM FIELD CHANGES
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // VALIDATE FIELDS AND SET ERROR MESSAGES
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

  // HANDLER FOR FORM SUBMISSION
  const handleSubmit = () => {
    // CHECK IF THERE ARE ANY ERRORS OR EMPTY FIELDS
    if (Object.values(errors).some((error) => error) || Object.values(formData).some((field) => !field)) {
      alert(t('formAlert'))
      return
    }

    // CREATE THE WHATSAPP MESSAGE URL
    const { name, email, phone, isDoctor, message } = formData
    const introductoryText = t('introText') // Using the translation for introText
    const formDataText = `Nome: ${name}%0AEmail: ${email}%0ACelular: ${phone}%0AÉ médico?: ${isDoctor}%0AMensagem: ${message}`
    const whatsappMessage = `${introductoryText}%0A%0A${formDataText}` // Prepend the introductory text

    const whatsappUrl = `https://wa.me/5545991280101?text=${whatsappMessage}`
    // OPEN WHATSAPP WITH THE PREPOPULATED MESSAGE
    window.open(whatsappUrl, '_blank')
  }

  return { formData, errors, handleChange, handleSubmit, t }
}
