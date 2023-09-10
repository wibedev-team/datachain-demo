import React from 'react'

interface SectionListProps {
  title: string
  list: { id: number; text: string }[]
  className?: string
}

export const SectionList = ({ title, list, className }: SectionListProps) => {
  return (
    <div className={className}>
      <p
        className="text-white mb-[0.625rem]
          text-[18.339px]/[27.509px]
          md:text-[12.625px]/[18.938px]
          xl:text-[19.156px]/[28.734px]
          2xl:text-[30px]/[45px]">
        {title}
      </p>
      <ul
        className="text-light-gray list-disc mb-[1.875rem] ml-[1.5rem]
          text-[14.672px]/[22.007px]
          md:text-[10.1px]/[15.15px]
          xl:text-[15.325px]/[22.988px]
          2xl:text-[24px]/[36px]">
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}
