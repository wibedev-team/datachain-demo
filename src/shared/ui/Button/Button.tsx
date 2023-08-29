import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const { className, children, disabled, ...otherProps } = props

  return (
    <button className={`${className} uppercase text-accent text-[10px] font-medium max-w-[163px] py-2.5 w-full border border-current`} type="button" disabled={disabled} {...otherProps}>
      {children || 'Request a solution'}
    </button>
  )
}
