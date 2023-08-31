import React from 'react'

interface SectionListProps {
  title: string
  list: string[]
  className?: string
}

export const SectionList = ({ title, list, className }: SectionListProps) => {
  return (
    <div className={className}>
      <p
        className="text-white mb-[0.625rem]
            text-[18.339px]/[27.509px]
            sm:text-[12.625px]/[18.938px]
            md:text-[19.156px]/[28.734px]
            xl:text-[30px]/[45px]">
        {title}
      </p>
      <ul
        className="text-light-gray list-disc mb-[1.875rem] ml-[1.5rem]
            text-[14.672px]/[22.007px]
            sm:text-[10.1px]/[15.15px]
            md:text-[15.325px]/[22.988px]
            xl:text-[24px]/[36px]">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
