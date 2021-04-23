import routes from 'routes';
import {
  Table as TableStyled,
  TableCell,
  TableRow,
  TableThCell,
} from 'components/Table';
import ErrorMessage from 'components/ErrorMessage';
import { formatCurrenty, getCurrencySign } from 'services/currency';
import { capitalize } from 'services/helpers';
import {
  LinkStyled,
  PeopleTableLoadingStyled,
  PeopleTableEmptyStyled,
  Wrapper,
} from './PeopleTable.styled';

const PeopleTableHead = () => (
  <thead>
    <tr>
      <TableThCell width="20%">Name</TableThCell>
      <TableThCell width="20%">Role</TableThCell>
      <TableThCell width="15%">Type</TableThCell>
      <TableThCell width="15%">Country</TableThCell>
      <TableThCell width="15%" align="right">
        Salary
      </TableThCell>
      <TableThCell width="15%"></TableThCell>
    </tr>
  </thead>
);

const PeopleTableBody = ({ people }) => {
  const getSalaryFormat = (person) => `${getCurrencySign(person.currency)}
    ${person.currency} ${formatCurrenty(person.currency, person.salary)} `;

  return (
    <tbody>
      {!people.loading &&
        people.data.map((person) => (
          <TableRow key={person.id} role="row" data-testid="table-row">
            <TableCell tabIndex="6">
              <b>{person.name}</b>
            </TableCell>
            <TableCell tabIndex="6">{person.jobTitle}</TableCell>
            <TableCell
              tabIndex="6"
              data-testid={`table-row-${person.employment}`}
            >
              {capitalize(person.employment)}
            </TableCell>
            <TableCell tabIndex="6">{person.country}</TableCell>
            <TableCell tabIndex="6" align="right">
              {getSalaryFormat(person)}
            </TableCell>
            <TableCell align="right">
              <LinkStyled
                tabIndex="6"
                to={`${routes.people.edit.replace(':id', person.id)}`}
              >
                Edit
              </LinkStyled>
            </TableCell>
          </TableRow>
        ))}
    </tbody>
  );
};

const PeopleTableContent = ({ people }) => (
  <TableStyled role="table" aria-label="People List">
    <PeopleTableHead />
    <PeopleTableBody people={people} />
  </TableStyled>
);

const PeopleTableEmpty = ({ people }) => {
  const isEmpty = !people.loading && !people.error && people.data.length === 0;

  return isEmpty ? (
    <PeopleTableEmptyStyled role="alert">
      Nothing found :(
    </PeopleTableEmptyStyled>
  ) : null;
};

const PeopleTableLoading = ({ loading }) =>
  loading ? <PeopleTableLoadingStyled role="alert" aria-busy="true" /> : null;

export default function PeopleTable({ people }) {
  return (
    <Wrapper>
      {people.error ? (
        <ErrorMessage />
      ) : (
        <>
          <PeopleTableContent people={people} />
          <PeopleTableLoading loading={people.loading} />
          <PeopleTableEmpty people={people} />
        </>
      )}
    </Wrapper>
  );
}
