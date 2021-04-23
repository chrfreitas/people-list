import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 32px 0;
  display: grid;
  grid-template-columns: 1fr auto;

  h2 {
    outline: 0;
    line-height: inherit;
  }
`;

export const AddPeopleButton = styled(Link)`
  text-decoration: none;

  button {
    box-shadow: 0px 6px 12px rgba(98, 77, 227, 0.3);
  }

  svg {
    fill: var(--colors-blank);
    margin: 0 8px 0 0;
    width: 20px;
    height: 20px;
  }
`;
