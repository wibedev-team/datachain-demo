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
      <SectionTitle text="Mobile e-commerce application builder" />

      <div className="flex flex-col justify-between md:flex-row-reverse md:mt-[45px] lg:mt-[65px] xl:mt-[110px]">
        <Image
          className="object-fill my-[60px] md:my-0 md:max-h-[173px] md:max-w-[337px] lg:max-h-[263px] lg:max-w-[512px] xl:max-w-full xl:max-h-[411px]"
          src="/media/images/devices.png"
          alt=""
          width={801}
          height={411}
        />

        <div className="md:pl-[58px] lg:pl-[90px] xl:pl-[140px]">
          <ToolkitList title="data" list={DataList} />
          <ToolkitList className="mt-[15px] md:mt-[12px] lg:mt-[19px] xl:mt-[35px]" title="tools" list={ToolsList} />

          <Button className="mt-[30px] lg:mt-[50px] xl:mt-[80px]" />
        </div>
      </div>
    </section>
  )
}
