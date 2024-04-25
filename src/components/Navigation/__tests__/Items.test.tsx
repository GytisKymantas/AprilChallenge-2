import { fireEvent, render, renderHook } from '@testing-library/react';

import { Item } from '../Item';

describe('useRedirect', () => {
  const onClickMock = jest.fn();

  it('Item with Main label is called succesfull', () => {
    const { getByText } = render(<Item label='Main' onClick={onClickMock} />);
    expect(getByText('Main')).toBeInTheDocument();
    fireEvent.click(getByText('Main'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Item with Servers label is called succesfully', () => {
    const { getByText } = render(
      <Item label='Servers' onClick={onClickMock} />
    );
    expect(getByText('Servers')).toBeInTheDocument();
    fireEvent.click(getByText('Servers'));
    expect(onClickMock).toHaveBeenCalledTimes(2);
  });

  it('item with Logout label is called succesfully', () => {
    const { getByText } = render(<Item label='Logout' onClick={onClickMock} />);
    expect(getByText('Logout')).toBeTruthy();
    fireEvent.click(getByText('Logout'));
    expect(onClickMock).toHaveBeenCalledTimes(3);
  });

  it('item with login label is called succesfully', () => {
    const { getByText } = render(<Item label='Login' onClick={onClickMock} />);
    expect(getByText('Login')).toBeTruthy();
    fireEvent.click(getByText('Login'));
    expect(onClickMock).toHaveBeenCalledTimes(4);
  });
});
