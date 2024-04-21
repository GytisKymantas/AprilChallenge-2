import React from 'react';
import PropTypes from 'prop-types';

import { NAME, DISTANCE } from '../../../utils/constants';
import styled from 'styled-components';
import { SortHeadRow } from './SortHeadRow';

export const TableHead = ({ handleSortAction, sortConfig }: any) => (
  <thead>
    <StyledTableRow>
      <SortHeadRow
        name='Servers'
        handleSortAction={() => handleSortAction([NAME])}
        sortDirection={sortConfig[NAME]}
      />
      <SortHeadRow
        name='Distance'
        handleSortAction={() => handleSortAction([DISTANCE])}
        sortDirection={sortConfig[DISTANCE]}
      />
    </StyledTableRow>
  </thead>
);

const StyledTableRow = styled.tr`
  color: #ccc;
  background-color: #4c1d95;
  font-weight: bold;
`;
