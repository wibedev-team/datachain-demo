'use client'

import { useState } from "react";
import BurgerIcon from "./componentIcons/BurgerMenuIcon";
import CloseMenuIcon from "./componentIcons/CloseMenuIcon";

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
        <div className="md:hidden ">

        {clicked?
        <div className="w-[45%] h-[270px] bg-black">
            <div className="text-white text-sm pl-2 pt-4 pb-2 pr-2 flex justify-between">
                <p>
                    Data CHAIN
                </p>
                <button className="w-[20px] h-[20px]" onClick={handleClick} >
                <CloseMenuIcon/>
                </button>
                
            </div>
            <hr/>
            <ul className="text-white pl-2" >
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