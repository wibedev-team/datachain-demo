"use client";

import { useState } from "react";
import BurgerMenuIcon from "@shared/ui/BurgerMenuIcon";
import CloseMenuIcon from "@shared/ui/CloseMenuIcon";
import MainLogoIcon from "@shared/ui/MainLogoIcon";
import React from "react";

const navLinks = [
  "About us",
  "Technology stack",
  "Solutions",
  "Team",
  "Contact us",
];

const BurgerNavigation = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="md:hidden">
      {clicked ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 background">
          <div className="text-white text-sm pl-7 pt-9 pb-2 pr-2 flex items-center justify-between">
            <p className="flex items-center gap-3 text-base/4 font-bold">
              <MainLogoIcon />
              DataCHAIN
            </p>
            <button className="w-[20px] h-[20px] mr-6" onClick={handleClick}>
              <CloseMenuIcon />
            </button>
          </div>
          <ul className="text-white ml-11">
            {navLinks.map((link, index) => {
              return (
                <li key={index} className="pt-4">
                  <a className="cursor-pointer">{link}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <button className="w-[29px] h-[20px] ml-7 mt-7" onClick={handleClick}>
          <BurgerMenuIcon />
        </button>
      )}
    </div>
  );
};

export default BurgerNavigation;
