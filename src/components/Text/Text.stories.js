import React from 'react';

import { Text } from './Text.styled';

export default {
  title: 'Text',
  component: Text
};

const Template = (args) => (
  <Text {...args} >
    Text Test
  </Text>
);

export const H1 = Template.bind({});
H1.args = {
  size: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  size: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  size: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  size: 'h4',
};

export const BodyLead = Template.bind({});
BodyLead.args = {
  size: 'bodyLead',
};

export const Body = Template.bind({});
Body.args = {
  size: 'body',
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  size: 'bodyMedium',
};

export const BodyBold = Template.bind({});
BodyBold.args = {
  size: 'bodyBold',
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  size: 'bodySmall',
};

export const BodySmallBold = Template.bind({});
BodySmallBold.args = {
  size: 'bodySmallBold',
};

export const BodyCaption = Template.bind({});
BodyCaption.args = {
  size: 'bodyCaption',
};