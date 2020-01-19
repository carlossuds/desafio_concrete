import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Result from '../../pages/Result';

describe('Inputs search', () => {
  it('Github user', () => {
    const { getByTestId } = render(<Result />);

    fireEvent.change(getByTestId('input'), { target: { value: 'diego3g' } });
    fireEvent.click(getByTestId('button'));

    expect(getByTestId('input')).toHaveValue('diego3g');
  });
});
