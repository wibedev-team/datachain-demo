import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '500', subsets: ['latin'] })

interface SectionButtonProps {
  text: string
}

export const SectionButton = ({ text }: SectionButtonProps) => {
  return (
    <div>
      <button
        className={`flex  text-white   border-solid border-[1px] border-green-100 items-center justify-center 
          gap-5 ${roboto.className} transition-all duration-200 w-[292px] h-[68px] font-medium text-sm/4
          sm:w-[150px] sm:h-[40px] sm:text-[10px]/[14px]
          md:w-[187px] md:h-[44px] md:text-[12px]/[14px]
          xl:w-[292px] xl:h-[69px] xl:text-[18px]/[21px]
          hover:bg-[#00BCD4] hover:border-none
          active:bg-[#B2EBF2]`}>
        {text}
      </button>
    </div>
  )
}
