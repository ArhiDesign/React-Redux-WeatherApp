import styled from "@emotion/styled"

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(8px);
  padding: 1rem;
  border-radius: 20px;
  color: white;
  width: 710px;
  height: 180px;
  margin: 1rem auto;
  box-shadow: 0 4px 8px rgba(115, 106, 106, 0.2);
`

export const Temperature = styled.p`
  font-size: 57px;
  font-weight: 500;
  margin: 0.5rem 0;
  color: #ffffff;
`

export const CityName = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ffffff;
`

export const IconContainer = styled.div`
  width: 290px;
  height: 74px;
  top: 498px;
  left: 899px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  gap: 10px;
`

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  top: 458px;
  left: 899px;
`

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
`
