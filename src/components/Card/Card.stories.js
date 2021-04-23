import React from 'react';

import { Card, CardBody, CardFooter, CardHeader } from './Card.styled';

export default {
  title: 'Card',
  component: Card
}

const Template = (args) => (
  <Card>
    <CardHeader>This is the header</CardHeader>
    <CardBody>here is the body</CardBody>
    <CardFooter>and, finally, the footer</CardFooter>
  </Card>
  );

export const Default = Template.bind({});
Default.args = {};
