import styled from '@emotion/styled';

//interface MainButtonStyledProps {
 // disabled: boolean;
 // $isRed: boolean;
//}

export const MainButton = styled.button<{ $isRed: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ $isRed }) => ($isRed ? '#ff4040' : '#4CAF50')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $isRed }) => ($isRed ? '#d63333' : '#45a049')};
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`


