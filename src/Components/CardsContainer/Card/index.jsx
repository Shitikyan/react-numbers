import React from 'react';

import CardHeader from './Header/index.jsx';
import { CardComponent, CardContentSpacer, CardContentComponent, DeleteButton, Number } from './Styles.js';

const Toolbar = (index, onDelete) => (
  <DeleteButton onClick={() => onDelete(index)}>X</DeleteButton>
);

const Card = ({ value, index, onDelete }) => (
  <CardComponent>
    <CardContentSpacer>
      <CardHeader toolbar={Toolbar(index, onDelete)} />
      <CardContentComponent>
        <Number>{value}</Number>
      </CardContentComponent>
    </CardContentSpacer>
  </CardComponent>
);

export default Card;
