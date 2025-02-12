import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const CardButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e53935;
  }
`