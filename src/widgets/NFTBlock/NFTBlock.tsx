import React from 'react'
import { List } from '@shared/ui/List'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { Button } from '@shared/ui/Button'

const dataItems = ['iOS / Android application online configurator', 'App Store / Google Play application publishing module', 'Hosted applications dynamic changes module', 'User base analytics module']
const toolsItems = ['Cloud platforms technical review', 'Mobile e-commerce market research']

export const NFTBlock = () => {
  return (
    <section className="mt-[150px] py-[90px] px-[127px]">
      <SectionTitle text="NFT market analysis on the Ethereum chain" />

      <div className="flex justify-center gap-[60px]">
        <div>
          <List title="DATA" listItems={dataItems} />
          <List title="TOOLS" listItems={toolsItems} />

          <Button>REQUEST A SOLUTION</Button>
        </div>

        <img src="/media/images/MaskGroup.png" alt="image" className="w-[820px]" />
      </div>
    </section>
  )
}
