interface RadioInputProps {
  name: string
  options: { label: string; value: string }[]
  selectedValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioInput = ({ name, options, selectedValue, onChange }: RadioInputProps) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value} className="mr-4">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  )
}
