import { StyledInput } from "./styles"
import { InputProps } from "./types"

function Input({ value, onChange, placeholder = "" }: InputProps) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
