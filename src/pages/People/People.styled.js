import styled from 'styled-components';

import { CardBody } from 'components/Card';

export const Wrapper = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export const CardBodyStyled = styled(CardBody)`
  --spacer: 16px 26px 48px 26px;

  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto auto;
  gap: 16px;
`;
