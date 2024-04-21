import { render } from '@testing-library/react';
import React from 'react';
import Logo from '../Logo';

export {};

describe('isEven function', () => {
  function isEven(num) {
    return num % 2 === 0;
  }

  it('returns true for even numbers', () => {
    const { getByText } = render(<Logo />);

    console.log(getByText, 'bley');
  });
  it('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
  });

  it('returns false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
  });
});
