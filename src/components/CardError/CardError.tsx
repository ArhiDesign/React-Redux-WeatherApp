import React from "react"
import { ErrorContainer, ErrorTitle, ErrorMessage } from "./styles"
import { CardErrorProps } from "./types"

function CardError({ message }: CardErrorProps) {
  return (
    <ErrorContainer>
      <ErrorTitle>API Error</ErrorTitle>
      <ErrorMessage>Something went wrong with API data</ErrorMessage>
    </ErrorContainer>
  )
}

export default CardError
