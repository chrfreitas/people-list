import { Icon, Wrapper } from './ErrorMessage.styled';

export default function ErrorMessage({
  message = 'Ups, something in our servers went wrong!',
}) {
  return (
    <Wrapper role="alert">
      <Icon />
      {message}
    </Wrapper>
  );
}
