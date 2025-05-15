'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import CadastroForm from '@/components/view/cadastroPage/cadastroForm'

type FormFields =
  | 'name'
  | 'email'
  | 'phone'
  | 'birthdate'
  | 'profession'
  | 'city'
  | 'country'
  | 'message'
  | 'company'
  | 'employeeName'

type FormData = Record<FormFields, string>
type FormErrors = Record<FormFields, string>

export default function CadastroPage() {
  const t = useTranslations('CadastroForm')
  const h = useTranslations('NotFoundPage')
  const v = useTranslations('validation')

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    profession: '',
    city: '',
    country: '',
    message: '',
    company: '',
    employeeName: '',
  })

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    profession: '',
    city: '',
    country: '',
    message: '',
    company: '',
    employeeName: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const requiredFields: FormFields[] = [
    'name',
    'email',
    'phone',
    'birthdate',
    'profession',
    'city',
    'country',
    'company',
    'employeeName',
  ]

  const validateForm = () => {
    let formErrors = { ...errors }
    let isValid = true

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        formErrors[field] = v(`${field}Required`)
        isValid = false
      } else {
        formErrors[field] = ''
      }
    })

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = v('invalidEmail')
      isValid = false
    }

    setErrors(formErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

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
      company: formData.company,
      employeeName: formData.employeeName,
    }

    try {
      await emailjs.send(
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
    <div className="flex h-screen w-full flex-col items-center justify-center p-2">
      {!submitted ? (
        <>
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">{t('title')}</h1>
            <p className="mb-8">{t('subtitle')}</p>
          </div>
          <CadastroForm
            formData={formData}
            errors={errors}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            t={t}
          />
        </>
      ) : (
        <div className="mx-auto max-w-2xl rounded-2xl p-8 text-center md:mt-24">
          <p className="mb-4 text-xl font-semibold text-emerald-600 md:text-3xl">{t('successMessage')}</p>
          <Link href="/">
            <Button variant="outline">{h('backToHome')}</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
