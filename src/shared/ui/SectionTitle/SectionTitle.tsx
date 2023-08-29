import React from 'react'

import { Bai_Jamjuree } from 'next/font/google'

const bai = Bai_Jamjuree({ weight: '500', subsets: ['latin'] })

interface SectionTitleProps {
  text: string
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <h2 className={`text-accent text-3xl leading-[100%] font-medium ${bai.className}`}>{text}</h2>
}
