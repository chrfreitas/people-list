import { ReactComponent as ErrorIcon } from '../../theme/icons/error.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1.5px solid rgba(255, 74, 90, 0.45);
  background: linear-gradient(
      0deg,
      rgba(255, 75, 85, 0.05),
      rgba(255, 75, 85, 0.05)
    ),
    var(--colors-blank);
  border-radius: 8px;
  padding: 28px 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(ErrorIcon)`
  margin: 0 16px 0 0;
`;
