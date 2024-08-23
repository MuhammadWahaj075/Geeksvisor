'use client';

import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";



const BottomToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

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
    }, []);

    return (
        <>
            {isVisible && (
                <div onClick={goToBtn} className="bg-secondary-bannerPill p-2 rounded-full
                 w-14 h-14 fixed z-20  bottom-14 right-5 md:right-14 cursor-pointer">

                    <FaAngleUp className="text-primary absolute top-4 left-4 text-[24px] " />
                </div>
            )}
        </>
    );
};

export default BottomToTopBtn;