import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

type Story = StoryObj<typeof Dropdown>;


export const Default: Story = (args) => (
  <Dropdown data-testId="dropdown" {...args} />
);
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  color: "black",
};

export const WithDefaultValue: Story = (args) => (
  <Dropdown data-testId="dropdown" {...args} />
);
WithDefaultValue.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  defaultValue: 'Option 2',
  color: "black",
};

export const Disabled: Story = (args) => (
  <Dropdown data-testId="dropdown" {...args} />
);
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
  color: "black",
};
