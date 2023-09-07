import React from "react";

  
export const Footer = () => {
    return (
      <div
        className="
        bg-black h-[103px]
        md:h-[176px]
        xl:h-[280px]
        2xl:h-[419px]"
      >
        <div className="
        pt-[20px] mr-auto mb-[20px] ml-auto text-[6px]
        md:pt-[25px] md:mr-auto md:mb-[50px] md:ml-auto md:text-[9px]
        xl:pt-[40px] xl:mr-auto xl:mb-[80px] xl:ml-auto xl:text-[14px]
        2xl:pt-[60px] 2xl:mr-auto 2xl:mb-[120px] 2xl:ml-auto 2xl:text-[20px]">
          <div className="
          flex justify-center gap-[24px] mb-[24px]
          md:gap-[38px] md:mb-[38px]
          xl:gap-[60px] xl:mb-[60px]
          2xl:gap-[90px] 2xl:mb-[90px]"
          >
        <a className="text-white" href="#">About us</a>
        <a className="text-white" href="#">Technology stack </a>
        <a className="text-white" href="#">Solutions</a>
        <a className="text-white" href="#">Team</a>
        <a className="text-white" href="#">Contact us</a>
        </div>

        <div className="
        flex text-white justify-center gap-[20px]
        md:gap-[30px]
        xl:gap-[40px]
        2xl:gap-[50px]">
           <div>
            <p className="
            mb-[3px]
            md:mb-[5px]
            xl:mb-[7px]
            2xl:mb-[10px]">Mail:</p>
            <p className="
            mb-[3px]
            md:mb-[5px]
            xl:mb-[7px]
            2xl:mb-[10px]">Phone:</p>
            <p className="
            mb-[3px]
            md:mb-[5px]
            xl:mb-[7px]
            2xl:mb-[10px]">Address:</p>
        </div>
        <div>
            <p className="
            mb-[3px]
            md:mb-[5px]
            xl:mb-[7px]
            2xl:mb-[10px]">Veryimportantinfo@mail.ru</p>
            <p className="
            mb-[3px]
            md:mb-[5px]
            xl:mb-[7px]
            2xl:mb-[10px]">+7 (953) 598 56-56</p>
            <p className="
            mb-[3px]
            md:mb-[5px]
            xl:mb-[7px]
            2xl:mb-[10px]">ул.Печкина-Чебуречкина 75</p>
        </div> 
        </div>  
        </div>
      </div>
    );
  };