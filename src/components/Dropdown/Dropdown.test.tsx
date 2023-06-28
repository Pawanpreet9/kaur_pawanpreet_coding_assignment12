import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown  from './Dropdown';
import { DropdownProps } from './Dropdown.types';
import '@testing-library/jest-dom/extend-expect';

describe('Dropdown Component', () => {
  test('should be visible', () => {
    render(<Dropdown options={[]} />);
    const dropdownElement = screen.getByTestId('dropdown');
    expect(dropdownElement).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<Dropdown options={[]} disabled />);
    const dropdownElement = screen.getByTestId('dropdown');
    expect(dropdownElement).toHaveStyle('background-color: #cccccc');
  });
});
