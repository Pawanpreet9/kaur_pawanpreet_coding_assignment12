import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect';

describe('Card Component', () => {
  test('should be visible', () => {
    render(<Card />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<Card disabled />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveStyle('background-color: #ccccc');
  });
});
