'use client'

import React from 'react'
import arrowLeft from '@public/media/images/arrowLeft.png'
import arrowRight from '@public/media/images/arrowRight.png'
import Image from 'next/image'
import { useRef } from 'react'
import { SectionTitle } from 'src/shared/ui/SectionTitle'
import { teamItems } from './teamItems'
import { Button } from 'src/shared/ui/Button'

const OFFSET_WIDTH = 324

export const TeamBlock = () => {
  const listRef = useRef<HTMLDivElement>(null)

  const scrollContainerBy = (distance: number) => listRef.current?.scrollBy({ left: distance, behavior: 'smooth' })

  return (
    <section className="px-[130px] py-[90px]">
      <SectionTitle text="Team" />
      <div className="flex flex-row items-center gap-[10px]">
        <Image src={arrowLeft} alt="left" className="cursor-pointer" onClick={() => scrollContainerBy(-OFFSET_WIDTH)} />
        <div className={`flex flex-row gap-[40px] overflow-x-hidden`} ref={listRef}>
          {teamItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-[30px]">
              <div className="w-[284px] h-[284px] border-[6px] border-[#B2EBF2] border-opacity-[0.3]" />
              <div className="flex flex-col items-center gap-[20px] text-[30px]/[45px]">
                <p className="text-white">{item.name}</p>
                <p className="text-white text-opacity-[0.6] font-bold">{item.position}</p>
                <Button className="xl:w-[176px] xl:h-[57px]">BIO</Button>
              </div>
            </div>
          ))}
        </div>
        <Image src={arrowRight} alt="right" className="cursor-pointer" onClick={() => scrollContainerBy(OFFSET_WIDTH)} />
      </div>
    </section>
  )
}
