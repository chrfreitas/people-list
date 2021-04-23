import { Card } from 'components/Card';
import PeopleFilter from './components/PeopleFilter';
import PeopleHeader from './components/PeopleHeader';
import PeopleTable from './components/PeopleTable';
import { Wrapper, CardBodyStyled } from './People.styled';

export default function PeopleView({ people, onFilter, onSearch }) {
  return (
    <Wrapper>
      <PeopleHeader people={people} />
      <Card>
        <CardBodyStyled>
          <PeopleFilter onFilter={onFilter} onSearch={onSearch} />
          <PeopleTable people={people} />
        </CardBodyStyled>
      </Card>
    </Wrapper>
  );
}
