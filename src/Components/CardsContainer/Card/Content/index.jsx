import React from 'react';
import { CardContentContainer } from './Styles';

const CardContent = ({children, className}) => (
  <CardContentContainer className={className}>
    {children}
  </CardContentContainer>
);

export default CardContent;
