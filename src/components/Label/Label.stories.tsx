import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Components/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;


export const Default: Story = (args) => (
  <Label data-testId="InputField-id" {...args} />
);
Default.args = {
  text: 'Default label',
  disabled: false,
  color:"black",
  backgroundColor:"white",
  size:"14px"

};

export const Disabled: Story = (args) => (
  <Label data-testId="InputField-id" {...args} />
);
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
  color: 'grey',
  backgroundColor:'white',
  size:"14px"
};
