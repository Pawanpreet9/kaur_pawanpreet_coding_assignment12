import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';
import '@testing-library/jest-dom/extend-expect';

describe('Text component', () => {
  it('should be visible', () => {
    render(<Text children="Default text" />);
    const textContent = screen.getByText('Default text');
    expect(textContent).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<Text children="Default text" disabled />);
    const textElement = screen.getByText('Default text');
    expect(textElement).toHaveStyle('background-color: #cccccc');
  });
});
