import { render, fireEvent } from '@testing-library/react';
import { Item } from '../Item'; // Assuming Item component is in the same directory

describe('Item component', () => {
  it('expect to render the label correctly', () => {
    const { getByText } = render(
      <Item onClick={() => {}} label='Test Label' />
    );

    expect(getByText('Test Label')).toBeInTheDocument();
  });

  it('expect the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Item onClick={onClickMock} label='Test Label' />
    );
    fireEvent.click(getByText('Test Label'));

    expect(onClickMock).toHaveBeenCalled();
  });
});
