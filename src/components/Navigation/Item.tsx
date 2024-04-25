import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

interface ItemProps {
  onClick: () => void;
  label: string;
}
export const Item = ({ onClick, label }: ItemProps) => (
  <ButtonStyled
    onClick={onClick}
    className='block m-4 md:my-0 md:inline-block'
    type='button'
  >
    {label}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: 12px;
  padding: 5px 12px;
  background: ${COLORS.white};
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: 600;
`;
