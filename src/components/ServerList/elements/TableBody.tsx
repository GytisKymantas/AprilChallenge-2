import styled from 'styled-components';
import { COLORS } from '../../../utils/constants';
import { Server } from '../../../utils/types';

interface TableBodyProps {
  servers: Server[];
}

export const TableBody = ({ servers }: TableBodyProps) => (
  <tbody>
    {servers.map(({ name, distance }) => (
      <TableRow key={`${name}${distance}`}>
        <TableCell>{name}</TableCell>
        <TableCell>{distance}</TableCell>
      </TableRow>
    ))}
  </tbody>
);

const TableRow = styled.tr`
  &.text-black {
    color: ${COLORS.white};
  }
  &.text-center {
    text-align: center;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;
