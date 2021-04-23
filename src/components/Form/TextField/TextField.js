import { Field } from '../Field';
import { Label } from '../Label';
import Message from '../Message';
import { Input } from './TextField.styled';

export default function TextField({ label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label>{label}</Label>
      <Input {...props} {...invalidAttr} />
      <Message errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}
