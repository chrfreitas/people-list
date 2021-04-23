import LoadingLogo from 'components/LoadingLogo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const LinkStyled = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: var(--colors-irisBlue);
  text-decoration: none;
`;

export const PeopleTableLoadingStyled = styled(LoadingLogo)`
  align-self: center;
  justify-self: center;
  margin: 100px auto 70px;
`;

export const PeopleTableEmptyStyled = styled.div`
  padding: 32px 32px 8px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
