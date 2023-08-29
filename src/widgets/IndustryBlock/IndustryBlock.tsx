import React from 'react'

export const IndustryBlock = () => {
  return (
    <div
      className="w-[335px] py-[0px] px-[0px]
        sm:w-[808px] sm:py-[38px] sm:px-[55px]
        md:w-[1226px] md:py-[60px] md:px-[83px]
        xl:w-[1920px] xl:py-[90px] xl:px-[130px]">
      <h2
        className="text-light-green font-medium leading-[150%] 
            text-[30px]/[45px] mb-[20px]
            sm:text-[25.25px]/[37.875px] sm:mb-[25px]
            md:text-[38.313px]/[57.469px] md:mb-[38px]
            xl:text-[60px]/[90px] xl:mb-[60px]">
        Industry solutions
      </h2>
      <div className="flex flex-row items-start">
        <div
          className="shrink-0 
            sm:mb-[25px] sm:pl-[60px]
            md:mb-[38px] md:pl-[50px]
            xl:pl-[138px]">
          <h3
            className="text-white
            text-[24px]/[24px] mb-[60px]
            sm:text-[16.833px]/[25.25px] 
            md:text-[25.861px]/[38.791px]
            xl:text-[40px]/[60px] xl:mb-[60px] ">
            TV & broadcast virtual production
          </h3>
          <p
            className="text-white mb-[0.625rem]
            text-[18.339px]/[27.509px]
            sm:text-[12.625px]/[18.938px]
            md:text-[19.156px]/[28.734px]
            xl:text-[30px]/[45px]">
            DATA
          </p>
          <ul
            className="text-light-gray list-disc mb-[1.875rem] ml-[1.5rem]
            text-[14.672px]/[22.007px]
            sm:text-[10.1px]/[15.15px]
            md:text-[15.325px]/[22.988px]
            xl:text-[24px]/[36px]">
            <li>LED wall, Chromakey VP, XR setup, AR</li>
            <li>Camera tracking system</li>
            <li>Merged classic and VP pipeline</li>
            <li>VP educational materials</li>
          </ul>
          <p
            className="text-white mb-[0.625rem]
            text-[18.339px]/[27.509px]
            sm:text-[12.625px]/[18.938px]
            md:text-[19.156px]/[28.734px]
            xl:text-[30px]/[45px]">
            TOOLS
          </p>
          <ul
            className="text-light-gray list-disc ml-[1.5rem]
            text-[14.672px]/[22.007px]
            sm:text-[10.1px]/[15.15px]
            md:text-[15.325px]/[22.988px]
            xl:text-[24px]/[36px]">
            <li>Unreal Engine plugins</li>
            <li>Hardware integrated</li>
            <li>Real-time Broadcast Compositing System</li>
          </ul>
          <button
            className="flex  text-white   border-solid border-[1px] border-green-100 items-center justify-center gap-5 
            mt-[30px] w-[292px] h-[68px] font-medium text-sm/4
            sm:w-[150px] sm:h-[40px] sm:text-[10px]/[14px] sm:mt-[25px]
            md:w-[187px] md:h-[44px] md:text-[12px]/[14px] md:mt-[53px]
            xl:w-[292px] xl:h-[69px] xl:text-[18px]/[21px] xl:mt-[60px]
            hover:bg-[#00BCD4] hover:border-none 
            active:bg-[#B2EBF2]">
            Request a solution
          </button>
        </div>
        <div
          className="w-[335px] h-[157px] shrink-0 ml-[3.75rem] mt-auto mb-auto
                sm:w-[340px] sm:h-[180px] 
                md:w-[530px] md:h-[306px] 
                xl:w-[819px] xl:h-[429px]">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AVvcaNerxok" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}
