import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  color?: string;
  size?: number;
  border?: number;
  margin?: string;
}

export const Spinner: React.FC<Props> = ({
  color = 'blue',
  size = 80,
  margin,
}) => (
  <Ring
    color={color}
    size={size * 0.8}
    border={size * 0.1}
    margin={margin}
    data-testid='spinner'
  >
    <div />
    <div />
    <div />
    <div />
  </Ring>
);

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Ring = styled.div<Props>`
  position: relative;
  display: block;
  width: ${({ size }) => (size ? size / 0.8 : 0)}px;
  height: ${({ size }) => (size ? size / 0.8 : 0)}px;
  margin: ${({ margin }) => margin};

  > div {
    position: absolute;
    display: block;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    margin: ${({ border }) => `${border}px`};
    border: 8px solid #000;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => color} transparent transparent transparent;
    border-color: ${({ color }) => color} transparent transparent transparent;
    border-width: ${({ border }) => `${border}px`};
  }
  > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  > div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
