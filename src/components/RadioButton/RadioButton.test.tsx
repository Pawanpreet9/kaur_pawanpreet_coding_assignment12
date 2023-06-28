import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';
import '@testing-library/jest-dom/extend-expect';

describe('Radio Component', () => {
  test('should be visible', () => {
    render(<RadioButton id="radio-1" value="option-1" label="Option 1" />);
    const radioElement = screen.getByTestId('radio');
    expect(radioElement).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<RadioButton id="radio3" value="option3" label="Option 3" disabled />);
    const radioElement = screen.getByTestId('radio');
    expect(radioElement).toHaveStyle('background-color:#cccccc');
  });
});
