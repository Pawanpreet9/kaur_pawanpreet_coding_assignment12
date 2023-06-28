import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom/extend-expect';

describe('Label component', () => {
  it('should render the label text', () => {
    render(<Label text="Default label" />);
    const labelText = screen.getByText('Default label');
    expect(labelText).toBeInTheDocument();
  });

  it('should change background color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    const labelElement = screen.getByText('Disabled Label');
    expect(labelElement).toHaveStyle('color: gray');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
});
