import styled from 'styled-components';

import { color, mixin } from '../../../Shared/Utils/styles';
import CardContent from './Content';

export const CardComponent = styled.div`
  width: 300px;
  height: 250px;
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 20%;
`;

export const CardContentSpacer = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContentComponent = styled(CardContent)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

export const DeleteButton = styled.button`
  background-color: ${color.backgroundLight};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${mixin.darken(color.backgroundLight, 0.2)}
  }
`;
