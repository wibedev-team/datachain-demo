import React from 'react'
import { SectionTitle } from '@shared/ui/SectionTitle'
import { SectionList } from '@shared/ui/SectionList'
import { SectionButton } from '@shared/ui/SectionButton'
import { SectionSubtitle } from '@shared/ui/SectionSubtitle'

const ToolsList = [
  { id: 1, text: 'Unreal Engine plugins' },
  { id: 2, text: 'Hardware integrated' },
  { id: 3, text: 'Real-time Broadcast Compositing System' },
]
const DataList = [
  { id: 1, text: 'LED wall, Chromakey VP, XR setup, AR' },
  { id: 2, text: 'Camera tracking system' },
  { id: 3, text: 'Merged classic and VP pipeline' },
  { id: 4, text: 'VP educational materials' },
]

export const IndustryBlock = () => {
  return (
    <section
      className="w-[335px] py-[60px] px-[20px]
        md:w-[808px] md:py-[38px] md:px-[55px]
        xl:w-[1226px] xl:py-[60px] xl:px-[83px]
        2xl:w-[1920px] 2xl:py-[90px] 2xl:px-[130px]">
      <SectionTitle text="Industry solutions" />
      <div
        className="flex flex-col items-start
          mt-[20px]
          md:mt-[25px]
          xl:mt-[38px]
          2xl:mt-[60px]">
        <div
          className="flex flex-col h-[345px] 
            md:h-[38px] md:flex-row 
            xl:h-[58px] xl:flex-row
            2xl:h-[90px] 2xl:flex-row">
          <SectionSubtitle text={'TV & broadcast virtual production'} className="2xl:mb-[60px]" />
          <div
            className="w-[335px] h-[157px] shrink-0 mt-[60px] mb-[60px]
              md:w-[340px] md:h-[180px] md:ml-[30px] 
              xl:w-[530px] xl:h-[306px] xl:ml-[70px]
              2xl:w-[819px] 2xl:h-[429px] 2xl:ml-[60px]">
            <video className="w-[100%] h-[100%]" autoPlay={false} loop preload="false" controls poster="/media/images/poster.jpg">
              <source src="/media/videos/unreal.mp4" />
            </video>
          </div>
        </div>

        <div
          className="shrink-0 
            md:mb-[25px] md:pl-[60px]
            xl:mb-[38px] xl:pl-[50px]
            2xl:pl-[138px]">
          <SectionList list={DataList} title={'DATA'} className={'mb-[18px] md:mb-[13px] xl:mb-[20px] 2xl:mb-[30px]'} />
          <SectionList list={ToolsList} title={'TOOLS'} className={'mb-[30px] md:mb-[25px] xl:mb-[53px] 2xl:mb-[60px]'} />
          <SectionButton text={'REQUEST A SOLUTION'} />
        </div>
      </div>
    </section>
  )
}
