import React from 'react';
import styled from 'styled-components';
import { Spinner } from './Spinner';

export const Loader: React.FC<{ height?: string; testId?: string }> = ({
  height,
  testId = 'loader',
}) => (
  <LoaderWrapper height={height} data-testid={testId}>
    <Spinner />
  </LoaderWrapper>
);

const LoaderWrapper = styled.div<{ height?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => (height ? height : '30vh')};
`;
