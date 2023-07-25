'use client'

import { useState } from "react";
import BurgerIcon from "./componentIcons/BurgerMenuIcon";
import CloseMenuIcon from "./componentIcons/CloseMenuIcon";
import MainLogoIcon from "./componentIcons/MainLogoIcon";

const navLinks = [
    'About us',
    'Technology stack',
    'Solutions',
    'Team',
    'Contact us'
];

const BurgerNavigation = () => {
    const [clicked,setClicked] = useState(false);
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return ( 
        <div className="md:hidden">
        {clicked?
        <div className="w-[49%] h-[330px] bg-transparent">
            <div className="text-white text-sm pl-7 pt-9 pb-2 pr-2 flex items-center">
                <p className="flex items-center gap-3 text-base/4 font-bold">
                    <MainLogoIcon/>
                    DataCHAIN
                </p>
                <button className="w-[20px] h-[20px] ml-[40%]" onClick={handleClick} >
                <CloseMenuIcon/>
                </button>
                
            </div>
            <ul className="text-white ml-11" >
                {navLinks.map((link,index)=>{
                    return (
                        <li key={index} className="pt-4"><a className="cursor-pointer">{link}</a></li>
                    )
                })}
            </ul>
        </div>:
        <button className="w-[29px] h-[20px] ml-7 mt-7" onClick={handleClick}>
            <BurgerIcon/>
        </button>
        }

        </div>
     );
}
 
export default BurgerNavigation;