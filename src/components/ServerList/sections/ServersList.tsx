import styled from 'styled-components';
import { TableBody } from '../elements/TableBody';
import { TableHead } from '../elements/TableHead';

interface ServersListProps {
  servers: any;
  handleSortAction: any;
  sortConfig: any;
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
