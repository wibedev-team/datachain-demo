import React from 'react'

interface ListProps {
  title: string
  listItems: string[]
}

export const List = (props: ListProps) => {
  const { title, listItems } = props

  return (
    <>
      <h3 className="text-white text-[30px]/[45px]">{title}</h3>
      <ul className="list-disc ml-[35px] mb-[30px]">
        {listItems.map((item, index) => (
          <li key={`listItem_${index}`} className="text-[#FFFFFF99] text-[24px]/[36px]">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
