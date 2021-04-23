import React from 'react';

import { Table, TableCell, TableRow, TableThCell } from './Table.styled';

export default {
  title: 'Table',
  component: Table
};

const Template = () => (
  <Table>
    <thead>
      <tr>
        <TableThCell>Employee Name</TableThCell>
        <TableThCell>Country</TableThCell>
        <TableThCell align="right">Salary</TableThCell>
      </tr>
    </thead>
    <tbody>
      <TableRow>
        <TableCell>Ana Morgado</TableCell>
        <TableCell>Portugal</TableCell>
        <TableCell align="right">EUR 5.000,00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Kate Will</TableCell>
        <TableCell>United States</TableCell>
        <TableCell align="right">USD 10,000,00</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Pierre Clark</TableCell>
        <TableCell>France</TableCell>
        <TableCell align="right">EUR 3.000,00</TableCell>
      </TableRow>
    </tbody>
  </Table>
);

export const Default = Template.bind({});
Default.args = {};



