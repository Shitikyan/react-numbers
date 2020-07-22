import styled, { css } from 'styled-components';

import { mixin, color } from '../../Shared/Utils/styles';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  min-width: 65px;
  border-radius: 6px;
  color: whitesmoke;
  padding: 5px;
`;

const setBg = (color) => css`
  background-color: ${color};
  &:hover {
    background-color: ${mixin.darken(color, 0.2)};
  }
`;

export const BtnPrimary = styled(Button)`
  ${setBg(color.primary)}
`;

export const BtnSuccess = styled(Button)`
  ${setBg(color.success)}
`;
