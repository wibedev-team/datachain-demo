import React from 'react'
import Image from 'next/image'

import { ToolkitList } from '@shared/ui/ToolkitList'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { Button } from '@shared/ui/Button'

const DataList = ['Cloud platforms technical review', 'Mobile e-commerce market research']
const ToolsList = ['iOS / Android application online configurator', 'App Store / Google Play application publishing module', 'Hosted applications dynamic changes module', 'User base analytics module']

export const MobileBlock = () => {
  return (
    <section className="container mt-[60px] md:mt-[75px]">
      <SectionTitle text="Mobile E-commerce Application Builder" />

      <div className="flex flex-col md:flex-row-reverse md:mt-[37.88px] md:gap-[15px] lg:mt-[58px] lg:gap-[20px] xl:gap-[32px]">
        <Image
          className="object-contain my-[60px] md:my-0 md:max-h-[173px] md:max-w-[337px] lg:max-h-[263px] lg:max-w-[512px] 2xl:max-w-full 2xl:max-h-full"
          src="/media/images/devices.png"
          alt=""
          width={801}
          height={411}
        />

        <div className="md:pl-[58px] lg:pl-[58px] flex-1 xl:max-w-[700px] w-full">
          <ToolkitList title="data" list={DataList} />
          <ToolkitList className="mt-[15px] md:mt-[12px] lg:mt-[19px] xl:mt-[30px]" title="tools" list={ToolsList} />

          <Button className="mt-[30px] xl:mt-[60px]" />
        </div>
      </div>
    </section>
  )
}
