import {
  TextStyled,
  Label,
  CheckboxStyled,
  CheckboxMarker,
} from './CheckboxField.styled';

export default function CheckboxField({ id, name, label, tabIndex, onChange }) {
  return (
    <Label role="checkbox" htmlFor={id} data-testid={`checkboxfield-${id}`}>
      <TextStyled size="bodySmallNormal">{label}</TextStyled>
      <CheckboxStyled
        id={id}
        name={name}
        type="checkbox"
        tabIndex={tabIndex}
        onChange={onChange}
      />
      <CheckboxMarker />
    </Label>
  );
}
