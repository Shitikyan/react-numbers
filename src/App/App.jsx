import React from 'react';

import { AppComponent, ContainerComponent, InstructionComponent, TableComponent } from './Styles.js';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles.js';

// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import './fontStyles.css';

const App = () => (
  <AppComponent>
    <NormalizeStyles />
    <BaseStyles />
    <ContainerComponent>
      <TableComponent />
      <InstructionComponent />
    </ContainerComponent>
  </AppComponent>
);

export default App;
