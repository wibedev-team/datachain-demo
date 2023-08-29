import React from 'react'

interface ToolkitListProps {
  title: string
  list: string[]
  className?: string
}

export const ToolkitList = ({ title, list, className }: ToolkitListProps) => {
  return (
    <div className={className}>
      <h3 className="uppercase text-[15px] leading-[150%] tracking-[1.5px] md:text-[12.6px] lg:text-[19px] lg:tracking-[1.9px] xl:text-3xl">{title}</h3>

      <ul className="text-secondary mt-[5px] list-disc pl-6 text-xs font-medium leading-[150%] -tracking-[0.132px] md:text-[10px] md:-tracking-[0.11px] lg:text-[15px] xl:text-2xl">
        {list.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  )
}
