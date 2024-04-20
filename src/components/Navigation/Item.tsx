import React from 'react';
import PropTypes from 'prop-types';

interface ItemProps {
  onClick: () => void;
  label: string;
}
export const Item = ({ onClick, label }: ItemProps) => (
  <button
    onClick={onClick}
    className='block m-4 md:my-0 md:inline-block'
    type='button'
  >
    {label}
  </button>
);
