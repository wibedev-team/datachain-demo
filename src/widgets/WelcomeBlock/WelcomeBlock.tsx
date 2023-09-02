import React from 'react'
import { WriteToUsIcon } from '@shared/ui/WriteToUsIcon'

export const WelcomeBlock = () => {
  return (
    <div
      className="
        w-[309px] mt-64 ml-7
        sm:w-[368px] sm:mt-28
        md:w-[558px] md:mt-48 md:ml-16
        xl:w-[875px] xl:mt-72
    ">
      <h1
        className=" text-white font-extrabold
          text-[39px]/[41px]
          sm:text-[49px]/[55px]
          md:text-[75px]/[85px]
          xl:text-[118px]/[133px]
        ">
        Research <br /> & development
      </h1>

      <p
        className=" text-gray-400 opacity-40
          text-[15px]/[23px] mt-7
          sm:text-[11px]/[15px]
          md:text-[16px]/[23px] md:mt-9
          xl:text-[24px]/[36px] xl:mt-14
        ">
        Essential software tools for analytics,
        <br /> visualization, automatization and monitoring.
      </p>

      <button
        className="flex  text-white   border-solid border-[1px] border-green-100 items-center justify-center gap-5 
          mt-12 w-[292px] h-[68px] font-medium text-sm/4
          sm:w-[150px] sm:h-[40px] sm:text-[10px]/[14px] sm:mt-5
          md:w-[187px] md:h-[44px] md:text-[12px]/[14px] md:mt-12
          xl:w-[292px] xl:h-[69px] xl:text-[18px]/[21px] 
          hover:bg-[#00BCD4] hover:border-none 
          active:bg-[#B2EBF2]">
        WRITE TO US
        <WriteToUsIcon />
      </button>
    </div>
  )
}
