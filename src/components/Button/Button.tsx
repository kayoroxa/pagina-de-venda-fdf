import React from 'react'
import { ContainerButton } from './styles-button'

interface IProps {
  children: any
  variant: 'outlined' | 'fill'
  style: any
  className?: string
  // startIcon: any
  id: string
}
const Button = ({
  children,
  id,
  className,
  style,
  // startIcon,
  variant,
}: IProps) => {
  return (
    <ContainerButton
      id={id}
      style={style}
      className={className ? `${className}` : ''}
      variant={variant}
    >
      {/* {startIcon && startIcon} */}
      {children}
    </ContainerButton>
  )
}

export default Button
