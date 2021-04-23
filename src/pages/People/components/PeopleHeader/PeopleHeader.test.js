import { render, screen } from '../../../../../test-utils';
import PeopleHeader from './PeopleHeader';

describe('PeopleHeader', () => {
  test('should show 0 employees in the counter', () => {
    const people = {
      data: [],
      loading: false,
    };

    render(<PeopleHeader people={people} />);

    const counter = screen.getByText('0 employees');
    expect(counter).toBeInTheDocument();
  });

  test('should show 1 employee in the counter', () => {
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
      ],
      loading: false,
    };

    render(<PeopleHeader people={people} />);

    const counter = screen.getByText('1 employee');
    expect(counter).toBeInTheDocument();
  });

  test('should show 2 employess in the counter', () => {
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
    };

    render(<PeopleHeader people={people} />);

    const counter = screen.getByText('2 employees');
    expect(counter).toBeInTheDocument();
  });

  test("should hide the counter when It's loading", () => {
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
      ],
      loading: true,
    };

    render(<PeopleHeader people={people} />);

    const counter = screen.queryByText('1 employee');
    expect(counter).not.toBeInTheDocument();
  });
});
