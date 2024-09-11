'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    // Function to check if the index is 1, 3, 5, etc.
    const hasDefaultShadow = (idx) => {
        return idx % 2 !== 0; // This checks if the index is odd (1, 3, 5, ...)
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
            {items.map((item, idx) => (
                <div
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Card
                        hasDefaultShadow={hasDefaultShadow(idx)}
                        isHovered={hoveredIndex === idx}
                    >
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    children,
    hasDefaultShadow,
    isHovered
}) => {
    return (
        <motion.div
            className={`rounded-2xl h-full w-full p-4 overflow-hidden  bg-black transition-all duration-500 ease-in-out 
                ${hasDefaultShadow
                ? 'shadow-lg shadow-[#b77137]'
                : isHovered
                    ? 'shadow-lg shadow-[#b77137]'
                    : ''
                } relative z-20`}
            initial={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </motion.div>
    );
};

export const CardTitle = ({ children }) => {
    return (
        <h4 className="text-zinc-100 text-xl font-inter font-bold tracking-wide mt-4">
            {children}
        </h4>
    );
};

export const CardDescription = ({ children }) => {
    return (
        <p className="mt-8 text-zinc-400 font-inter tracking-wide leading-relaxed text-sm">
            {children}
        </p>
    );
};
