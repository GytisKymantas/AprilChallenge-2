import styled from 'styled-components';
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
    color: black;
  }
  &.text-center {
    text-align: center;
  }
  &.bg-gray-100 {
    background-color: #f3f4f6;
  }
  &.hover\:bg-gray-300:hover {
    background-color: #d1d5db;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;
