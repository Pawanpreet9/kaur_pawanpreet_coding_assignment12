import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Img from './Img';
import Image from './Image.jpg';

const meta: Meta = {
  title: 'Components/Img',
  component: Img,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Img>;


export const Default: Story = (args) => (
  <Img data-testId="InputField-id" {...args} />
);
Default.args = {
  src: Image,
  alt: 'Cute Image',
  width: 200,
  height: 150,
  disabled: false,
  backgroundColor: "lightpink",
};

export const Disabled: Story = (args) => (
  <Img data-testId="InputField-id" {...args} />
);
Disabled.args = {
  src: Image,
  alt: 'Cute image',
  width: 200,
  height: 150,
  disabled: true,
  backgroundColor:"#cccccc",
};
