interface TextInputProps {
  name: string
  type?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export const TextInput = ({ name, type = 'text', placeholder, value, onChange, error }: TextInputProps) => {
  return (
    <div>
      <input
        className="w-full p-2 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="animate-pulse text-red-800">{error}</p>}
    </div>
  )
}
