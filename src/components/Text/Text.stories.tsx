import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./Text.types";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components/Text",
  argTypes: { },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = (args) => (
  <Text data-testId="TextComponent-id" {...args} />
);
Default.args = {
  children: "Default Text",
  color: "black",
  disabled: false,
};

export const Disabled: Story = (args) => (
  <Text data-testId="TextComponent-id" {...args} />
);
Disabled.args = {
  children: "Disabled Text",
  color: "darkgrey",

  disabled: true,
};

