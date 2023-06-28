import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta: Meta = {
  title: 'Components/Table',
  component: Table,
};

export default meta;


type Story = StoryObj<typeof Table>;



export const Default: Story = (args) => (
  <Table data-testid="table" {...args} />
);
Default.args = {
header1: "default header",
header2: "header2",
header3: "header3",
td1:"Default data",
td2:"Default data",
td3:"Default data",
td4:"Default data",
td5:"Default data",
td6:"Default data",
footer1: "Default footer",
footer2: "Default footer",
footer3: "Default footer",
  disabled: false,
  color: 'black',
  backgroundColor: 'white',

};
export const Disabled: Story = (args) => (
  <Table data-testid="table" {...args} />
);
Disabled.args = {
  header1: "default header",
header2: "Deafault header",
header3: "Default header",
td1:"Default data",
td2:"Default data",
td3:"Default data",
td4:"Default data",
td5:"Default data",
td6:"Default data",
footer1: "Default footer",
footer2: "Default footer",
footer3: "Default footer",
  disabled: true,
  color: '#3e3b3b',
  backgroundColor: '#cccccc',

};

