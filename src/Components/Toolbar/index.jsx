import React from 'react';

import { BtnSuccess, BtnPrimary } from '../../Shared/Components/Buttons';
import { ToolbarComponent } from './Styles.js';

const Toolbar = ({ onAdd, onSort }) => (
  <ToolbarComponent>
    <BtnSuccess onClick={onAdd}>+ Add</BtnSuccess>
    <BtnPrimary style={{marginLeft: 15}} onClick={onSort}>Sort</BtnPrimary>
  </ToolbarComponent>
);

export default Toolbar;
