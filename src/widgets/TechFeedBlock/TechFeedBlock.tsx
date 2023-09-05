import React from 'react'
import { icons } from './iconsArray'
import Image from 'next/image'

export const TechFeedBlock = () => {
  return (
    <section
      className="
			vs:h-[13px] vs:mt-[60px]
			sm:mt-[65px] sm:h-[21px]
			md:mt-[100px] md:h-[32px]
			xl:my-[150px] xl:px-[20px] xl:h-[50px]
			">
      <ul
        className="
				flex flex-row items-center overflow-x-auto no-scrollbar h-full flex-shrink-0
				vs:gap-[18px]
				sm:gap-[29px]
				md:gap-[45px]
				xl:gap-[70px]
		">
        {icons.map((icon, index) => (
          <Image key={`iconKey${index}`} src={icon} alt={`Icon${index}`} className="h-full object-contain" />
        ))}
      </ul>
    </section>
  )
}
