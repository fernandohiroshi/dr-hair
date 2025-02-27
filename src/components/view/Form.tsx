'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export const ContactForm = () => {
  const t = useTranslations('ContactForm')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isDoctor: 'Não',
    message: '',
  })
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', isDoctor: '', message: '' })

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    return /^\d{3,}$/.test(phone)
  }

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

  return (
    <div
      className="mt-16 flex scroll-mt-24 flex-col gap-4 rounded-xl bg-gradient-to-t from-[#a793568f] to-transparent p-8 shadow-2xl"
      id="form"
    >
      <div>
        <h2 className="text-md mb-1 animate-pulse font-semibold md:text-2xl">{t('title')}</h2>
        <p className="max-w-lg text-xs md:text-sm">{t('description')}</p>
      </div>
      <input
        className="p-2 outline-none"
        type="text"
        name="name"
        placeholder={t('namePlaceholder')}
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="animate-pulse text-red-800">{errors.name}</p>}
      <input
        className="p-2 outline-none"
        type="email"
        name="email"
        placeholder={t('emailPlaceholder')}
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="animate-pulse text-red-800">{errors.email}</p>}
      <input
        className="p-2 outline-none"
        type="tel"
        name="phone"
        placeholder={t('phonePlaceholder')}
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="animate-pulse text-red-800">{errors.phone}</p>}
      <div>
        <p className="mb-2 font-semibold">{t('doctorQuestion')}</p>
        <label className="mr-4">
          <input
            type="radio"
            name="isDoctor"
            value="Sim"
            checked={formData.isDoctor === 'Sim'}
            onChange={handleChange}
            className="mr-2"
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="isDoctor"
            value="Não"
            checked={formData.isDoctor === 'Não'}
            onChange={handleChange}
            className="mr-2"
          />
          Não
        </label>
      </div>
      <textarea
        name="message"
        placeholder={t('messagePlaceholder')}
        value={formData.message}
        onChange={handleChange}
        className="resize-none p-2 outline-none"
        rows={5}
      />
      <div className="flex w-full justify-end">
        <button
          className="w-full max-w-[160px] rounded bg-stone-200 py-4 font-semibold tracking-widest duration-300 ease-in-out hover:bg-stone-100"
          onClick={handleSubmit}
          disabled={Object.values(errors).some((error) => error)}
        >
          {t('submitButton')}
        </button>
      </div>
    </div>
  )
}
