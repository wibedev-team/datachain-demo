import React from 'react'

import { SectionTitle } from '@shared/ui/SectionTitle'
import { SectionList } from '@shared/ui/SectionList'
import { SectionButton } from '@shared/ui/SectionButton'
import { SectionSubtitle } from '@shared/ui/SectionSubtitle'

const ToolsList = ['Unreal Engine plugins', 'Hardware integrated', 'Real-time Broadcast Compositing System']
const DataList = ['LED wall, Chromakey VP, XR setup, AR', 'Camera tracking system', 'Merged classic and VP pipeline', 'VP educational materials']

export const IndustryBlock = () => {
  return (
    <section
      className="w-[335px] py-[20px] px-[20px]
        sm:w-[808px] sm:py-[38px] sm:px-[55px]
        md:w-[1226px] md:py-[60px] md:px-[83px]
        xl:w-[1920px] xl:py-[90px] xl:px-[130px]">
      <SectionTitle text="Industry solutions" />
      <div
        className="flex flex-col items-start
        mt-[20px]
        sm:mt-[25px] sm:flex-row-reverse
        md:mt-[38px] md:flex-row-reverse
        xl:mt-[60px] xl:flex-row-reverse">
        <div
          className="w-[335px] h-[157px] shrink-0  mt-[60px] mb-[60px]
                sm:w-[340px] sm:h-[180px] sm:ml-[30px] 
                md:w-[530px] md:h-[306px] md:ml-[70px]
                xl:w-[819px] xl:h-[429px] xl:ml-[60px]">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AVvcaNerxok" allowFullScreen></iframe>
        </div>
        <div
          className="shrink-0 
            sm:mb-[25px] sm:pl-[60px]
            md:mb-[38px] md:pl-[50px]
            xl:pl-[138px]">
          <SectionSubtitle text={'TV & broadcast virtual production'} className="mb-[60px] xl:mb-[60px]" />
          <SectionList list={DataList} title={'DATA'} className={'mb-[1.875rem]'} />
          <SectionList list={ToolsList} title={'TOOLS'} className={'mb-[30px] sm:mb-[25px] md:mb-[53px] xl:mb-[60px]'} />
          <SectionButton text={'REQUEST A SOLUTION'} />
        </div>
      </div>
    </section>
  )
}
