import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Button from "./Button";
describe('Button Component', () => {
  test('component is visible', () => {
    render(<Button text="Button Text" />);

    const componentElement = screen.getByRole('button');
    expect(componentElement).toBeVisible();
  });

  test('background color changes when component is disabled', () => {
    render(<Button  disabled />);

    const componentElement = screen.getByRole('button');
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('background-color: #cccccc');
  });


});