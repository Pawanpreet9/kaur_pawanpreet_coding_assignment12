import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';
import '@testing-library/jest-dom/extend-expect';

describe('Img Component', () => {
  test('should be visible', () => {
    render(<Img src="./Image.jpg" alt="Cute Image" />);
    const imgElement = screen.getByAltText('Cute Image');
    expect(imgElement).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<Img src="./Image.jpg" alt="Cute Image" disabled />);
    const imgElement = screen.getByAltText('Cute Image');
    expect(imgElement).toHaveStyle('background-color: #cccccc');
  });
});
