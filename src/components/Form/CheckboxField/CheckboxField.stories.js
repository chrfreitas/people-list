import React from 'react';

import CheckboxField from './CheckboxField';

export default {
  title: 'CheckboxField',
  component: CheckboxField,
};

const Template = (args) => <CheckboxField {...args}></CheckboxField>;

export const Default = Template.bind({});
Default.args = {
  id: 'contractor',
  label: 'Contractor',
};
