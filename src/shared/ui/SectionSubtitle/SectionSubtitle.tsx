import React from 'react'
import { Bai_Jamjuree } from 'next/font/google'

const bai = Bai_Jamjuree({ weight: '500', subsets: ['latin'] })

interface SectionSubtitleProps {
  text: string
  className?: string
}

export const SectionSubtitle = ({ text, className }: SectionSubtitleProps) => {
  return (
    <h3
      className={`text-white first-line:${bai.className} ${className}
        text-[24px]/[24px]
        md:text-[16.833px]/[25.25px] 
        xl:text-[25.861px]/[38.791px]
        2xl:text-[40px]/[60px]`}>
      {text}
    </h3>
  )
}
