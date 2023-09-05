import React from 'react'
import { List } from '@shared/ui/List'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { Button } from '@shared/ui/Button'
import Image from 'next/image'
import image from '@public/media/images/MaskGroup.png'

const dataItems = ['iOS / Android application online configurator', 'App Store / Google Play application publishing module', 'Hosted applications dynamic changes module', 'User base analytics module']
const toolsItems = ['Cloud platforms technical review', 'Mobile e-commerce market research']

export const NFTBlock = () => {
  return (
    <section
      className="
			mt-[60px] mx-[20px]
			sm:w-[795px] sm:h-[372px] sm:py-[37px] sm:px-[34px]
			md:w-[1224px] md:h-[565px] md:py-[57px] md:px-[81px]
			xl:w-[1918px] xl:h-[884px] xl:mt-[150px] xl:py-[90px] xl:px-[127px]
			">
      <SectionTitle text="NFT market analysis on the Ethereum chain" />

      <div
        className="
				flex flex-col-reverse items-center gap-[60px]
				sm:flex-row sm:justify-center
				md:flex-row md:justify-center
				xl:flex-row xl:justify-center
		">
        <div>
          <List title="DATA" listItems={dataItems} />
          <List title="TOOLS" listItems={toolsItems} />

          <Button>REQUEST A SOLUTION</Button>
        </div>

        <Image
          src={image}
          alt="image"
          className="
					w-[335px]
					sm:w-[340px]
					md:w-[531px]
					xl:w-[820px]
					"
        />
      </div>
    </section>
  )
}
