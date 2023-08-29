import React from 'react'
import Image from 'next/image'

import { ToolkitList } from '@shared/ui/ToolkitList'

import { SectionTitle } from '@shared/ui/SectionTitle'

const DataList = ['Cloud platforms technical review', 'Mobile e-commerce market research']
const ToolsList = ['iOS / Android application online configurator', 'App Store / Google Play application publishing module', 'Hosted applications dynamic changes module', 'User base analytics module']

export const MobileBlock = () => {
  return (
    <section className="container mt-[60px]">
      <SectionTitle text="Mobile E-commerce Application Builder" />

      <Image className="mt-[60px] mb-[60px]" src="/media/images/devices.png" alt="" width={801} height={411} />

      <ToolkitList title="data" list={DataList} />
      <ToolkitList className="mt-[15px]" title="tools" list={ToolsList} />
    </section>
  )
}
