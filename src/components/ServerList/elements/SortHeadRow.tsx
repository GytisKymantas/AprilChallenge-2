import { ASCENDING } from '../../../utils/constants';
import styled from 'styled-components';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

export const SortHeadRow = ({ name, handleSortAction, sortDirection }: any) => {
  const commonIconProps = {
    className: 'ml-3 inline cursor-pointer',
    onClick: handleSortAction,
  };

  const NeutralIcon = <FaSort {...commonIconProps} />;
  const AscendingIcon = <FaSortUp {...commonIconProps} />;
  const DescendingIcon = <FaSortDown {...commonIconProps} />;

  const resolveCurrentIcon = (() => {
    if (sortDirection === null) {
      return NeutralIcon;
    }
    if (sortDirection === ASCENDING) {
      return AscendingIcon;
    }
    return DescendingIcon;
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
