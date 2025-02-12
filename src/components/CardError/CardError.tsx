import React from 'react';
import { ErrorMessageProps } from './types';
import { ErrorCard, ErrorMessageText } from './styles';

const CardError: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorCard>
      <ErrorMessageText>{message}</ErrorMessageText>
    </ErrorCard>
  );
};

export default CardError;