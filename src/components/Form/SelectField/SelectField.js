import { Field } from '../Field';
import { Label } from '../Label';
import Message from '../Message';
import { Select } from './SelectField.styled';

function SelectField({ children, label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label>{label}</Label>
      <Select {...props} {...invalidAttr}>
        {children}
      </Select>
      <Message errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

export default SelectField;
