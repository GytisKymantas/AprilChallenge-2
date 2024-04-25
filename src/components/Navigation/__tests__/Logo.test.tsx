/**
 * @jest-environment jsdom
 */

import { fireEvent, render, renderHook } from '@testing-library/react';
import { useRedirect } from '../../../hooks/useRedirect';
import { Logo } from '../Logo';

jest.mock('../../../hooks/useRedirect', () => ({
  useRedirect: () => ({
    toHome: jest.fn(() => '/home'),
  }),
}));

describe('isEven function', () => {
  it('renders without crashing Logo with text Nord', () => {
    const { getByText } = render(<Logo />);
    expect(getByText('Nord')).toBeInTheDocument();
  });

  it('calls toHome function on button named Nord onclick', () => {
    const {
      result: { current },
    } = renderHook(useRedirect);

    const { getByText } = render(<Logo />);
    fireEvent.click(getByText('Nord'));
    expect(current.toHome()).toEqual('/home');
  });
});
