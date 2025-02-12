import styled from '@emotion/styled';

export const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const InputElement = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #4CAF50;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`