import React from 'react'
import { icons } from './iconsArray'
import Image from 'next/image'

export const TechFeedBlock = () => {
  return (
    <section className="my-[150px] px-[20px] h-[50px]">
      <ul className="flex flex-row items-center gap-[70px] overflow-x-auto no-scrollbar">
        {icons.map((icon, index) => (
          <Image key={`iconKey${index}`} src={icon} alt={'icon'} />
        ))}
      </ul>
    </section>
  )
}
