import React, { useState } from 'react';

import CardsContainer from '../CardsContainer';
import Toolbar from '../Toolbar';
import Footer from '../Footer';
import { TableComponent } from './Styles.js';

export const Table = ({ style }) => {
  const [values, setValues] = useState([1, 2]);

  const onAdd = () => {
    setValues([...values, Math.floor(Math.random() * 100)]);
  }

  const onSort = () => {
    const sortedValues = values.sort((a, b) => a - b);
    setValues([...sortedValues]);
  }

  const onDelete = (index) => {
    values.splice(index, 1);
    setValues([...values])
  }

  return (
    <TableComponent style={style}>
      <Toolbar onAdd={onAdd} onSort={onSort} />
      <CardsContainer values={values} onDelete={onDelete} />
      <Footer />
    </TableComponent>
  )
};

export default Table;