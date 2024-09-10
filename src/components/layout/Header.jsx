"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/utils/mockData";
import { Button, OptimizedImage } from "../comman";
import { useScroll } from "@/hooks/UseScroll";
import Link from "next/link";
import { sendGTMEvent } from '@next/third-parties/google'
import { CloseIcon, Logo, MenuIcon, MobLogo } from "../../../public/assets";

export const Header = () => {
  const pathname = usePathname();
  const { isMenuOpen, setIsMenuOpen } = useScroll();

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      className={`px-4 pb-5 pt-[22px] z-30 w-full top-0 sticky left-0 
        lg:px-6 py-2.5 transition-all duration-300 lg:bg-transparent
         lg:bg-opacity-[12%] backdrop-blur-xl`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="hidden md:flex items-center">
          <OptimizedImage src={Logo} />
        </a>
        <a href="/" className="flex md:hidden items-center">
          <OptimizedImage src={MobLogo} />
        </a>
        <div className="flex items-center lg:order-2">
          <Link href={"/contact"} onClick={() => sendGTMEvent('event', 'buttonClicked', { value: '123' })}          >
            <Button
              variant="primary"
              className={"!hidden sm:!block mr-2 lg:mr-0 py-[14px] !h-[45px] px-[24px]"}
            >
              Contact us
            </Button>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm !text-neutral rounded-lg lg:hidden"
            onClick={handleMenuToggle}
          >
            <OptimizedImage src={isMenuOpen ? CloseIcon : MenuIcon} />
          </button>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full h-screen lg:h-auto lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {menuItems?.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={` block border-2 border-b-secondary-light lg:border-none font-inter text-[14px] py-2 pr-4 pl-3 font-bold
                     ${pathname === item.href
                      ? "text-primary "
                      : "text-secondary-light transition-all duration-150 font-normal hover:text-neutral"
                    } border-b border-transparent lg:p-0 lg:border-0`}
                >
                  {item.navItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
