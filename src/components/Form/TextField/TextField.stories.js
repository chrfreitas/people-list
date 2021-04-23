import React from 'react';

import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField
}

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'E-mail',
  type: 'email',
  defaultValue: '',
  placeholder: 'e.g. job@email.com',
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  ...Default.args,
  helper: 'Your personal e-mail',
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMsg: 'It does not sound like an e-mail'
};
