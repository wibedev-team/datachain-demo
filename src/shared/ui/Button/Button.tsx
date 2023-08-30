import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props

  return (
    <button
      className={`${className} flex text-[#B2EBF2] border-solid border-[1px] border-green-100 items-center justify-center gap-5 
mt-12 w-[292px] h-[68px] font-medium text-sm/4
sm:w-[150px] sm:h-[40px] sm:text-[10px]/[14px] sm:mt-5
md:w-[187px] md:h-[44px] md:text-[12px]/[14px] md:mt-12
xl:w-[292px] xl:h-[69px] xl:text-[18px]/[21px] 
hover:bg-[#00BCD4] hover:border-none 
active:bg-[#B2EBF2]`}
      {...otherProps}>
      {children}
    </button>
  )
}
