import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { CardsContainerComponent } from './Styles.js';
import Card from './Card/index.jsx';


const CardsContainer = ({ values, onDelete }) => (
  <PerfectScrollbar>
    <CardsContainerComponent>
      {values && values.map((value, index) => <Card value={value} index={index} key={index} onDelete={onDelete} />)}
    </CardsContainerComponent>
  </PerfectScrollbar>
);

export default CardsContainer;