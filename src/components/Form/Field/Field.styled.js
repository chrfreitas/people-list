import styled from 'styled-components';

export const Field = styled.div`
  --labelColor: var(--colors-bayoux);

  display: block;
  font-size: 0.8125rem;

  &:focus-within {
    --labelColor: var(--colors-irisBlue);
  }

  & + & {
    margin-top: 32px;
  }
`;
