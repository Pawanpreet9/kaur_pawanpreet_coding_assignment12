import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import '@testing-library/jest-dom/extend-expect';

describe('Table Component', () => {
  test('should be visible', () => {
    render( <Table>
      <thead>
      <th>Default header</th>
      <th>Default header</th>
      <th>Default header</th>
    </thead>

      <tbody>
        <tr>
          <td>Default data</td>
          <td>Default data</td>
          <td>Default data</td>
        </tr>
        <tr>
          <td>Default data</td>
          <td>Default data</td>
          <td>Default data</td>
        </tr>
      </tbody>
      <tfoot>
          <td>Default footer</td>
          <td>Default footer</td>
          <td>Default footer</td>
        </tfoot>
    </Table>);
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<Table disabled >
    <thead>
    <th>Default header</th>
    <th>Default header</th>
    <th>Default header</th>
  </thead>

    <tbody>
      <tr>
        <td>Default data</td>
        <td>Default data</td>
        <td>Default data</td>
      </tr>
      <tr>
        <td>Default data</td>
        <td>Default data</td>
        <td>Default data</td>
      </tr>
    </tbody>
    <tfoot>
          <td>Default footer</td>
          <td>Default footer</td>
          <td>Default footer</td>
        </tfoot>


  </Table>);
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toHaveStyle('background-color: #cccccc');
  });
});
