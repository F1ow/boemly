import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '../..';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    variant: {
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      control: { type: 'radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    placeholder: { control: { type: 'text' } },
    isDisabled: { control: { type: 'boolean' } },
    isInvalid: { control: { type: 'boolean' } },
    width: { control: { type: 'string' } },
    onChange: { action: 'Select changed' },
    value: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="option_1">Option 1</option>
    <option value="option_2">Option 2</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.args = {
  value: 'option_2',
};
