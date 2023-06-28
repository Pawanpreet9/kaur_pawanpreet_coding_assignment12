import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Card  from "./Card";

export default {
  component: Card,
  title: "Components/Card",
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = (args) => (
  <Card data-testId="card" {...args} />
);
Default.args = {
  title: "Default Card",
  content: "This is the Default Card Content.",
  disabled: false,
  color: "black",
  backgroundColor: "white"
};

export const Disabled: Story = (args) => (
  <Card data-testId="card" {...args} />
);
Disabled.args = {
  title: "Disabled Card",
  content: "This card is disabled.",
  disabled: true,
  color: "darkgrey",
  backgroundColor: "#ccccc"
};
