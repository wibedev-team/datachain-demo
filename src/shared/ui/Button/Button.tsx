import React, { ButtonHTMLAttributes } from 'react'

import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '500', subsets: ['latin'] })

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const { className, children, disabled, ...otherProps } = props

  return (
    <button
      className={`${className} ${roboto.className} uppercase text-accent text-[10px] font-medium max-w-[163px] py-2.5 w-full border border-current md:text-[7.5px] md:max-w-[125px] md:py-[8px] lg:text-[11px] lg:max-w-[190px] lg:py-[12px] xl:text-[18px] xl:max-w-[290px] xl:py-[18px]`}
      type="button"
      disabled={disabled}
      {...otherProps}>
      {children || 'Request a solution'}
    </button>
  )
}
