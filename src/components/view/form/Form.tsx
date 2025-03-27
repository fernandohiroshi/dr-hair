'use client'

import { useContactForm } from './components/UseContactForm'
import { RadioInput } from './components/RadioInput'
import { Textarea } from './components/Textarea'
import { TextInput } from './components/TextInput'

export const ContactForm = () => {
  // USING THE CUSTOM HOOK TO MANAGE FORM DATA AND HANDLERS
  const { formData, errors, handleChange, handleSubmit, t } = useContactForm()

  return (
    <div
      className="mt-16 flex scroll-mt-24 flex-col gap-4 rounded-xl bg-gradient-to-t from-[#a793568f] to-transparent p-8 shadow-2xl"
      id="form"
    >
      <div>
        <h2 className="text-md mb-1 animate-pulse font-semibold md:text-2xl">{t('title')}</h2>
        <p className="max-w-lg text-xs md:text-sm">{t('description')}</p>
      </div>

      {/* TEXT INPUT FOR NAME */}
      <TextInput
        name="name"
        placeholder={t('namePlaceholder')}
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      {/* TEXT INPUT FOR EMAIL */}
      <TextInput
        name="email"
        type="email"
        placeholder={t('emailPlaceholder')}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      {/* TEXT INPUT FOR PHONE */}
      <TextInput
        name="phone"
        type="tel"
        placeholder={t('phonePlaceholder')}
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <div>
        <p className="mb-2 font-semibold">{t('doctorQuestion')}</p>

        {/* RADIO INPUT FOR DOCTOR QUESTION */}
        <RadioInput
          name="isDoctor"
          options={[
            { label: 'Sim', value: 'Sim' },
            { label: 'Não', value: 'Não' },
          ]}
          selectedValue={formData.isDoctor}
          onChange={handleChange}
        />
      </div>

      {/* TEXTAREA FOR MESSAGE */}
      <Textarea
        name="message"
        placeholder={t('messagePlaceholder')}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      {/* SUBMIT BUTTON */}
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
