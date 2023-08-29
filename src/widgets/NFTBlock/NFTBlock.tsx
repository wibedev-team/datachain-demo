import React from 'react'
import { List } from '@shared/ui/List'

const dataItems = ['iOS / Android application online configurator', 'App Store / Google Play application publishing module', 'Hosted applications dynamic changes module', 'User base analytics module']
const toolsItems = ['Cloud platforms technical review', 'Mobile e-commerce market research']

export const NFTBlock = () => {
  return (
    <section className="mt-[150px] py-[90px] px-[127px]">
      <h2 className="mb-[90px] text-[#B2EBF2] text-[60px]/[90px]">NFT market analysis on the Ethereum chain</h2>

      <div className="flex justify-center gap-[60px]">
        <div>
          <List title="DATA" listItems={dataItems} />
          <List title="TOOLS" listItems={toolsItems} />

          <button
            className="flex  text-[#B2EBF2]   border-solid border-[1px] border-green-100 items-center justify-center gap-5 
        mt-12 w-[292px] h-[68px] font-medium text-sm/4
        sm:w-[150px] sm:h-[40px] sm:text-[10px]/[14px] sm:mt-5
        md:w-[187px] md:h-[44px] md:text-[12px]/[14px] md:mt-12
        xl:w-[292px] xl:h-[69px] xl:text-[18px]/[21px] 
        hover:bg-[#00BCD4] hover:border-none 
        active:bg-[#B2EBF2]">
            REQUEST A SOLUTION
          </button>
        </div>

        <img src="/media/images/MaskGroup.png" alt="image" className="w-[820px]" />
      </div>
    </section>
  )
}
