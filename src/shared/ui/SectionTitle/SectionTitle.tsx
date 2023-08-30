import React from 'react'

import { Bai_Jamjuree } from 'next/font/google'

const bai = Bai_Jamjuree({ weight: '500', subsets: ['latin'] })

interface SectionTitleProps {
  text?: string
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props

  return (
    <h2
      className={`${bai.className}
    text-[#B2EBF2]
      mb-[60px] text-[30px]/[30px]
      sm:mb-[37px] sm:text-[25px]/[37px]
      md:mb-[57px] md:text-[38px]/[57px]
      xl:mb-[90px] xl:text-[60px]/[90px]
    `}>
      {text}
    </h2>
  )
}
