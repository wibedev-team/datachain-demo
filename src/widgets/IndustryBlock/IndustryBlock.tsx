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
      className="w-[335px] py-[60px] px-[20px]
        sm:w-[808px] sm:py-[38px] sm:px-[55px]
        md:w-[1226px] md:py-[60px] md:px-[83px]
        xl:w-[1920px] xl:py-[90px] xl:px-[130px]">
      <SectionTitle text="Industry solutions" />
      <div
        className="flex flex-col items-start
          mt-[20px]
          sm:mt-[25px]
          md:mt-[38px]
          xl:mt-[60px]">
        <div
          className="flex flex-col h-[345px] 
            sm:h-[38px] sm:flex-row 
            md:h-[58px] md:flex-row
            xl:h-[90px] xl:flex-row">
          <SectionSubtitle text={'TV & broadcast virtual production'} className="xl:mb-[60px]" />
          <div
            className="w-[335px] h-[157px] shrink-0  mt-[60px] mb-[60px]
              sm:w-[340px] sm:h-[180px] sm:ml-[30px] 
              md:w-[530px] md:h-[306px] md:ml-[70px]
              xl:w-[819px] xl:h-[429px] xl:ml-[60px]">
            <video className="w-[100%] h-[100%]" autoPlay={false} loop preload="false" controls poster="/media/images/poster.jpg">
              <source src="/media/videos/unreal.mp4" />
            </video>
          </div>
        </div>

        <div
          className="shrink-0 
            sm:mb-[25px] sm:pl-[60px]
            md:mb-[38px] md:pl-[50px]
            xl:pl-[138px]">
          <SectionList list={DataList} title={'DATA'} className={'mb-[18px] sm:mb-[13px] md:mb-[20px] xl:mb-[30px]'} />
          <SectionList list={ToolsList} title={'TOOLS'} className={'mb-[30px] sm:mb-[25px] md:mb-[53px] xl:mb-[60px]'} />
          <SectionButton text={'REQUEST A SOLUTION'} />
        </div>
      </div>
    </section>
  )
}
