import axios from 'axios';

import { fireEvent, render, screen } from '../../../test-utils';

import People from '.';

jest.mock('axios');

const mockedPeople = [
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
  {
    id: 3,
    name: 'Philip Alexix',
    jobTitle: 'Software engineer',
    country: 'France',
    salary: 80000,
    currency: 'EUR',
    employment: 'employee',
  },
  {
    id: 4,
    name: 'Annette Williamson',
    jobTitle: 'CEO',
    country: 'United States',
    salary: 200000,
    currency: 'USD',
    employment: 'employee',
  },
  {
    id: 5,
    name: 'Alexander Lazar',
    jobTitle: 'Customer Success',
    country: 'Czech Republic',
    salary: 50000,
    currency: 'USD',
    employment: 'employee',
  },
];

describe('People', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockedPeople });
    jest.useFakeTimers();
  });

  test('should render 5 employess', async () => {
    render(<People />);

    const people = await screen.findAllByTestId('table-row');
    expect(people).toHaveLength(5);
  });

  test('should search people by name', async () => {
    render(<People />);
    axios.get.mockResolvedValue({ data: [mockedPeople[0]] });

    const searchInput = screen.getByPlaceholderText('Search by name ...');
    fireEvent.change(searchInput, { target: { value: mockedPeople[0].name } });

    const person = await screen.findAllByText(mockedPeople[0].name);
    expect(person).toHaveLength(1);
  });

  test("should show a message to describe that there isn't result", async () => {
    render(<People />);
    axios.get.mockResolvedValue({ data: [] });

    const searchInput = screen.getByPlaceholderText('Search by name ...');
    fireEvent.change(searchInput, { target: { value: 'Christian' } });

    const emptyTableMessage = await screen.findByText('Nothing found :(');
    expect(emptyTableMessage).toBeInTheDocument();
  });

  test('should filter only employee people', async () => {
    render(<People />);
    axios.get.mockResolvedValue({
      data: mockedPeople.filter((item) => item.employment === 'employee'),
    });

    const employeeCheckbox = screen.getByTestId('checkboxfield-employee');
    fireEvent.click(employeeCheckbox);
    jest.runOnlyPendingTimers();

    const people = await screen.findAllByTestId('table-row');
    const filtered = await screen.findAllByTestId('table-row-employee');

    expect(people.length).toEqual(filtered.length);
  });

  test('should filter only contractor people', async () => {
    render(<People />);
    axios.get.mockResolvedValue({
      data: mockedPeople.filter((item) => item.employment === 'contractor'),
    });

    const contractorCheckbox = screen.getByTestId('checkboxfield-contractor');
    fireEvent.click(contractorCheckbox);
    jest.runOnlyPendingTimers();

    const people = await screen.findAllByTestId('table-row');
    const filtered = await screen.findAllByTestId('table-row-contractor');

    expect(people.length).toEqual(filtered.length);
  });
});
