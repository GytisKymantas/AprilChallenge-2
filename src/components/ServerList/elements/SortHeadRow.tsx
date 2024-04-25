import styled from 'styled-components';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import { SortDirection } from '../../../utils/constants';

interface SortHeadRowProps {
  name: string;
  sortDirection: string | null;
  handleSortAction: () => void;
}

export const SortHeadRow = ({
  name,
  handleSortAction,
  sortDirection,
}: SortHeadRowProps) => {
  const commonIconProps = {
    className: 'ml-3 inline cursor-pointer',
    onClick: handleSortAction,
  };

  const NeutralIcon = <FaSort {...commonIconProps} />;
  const AscendingIcon = <FaSortUp {...commonIconProps} />;
  const DescendingIcon = <FaSortDown {...commonIconProps} />;

  const resolveCurrentIcon = (() => {
    if (!sortDirection) {
      return NeutralIcon;
    }
    if (sortDirection === SortDirection.ASCENDING) {
      return AscendingIcon;
    }

    if (sortDirection === SortDirection.DESCENDING) {
      return DescendingIcon;
    }
    return;
  })();

  return (
    <TableHeader>
      <span>{name}</span>
      {resolveCurrentIcon}
    </TableHeader>
  );
};

const TableHeader = styled.th`
  width: 33.333%;
  padding: 0.5rem;
`;
