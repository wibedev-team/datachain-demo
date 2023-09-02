import React from 'react'
import { Bai_Jamjuree } from 'next/font/google'

const bai = Bai_Jamjuree({ weight: '500', subsets: ['latin'] })

interface SectionTitleProps {
  text: string
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <h2
      className={`text-light-green font-medium leading-[150%] ${bai.className} 
        text-[30px]/[45px] 
        md:text-[25.25px]/[37.875px] 
        xl:text-[38.313px]/[57.469px]
        2xl:text-[60px]/[90px] `}>
      {text}
    </h2>
  )
}
