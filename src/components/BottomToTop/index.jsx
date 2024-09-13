'use client';

import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export const BottomToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    return (
        <>
            <div
                onClick={goToBtn}
                className={`bg-secondary-bannerPill hover:bg-[linear-gradient(90deg,#EE6E24_0%,#FF2E00_100%)]  text-primary hover:text-secondary-bannerPill p-2 rounded-l-xl
                 w-12 h-12 fixed z-20 bottom-10 transform transition-all duration-300 
                 ${isVisible ? 'right-0' : '-right-0'} cursor-pointer`}
                style={{
                    right: isVisible ? "0px" : "-100px",
                }}
            >
                <FaAngleUp className="absolute top-3 left-4 text-[24px]" />
            </div>
        </>
    );
};

