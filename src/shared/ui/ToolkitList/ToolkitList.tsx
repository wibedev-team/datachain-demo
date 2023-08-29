import React from 'react'

interface ToolkitListProps {
  title: string
  list: string[]
  className?: string
}

export const ToolkitList = ({ title, list, className }: ToolkitListProps) => {
  return (
    <div className={className}>
      <h3 className="uppercase text-[15px] leading-[150%] tracking-[1.5px]">{title}</h3>

      <ul className="text-secondary mt-[5px] list-disc pl-6 text-xs font-medium leading-[150%] -tracking-[0.132px]">
        {list.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </div>
  )
}
