import React from 'react'

import { Bai_Jamjuree } from 'next/font/google'

const bai = Bai_Jamjuree({ weight: '500', subsets: ['latin'] })

interface SectionTitleProps {
  text?: string
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { text } = props

  return <h2 className={`${bai.className} mb-[90px] text-[#B2EBF2] text-[60px]/[90px]`}>{text}</h2>
}
