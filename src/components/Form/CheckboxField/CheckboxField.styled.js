import styled, { css } from 'styled-components';

import { Text } from 'components/Text/Text.styled';

export const CheckboxMarkerHover = css`
  border: 1px solid var(--colors-irisBlue);
`;

export const CheckboxMarkerChecked = css`
  content: '';
  border: 1px solid var(--colors-irisBlue);
  border-radius: 2px;
  background: var(--colors-irisBlue);
  width: 8px;
  height: 8px;
`;

export const CheckboxMarker = styled.span`
  position: relative;
  cursor: pointer;
  border: 1px solid #b7b8eb;
  border-radius: 2px;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckboxStyled = styled.input`
  position: absolute;
  opacity: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:checked + ${CheckboxMarker}:after {
    ${CheckboxMarkerChecked}
  }

  &:hover + ${CheckboxMarker} {
    ${CheckboxMarkerHover}
  }
`;

export const Label = styled.label`
  box-shadow: 0 0 0 2px transparent;
  border: 2px solid #b7b8eb;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  padding: 10px 13px;
  position: relative;

  &:hover {
    background: var(--colors-linkWater);
  }

  &:active {
    box-shadow: 0 0 0 2px var(--colors-irisBlue);

    ${CheckboxMarker}:after {
      ${CheckboxMarkerChecked}
    }
  }
`;

export const TextStyled = styled(Text)`
  margin: 0 11px 0 0;
`;
