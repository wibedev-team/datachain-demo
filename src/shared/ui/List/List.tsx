import React from 'react'

interface ListProps {
  title: string
  listItems: string[]
}

export const List = (props: ListProps) => {
  const { title, listItems } = props

  return (
    <>
      <h3
        className="
		text-white text-[11px]/[16px]
		sm:text-[12.5px]/[19px]
		md:text-[19px]/[29px]
		xl:text-[30px]/[45px]
		">
        {title}
      </h3>
      <ul className="list-disc ml-[35px] mb-[30px]">
        {listItems.map((item, index) => (
          <li
            key={`listItem_${index}`}
            className="
				text-[#FFFFFF99] text-[14.5px]/[22px]
				sm:text-[10px]/[15px]
				md:text-[15.5px]/[23px]
				xl:text-[24px]/[36px]
				">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
