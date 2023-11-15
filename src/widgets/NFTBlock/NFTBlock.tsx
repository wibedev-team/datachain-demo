import React from 'react'
import { List } from '@shared/ui/List'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { Button } from '@shared/ui/Button'
import Image from 'next/image'
import image from '@public/media/images/MaskGroup.png'
import './NFTBlock.css'
const dataItems = ['iOS / Android application online configurator', 'App Store / Google Play application publishing module', 'Hosted applications dynamic changes module', 'User base analytics module']
const toolsItems = ['Cloud platforms technical review', 'Mobile e-commerce market research']

export const NFTBlock = () => {
  return (
    <section className="mt-8  w-11/12 mdl:px-[20px]">
      <div className="flex flex-col-reverse items-center gap-24 justify-center">
        <div className="flex flex-col ">
          <div className="flex gap-24 mdl:flex-wrap">
            <div className="w-11/12 flex flex-col justify-center">
              <Image src={image} className="rounded-md" alt="image" />
              <div className="positionSquare">
                <div className="absolute square blue"></div>
                <div className="absolute square red"></div>
              </div>
            </div>
            <div>
              <div className="relative">
                <SectionTitle text="NFT market analysis on the Ethereum chain" />
              </div>
              <List title="DATA" listItems={dataItems} />
              <List title="TOOLS" listItems={toolsItems} />
              <Button>REQUEST A SOLUTION</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
