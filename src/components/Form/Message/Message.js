import { Wrapper, ErrorMsg } from './Message.styled';

export default function Message({ errorMsg, helper }) {
  return (
    <Wrapper>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      {errorMsg && helper && ' - '}
      {helper}
    </Wrapper>
  );
}
