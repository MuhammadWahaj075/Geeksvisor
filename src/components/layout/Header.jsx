"use client";

import React, { useState, useEffect } from "react";
import Button from "../comman/Button";
import { CloseIcon, Logo, MenuIcon } from "../../../public/assets";
import Image from "next/image";
import { menuItems } from "@/utils/mockData";
import { OptimizedImage } from "../comman/Icon";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home"); // Default active menu item

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item.navItem);
    // Additional logic like closing the menu on click if needed
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav
        className={`px-4 pb-5 pt-[22px] z-30 w-full top-0 fixed left-0 lg:px-6 py-2.5 transition-all duration-300  lg:bg-transparent lg:bg-opacity-[12%] backdrop-blur-xl ${
          isScrolled ? " shadow-md" : ""
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <Image src={Logo} alt="Logo" />
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
              {isMenuOpen ? (
                <OptimizedImage src={CloseIcon} />
              ) : (
                <OptimizedImage src={MenuIcon} />
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full  h-screen lg:h-auto lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
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
    </header>
  );
};
