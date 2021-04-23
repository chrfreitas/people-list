import routes from 'routes';
import { Text, TextLight } from 'components/Text';
import Button from 'components/Button';
import { ReactComponent as UserIcon } from '../../../../theme/icons/user.svg';

import { AddPeopleButton, Wrapper } from './PeopleHeader.styled';

export default function PeopleHeader({ people }) {
  const counter = !people.loading ? people.data.length : null;

  return (
    <Wrapper>
      <Text tabIndex="1" size="h1" as="h2">
        People{' '}
        {counter === 1 && <TextLight size="bodyCaption">1 employee</TextLight>}
        {counter === 0 && <TextLight size="bodyCaption">0 employees</TextLight>}
        {counter > 1 && (
          <TextLight size="bodyCaption">{counter} employees</TextLight>
        )}
      </Text>
      <AddPeopleButton tabIndex="2" to={routes.people.add}>
        <Button>
          <UserIcon />
          <Text size="bodyMedium">Add member</Text>
        </Button>
      </AddPeopleButton>
    </Wrapper>
  );
}
