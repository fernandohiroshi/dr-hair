'use client'

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

type Props = {
  formData: FormData
  errors: FormErrors
  loading: boolean
  t: (key: string) => string
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function CadastroForm({ formData, errors, loading, handleChange, handleSubmit, t }: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-2 rounded-xl bg-white/20 p-4 shadow-xl"
    >
      <input
        name="name"
        type="text"
        placeholder={t('placeholders.name')}
        className="rounded-md p-2 outline-none"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="text-xs text-red-700">{errors.name}</p>}

      <input
        name="email"
        type="email"
        placeholder={t('placeholders.email')}
        className="rounded-md p-2 outline-none"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-xs text-red-700">{errors.email}</p>}

      <input
        name="phone"
        type="tel"
        placeholder={t('placeholders.phone')}
        className="rounded-md p-2 outline-none"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="text-xs text-red-700">{errors.phone}</p>}

      <input
        name="birthdate"
        type="date"
        className="rounded-md p-2 outline-none"
        value={formData.birthdate}
        onChange={handleChange}
      />
      {errors.birthdate && <p className="text-xs text-red-700">{errors.birthdate}</p>}

      <input
        name="profession"
        type="text"
        placeholder={t('placeholders.profession')}
        className="rounded-md p-2 outline-none"
        value={formData.profession}
        onChange={handleChange}
      />
      {errors.profession && <p className="text-xs text-red-700">{errors.profession}</p>}

      <input
        name="city"
        type="text"
        placeholder={t('placeholders.city')}
        className="rounded-md p-2 outline-none"
        value={formData.city}
        onChange={handleChange}
      />
      {errors.city && <p className="text-xs text-red-700">{errors.city}</p>}

      <input
        name="country"
        type="text"
        placeholder={t('placeholders.country')}
        className="rounded-md p-2 outline-none"
        value={formData.country}
        onChange={handleChange}
      />
      {errors.country && <p className="text-xs text-red-700">{errors.country}</p>}

      <select
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="w-full rounded-md p-2 outline-none"
      >
        <option value="">{t('placeholders.selectCompany')}</option>
        <option value="Zap Cabeleireiros">Zap Cabeleireiros</option>
      </select>
      {errors.company && <p className="text-xs text-red-700">{errors.company}</p>}

      <input
        name="employeeName"
        type="text"
        value={formData.employeeName}
        onChange={handleChange}
        className="w-full rounded-md p-2 outline-none"
        placeholder={t('placeholders.employeeName')}
      />
      {errors.employeeName && <p className="text-xs text-red-700">{errors.employeeName}</p>}

      <textarea
        name="message"
        placeholder={t('placeholders.message')}
        className="resize-none rounded-md p-2 outline-none"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <p className="text-xs text-red-700">{errors.message}</p>}

      <button
        type="submit"
        disabled={loading}
        className="cursor-pointer rounded-md bg-[#f5f2ed7c] px-4 py-2 text-base font-semibold shadow-md shadow-black/20 hover:bg-[#f5f2ed] disabled:opacity-50"
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
  )
}
