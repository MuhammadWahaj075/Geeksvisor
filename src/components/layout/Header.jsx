"use client";

import React, { useState } from "react";
import { CloseIcon, Logo, MenuIcon } from "../../../public/assets";
import { menuItems } from "@/utils/mockData";
import { Button, OptimizedImage } from "../comman";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item?.navItem);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`px-4 pb-5 pt-[22px] z-30 w-full top-0 fixed left-0 
        lg:px-6 py-2.5 transition-all duration-300 lg:bg-transparent
         lg:bg-opacity-[12%] bg-black lg:backdrop-blur-xl`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="#" className="flex items-center">
          <OptimizedImage src={Logo} />
        </a>
        <div className="flex items-center lg:order-2">
          <Button
            variant="primary"
            className={"mr-2 lg:mr-0 py-[14px] px-[24px]"}
          >
            Contact us
          </Button>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <OptimizedImage src={isMenuOpen ? CloseIcon : MenuIcon} />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } justify-between items-center w-full  h-screen lg:h-auto lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {menuItems?.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className={`block  border-2 border-b-neutral lg:border-none font-inter text-base py-2 pr-4 pl-3 font-bold ${
                    activeNavItem === item.navItem
                      ? "text-neutral "
                      : "text-neutral font-normal"
                  } border-b border-transparent lg:p-0 lg:border-0`}
                  onClick={() => handleNavItemClick(item)}
                  aria-current={
                    activeNavItem === item.navItem ? "page" : undefined
                  }
                >
                  {item.navItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
