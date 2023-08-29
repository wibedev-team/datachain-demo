import React from "react";
// import { useState } from "react"; 



export const PolygonSchemeImage = () => {
  // "use client"
  // const [width, setWidth] = useState<number>(window.innerWidth);

  return (
    <div className="mr-[1.75rem] w-[369px] h-[417px] 
        md:w-[428px] md:h-[368px] md:flex md:items-end 
        xl:w-[580px] xl:h-[428px] xl:mr-[2.5rem]
        2xl:w-[1019px] 2xl:h-[807px] 2xl:mr-[4rem]">
        <img src="../media/images/Scheme.png" alt="" /> 
          {/* {width <= 768 ? <img src="../media/images/Scheme.png" alt="" /> : <img src="../media/images/SchemeAdaptive.png" alt="" />  }  */}
        </div>
  );
};
