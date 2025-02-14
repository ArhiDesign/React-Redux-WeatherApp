import styled from "@emotion/styled"

export const StyledInput = styled.input`
  width: 600px;
  height: 30px;
  border-radius: 40px;
  padding: 12px 20px;
  gap: 10px;
  background: #ffffff1a;
  border: 1px solid #ffffff;
  color: white;
  font-size: 20px;

  &:focus {
    outline: none;
    border-color: #5936b4;
  }
  &::placeholder {
    width: 151px;
    height: 24px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 0%;
    color: #ffffffb2;
  }
`
