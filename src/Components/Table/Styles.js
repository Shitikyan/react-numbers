import styled, {css} from 'styled-components';


export const TableComponent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  ${
    props => 
    css`
      ${props.style}
    `
  }
`