import styled from 'styled-components';

import { ReactComponent as SearchIcon } from '../../../../theme/icons/search.svg';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SearchIconStyled = styled(SearchIcon)`
  fill: var(--colors-lynch);
  width: 16px;
  height: 16px;
  position: absolute;
  left: 16px;
`;

export const InputSearch = styled.input`
  border: 0;
  background: transparent;
  padding: 12px 12px 12px 44px;
  border: 1px solid transparent;
  color: var(--colors-darkBlue);
  font-size: 14px;
  line-height: 18px;
  border-radius: 20px;

  &::placeholder {
    color: var(--colors-lynch);
  }

  &::-moz-placeholder {
    color: var(--colors-lynch);
    opacity: 1;
    line-height: 20px;
  }

  &:hover {
    border: 1px solid #e7effc;
  }

  &:focus {
    outline: 0;
    border: 1px solid #e7effc;
    box-shadow: inset 1px 2px 3px #c6d6ef;
  }
`;
