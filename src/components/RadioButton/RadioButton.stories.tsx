import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  component: RadioButton,
  title: 'Components/RadioButton',
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = (args) => (
  <RadioButton data-testId="radio" {...args} />
);
Default.args = {
  id: 'radio1',
  value: 'option1',
  label: 'Option 1',
  color: 'black',
  backgroundColor: 'white',
};

export const Checked: Story = (args) => (
  <RadioButton data-testId="radio" {...args} />
);
Checked.args = {
  id: 'radio2',
  value: 'option2',
  label: 'Option 2',
  checked: true,
  color: "black",
};

export const Disabled: Story = (args) => (
  <RadioButton data-testId="radio" {...args} />
);
Disabled.args = {
  id: 'radio3',
  value: 'option3',
  label: 'Option 3',
  disabled: true,
  color: "darkgrey",
  backgroundColor: "#cccccc",
};
