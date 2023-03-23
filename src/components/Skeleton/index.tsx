import React from 'react'

import { Container } from './styles'

export interface SkeletonProps {
  width: string
  height: string
  radius: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  radius,
}) => {
  return <Container width={width} height={height} radius={radius} />
}
