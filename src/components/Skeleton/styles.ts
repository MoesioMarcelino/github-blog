import styled, { keyframes } from 'styled-components'

import { SkeletonProps } from '.'

const skeletonAnimation = keyframes`
  0% { transform: translateX(-400%) }
  50% { transform: translateX(-60%) }
  100% { transform: translateX(400%) }
`

export const Container = styled.div<SkeletonProps>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  border-radius: ${({ radius }) => radius && radius};
  overflow: hidden;
  background-color: ${(props) => props.theme['base-span']};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${({ height }) => height && height};
    top: 0;
    left: 20px;
    transform: skewX(-20deg);
    animation: ${skeletonAnimation} 1s infinite linear;
    background-image: linear-gradient(
      90deg,
      ${(props) => props.theme['base-span']} 0px,
      ${(props) => props.theme['base-text']} 50%,
      ${(props) => props.theme['base-span']} 100%
    );
    background-size: 100%;
  }
`
