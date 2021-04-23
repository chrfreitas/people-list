import { render, screen } from '../../../../../test-utils';
import PeopleTable from './PeopleTable';

describe('PeopleTable', () => {
  it('should show a table with 2 rows', () => {
    const people = {
      data: [
        {
          id: 1,
          name: 'Ann Henry',
          jobTitle: 'Product manager',
          country: 'Germany',
          salary: 120000,
          currency: 'EUR',
          employment: 'employee',
        },
        {
          id: 2,
          name: 'Vittoria Janson',
          jobTitle: 'Pianist',
          country: 'Italy',
          salary: 70000,
          currency: 'EUR',
          employment: 'contractor',
        },
      ],
      loading: false,
      error: null,
    };

    render(<PeopleTable people={people} />);

    const rows = screen.queryAllByTestId('table-row');
    expect(rows).toHaveLength(2);
  });

  it('should show an error message', () => {
    const people = {
      data: [],
      loading: false,
      error: { message: 'Error' },
    };

    render(<PeopleTable people={people} />);

    const errorMessage = screen.getByText(
      'Ups, something in our servers went wrong!'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('should show the tablet with loader icon', () => {
    const people = {
      data: [],
      loading: true,
      error: null,
    };

    render(<PeopleTable people={people} />);

    const loader = screen.getByTestId('loading-logo');
    expect(loader).toBeInTheDocument();
  });

  it('should show the table with an empty message', () => {
    const people = {
      data: [],
      loading: false,
      error: null,
    };

    render(<PeopleTable people={people} />);

    const emptyMessage = screen.getByText('Nothing found :(');
    expect(emptyMessage).toBeInTheDocument();
  });
});
