import React from 'react';
import styled from 'styled-components';
import { SortConfigKeys } from '../../../utils/constants';
import { Server } from '../../../utils/types';
import { TableBody } from '../elements/TableBody';
import { TableHead } from '../elements/TableHead';

export interface ServersListProps {
  servers: Server[];
  handleSortAction: (fieldName: SortConfigKeys) => void;
  sortConfig: { name: string | null; distance: string | null };
}

export const ServersList = ({
  servers,
  handleSortAction,
  sortConfig,
}: ServersListProps) => (
  <Table>
    <TableHead handleSortAction={handleSortAction} sortConfig={sortConfig} />
    <TableBody servers={servers} />
  </Table>
);

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  margin: auto;
`;
