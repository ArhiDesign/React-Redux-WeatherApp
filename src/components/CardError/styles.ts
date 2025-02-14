import styled from "@emotion/styled"

export const ErrorContainer = styled.div`
  position: absolute;
  width: 709px;
  height: 180px;
  left: 605px;
  top: 368px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ErrorTitle = styled.div`
  font-family: Inter;
  font-weight: 500;
  font-size: 57px;
  line-height: 68.98px;
  color: #f35e5e;
  margin-bottom: 20px;
`

export const ErrorMessage = styled.div`
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;
  color: #ffffff;
`
