import React from 'react';

import SelectField from './SelectField';

export default {
  title: 'SelectField',
  component: SelectField
}

const Template = (args) => (
  <SelectField {...args} >
    <option value="" hidden>
      Select food...
    </option>
    <option>Chinese</option>
    <option>Italian</option>
    <option>Mexican</option>
    <option>Other</option>
  </SelectField>
  );

export const Default = Template.bind({});
Default.args = {
  label: 'Food',
  defaultValue: ''
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  ...Default.args,
  helper: "Choose your favorite food."
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  errorMsg: "This field is required!"
};
