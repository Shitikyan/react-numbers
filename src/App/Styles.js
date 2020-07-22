import styled from 'styled-components';

import {color} from '../Shared/Utils/styles';
import Instruction from '../Components/Instruction';
import Table from '../Components/Table';

export const AppComponent = styled.div`
  background-color: ${color.backgroundLight};
  height: 100vh;
`;

export const InstructionComponent = styled(Instruction)`
  height: 100%;
`;

export const TableComponent = styled(Table)`
  height: 100%;
`;

export const ContainerComponent = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: inherit;
`;
