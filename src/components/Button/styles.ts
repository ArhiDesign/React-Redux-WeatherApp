import styled from "@emotion/styled"

export const StyledButton = styled.button`
  width: 146px;
  height: 48px;
  padding: 12px 40px;
  gap: 10px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, #3678b4, #3678b4);

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`
