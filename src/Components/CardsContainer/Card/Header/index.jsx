import React from 'react';

import { CardHeaderContainer, Title, Toolbar } from './Styles';

const CardHeader = ({title, toolbar}) => (
  <CardHeaderContainer>
    {title && <Title>{title}</Title>}
    {toolbar && <Toolbar>{toolbar}</Toolbar>}
  </CardHeaderContainer>
);

export default CardHeader;
