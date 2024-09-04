'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        (<div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            {items.map((item, idx) => (
                <div
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 bg-orange-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }} />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>)
    );
};

export const Card = ({
    children
}) => {
    return (
        (<div
            className=
            "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-orange-700 relative z-20">
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>)
    );
};
export const CardTitle = ({
    children
}) => {
    return (
        (<h4 className={"text-zinc-100 font-inter font-bold tracking-wide mt-4"}>
            {children}
        </h4>)
    );
};
export const CardDescription = ({
    children
}) => {
    return (
        (<p
            className={"mt-8 text-zinc-400 font-inter tracking-wide leading-relaxed text-sm"}>
            {children}
        </p>)
    );
};
