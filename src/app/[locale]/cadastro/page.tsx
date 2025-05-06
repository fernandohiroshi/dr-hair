'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'

export default function Cadastro() {
  const t = useTranslations('CadastroForm')
  const h = useTranslations('NotFoundPage')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    profession: '',
    city: '',
    country: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    profession: '',
    city: '',
    country: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validateForm = () => {
    let formErrors = { ...errors }
    let isValid = true

    if (!formData.name) {
      formErrors.name = t('validation.nameRequired')
      isValid = false
    } else {
      formErrors.name = ''
    }
    if (!formData.email) {
      formErrors.email = t('validation.emailRequired')
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = t('validation.invalidEmail')
      isValid = false
    } else {
      formErrors.email = ''
    }
    if (!formData.phone) {
      formErrors.phone = t('validation.phoneRequired')
      isValid = false
    } else {
      formErrors.phone = ''
    }
    if (!formData.birthdate) {
      formErrors.birthdate = t('validation.birthdateRequired')
      isValid = false
    } else {
      formErrors.birthdate = ''
    }
    if (!formData.profession) {
      formErrors.profession = t('validation.professionRequired')
      isValid = false
    } else {
      formErrors.profession = ''
    }
    if (!formData.city) {
      formErrors.city = t('validation.cityRequired')
      isValid = false
    } else {
      formErrors.city = ''
    }
    if (!formData.country) {
      formErrors.country = t('validation.countryRequired')
      isValid = false
    } else {
      formErrors.country = ''
    }

    setErrors(formErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      birthdate: formData.birthdate,
      profession: formData.profession,
      city: formData.city,
      country: formData.country,
      message: formData.message,
    }
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      setSubmitted(true)
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {!submitted && (
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold md:text-4xl">{t('title')}</h1>
          <p className="mb-8 md:mb-12">{t('subtitle')}</p>
        </div>
      )}

      {submitted ? (
        <div className="mx-auto max-w-2xl rounded-2xl p-8 text-center md:mt-24">
          <p className="mb-4 text-xl font-semibold text-emerald-600 md:text-3xl"> {t('successMessage')}</p>

          <Link href="/">
            <Button variant="outline">{h('backToHome')}</Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col gap-4">
          <input
            className="rounded-md p-2 outline-none"
            name="name"
            type="text"
            placeholder={t('placeholders.name')}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input
            className="rounded-md p-2 outline-none"
            name="email"
            type="email"
            placeholder={t('placeholders.email')}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <input
            className="rounded-md p-2 outline-none"
            name="phone"
            type="tel"
            placeholder={t('placeholders.phone')}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <input
            className="rounded-md p-2 outline-none"
            name="birthdate"
            type="date"
            placeholder={t('placeholders.birthdate')}
            value={formData.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <p className="text-red-500">{errors.birthdate}</p>}

          <input
            className="rounded-md p-2 outline-none"
            name="profession"
            type="text"
            placeholder={t('placeholders.profession')}
            value={formData.profession}
            onChange={handleChange}
          />
          {errors.profession && <p className="text-red-500">{errors.profession}</p>}

          <input
            className="rounded-md p-2 outline-none"
            name="city"
            type="text"
            placeholder={t('placeholders.city')}
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}

          <input
            className="rounded-md p-2 outline-none"
            name="country"
            type="text"
            placeholder={t('placeholders.country')}
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && <p className="text-red-500">{errors.country}</p>}

          <textarea
            className="rounded-md p-2 outline-none"
            name="message"
            placeholder={t('placeholders.message')}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer rounded-md bg-[#f5f2ed7c] px-4 py-2 text-base font-semibold shadow-md shadow-black/20 duration-300 hover:bg-[#f5f2ed] disabled:opacity-50"
          >
            {loading ? (
              <svg
                className="mx-auto h-5 w-5 animate-spin text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
                ></path>
              </svg>
            ) : (
              t('submit')
            )}
          </button>
        </form>
      )}
    </div>
  )
}
