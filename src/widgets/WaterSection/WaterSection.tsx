import Image from 'next/image'
import React from 'react'
import image from '@public/media/images/Bitmap.png'

export const WaterSection = () => {
  return (
    <section className="max-w-screen-[1920px] mt-36 py-24 px-16">
      <div>
        <h2 className="text-cyan-200 text-6xl font-medium leading-normal uppercase mb-24">water transportation market</h2>
        <div className="flex flex-wrap justify-center">
          <div className="pl-36 vs:pl-0">
            <div className="mb-8">
              <h3 className="text-white text-3xl font-normal leading-normal tracking-widest uppercase">data</h3>
              <ul className="list-disc text-white/60 text-2xl font-medium leading-normal ml-9">
                <li>Cloud platforms technical review</li>
                <li>Mobile e-commerce market research</li>
              </ul>
            </div>
            <div className="mb-16">
              <h3 className="text-white text-3xl font-normal leading-normal tracking-widest uppercase">tools</h3>
              <ul className="list-disc text-white/60 text-2xl font-medium leading-normal ml-9">
                <li>iOS / Android application online configuration</li>
                <li>App Store / Google Play application publishing module</li>
                <li>Hosted applications dynamic changes module</li>
                <li>User base analytics module</li>
              </ul>
            </div>
            <button
              className="flex  text-white   border-solid border-[1px] border-green-100 items-center justify-center gap-5 
							mt-12 w-[292px] h-[68px] font-medium text-sm/4
							sm:w-[150px] sm:h-[40px] sm:text-[10px]/[14px] sm:mt-5
							md:w-[187px] md:h-[44px] md:text-[12px]/[14px] md:mt-12
							xl:w-[292px] xl:h-[69px] xl:text-[18px]/[21px] 
						hover:bg-[#00BCD4] hover:border-none 
						active:bg-[#B2EBF2]">
              REQUEST A SOLUTION
            </button>
          </div>
          <Image className="ml-16 vs:mt-5" src={image} alt="Picture" />
        </div>
      </div>
    </section>
  )
}
