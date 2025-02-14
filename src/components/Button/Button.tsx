import { ButtonProps } from "./types"
import { StyledButton } from "./styles"

function Button({ children, onClick, disabled = false }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button
