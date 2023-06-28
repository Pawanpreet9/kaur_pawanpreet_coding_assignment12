import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeroImage from "./HeroImg";

const meta: Meta = {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = (args) => (
  <HeroImage data-testId="InputField-id" {...args} />
);
Default.args = {
  src: "https://wallpapers.com/images/featured-full/cute-profile-picture-s52z1uggme5sj92d.jpg",
  alt: "Hero Image",
  disabled: false,
  backgroundColor: "lightpink",
};

export const Disabled: Story = (args) => (
  <HeroImage data-testId="InputField-id" {...args} />
);
Disabled.args = {
  src: "https://wallpapers.com/images/featured-full/cute-profile-picture-s52z1uggme5sj92d.jpg",
  alt: "Hero Image",
  disabled: true,
  backgroundColor: "#cccccc",
};
