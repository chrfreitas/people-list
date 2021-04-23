import styled from 'styled-components';

export const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]}
`;

export const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;


