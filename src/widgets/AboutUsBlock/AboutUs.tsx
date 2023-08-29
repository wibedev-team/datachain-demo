import React from "react";
import { PolygonSchemeImage } from "../../shared/ui/PolygonSchemeImage";
  
export const AboutUsBlock = () => {
    return (
      <div
        className=" block mt-[133px]
        md:flex md:w-[100vw] md:h-[406px] md:items-center md:justify-around 
        xl:h-[616px] xl:justify-around gap-[200px] 
        2xl:h-[886px] 2xl:justify-between 2xl: 2xl:gap-[158px] "
      >
        <div className="w-[341px] h-[157px] ml-[1.75rem] mr-auto mb-[60px] md:w-[227px] md:h-[112px] xl:w-[344px] xl:h-[233px] xl:ml-[4rem] 2xl:w-[555px] 2xl:h-[443px] ">
          <h2 className="text-[37px]  text-[#B2EBF2] mb-[15px]
          md:text-[25px]
          xl:text-[38px]
          2xl:text-[60px] 
          ">About us</h2>
          <p className="text-[16px]  text-[gray]
          md:text-[13px]
          xl:text-[20px]
          2xl:text-[30px]">DataChain is a data-driven solution provider. We support customers' digital transformation by researching their
             market and developing essential software tools for analytics, visualization, automatization and monitoring.</p>
        </div>
        <PolygonSchemeImage/>
      </div>
    );
  };