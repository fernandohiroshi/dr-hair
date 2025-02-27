interface TextareaProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
}

export const Textarea = ({ name, placeholder, value, onChange, error }: TextareaProps) => {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full resize-none p-2 outline-none"
        rows={5}
      />
      {error && <p className="animate-pulse text-red-800">{error}</p>}
    </div>
  )
}
