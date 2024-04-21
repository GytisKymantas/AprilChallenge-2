import React from 'react';

import styled from 'styled-components';
import { SortHeadRow } from './SortHeadRow';
import { ServersListProps } from '../sections/ServersList';
import { ServerProps } from '../../../utils/constants';

export type TableHeadProps = Omit<ServersListProps, 'servers'>;

export const TableHead = ({ handleSortAction, sortConfig }: TableHeadProps) => {
  return (
    <thead>
      <StyledTableRow>
        <SortHeadRow
          name='Servers'
          handleSortAction={() => handleSortAction(ServerProps.NAME)}
          sortDirection={sortConfig[ServerProps.NAME]}
        />
        <SortHeadRow
          name='Distance'
          handleSortAction={() => handleSortAction(ServerProps.DISTANCE)}
          sortDirection={sortConfig[ServerProps.DISTANCE]}
        />
      </StyledTableRow>
    </thead>
  );
};

const StyledTableRow = styled.tr`
  color: #ccc;
  background-color: #4c1d95;
  font-weight: bold;
`;
