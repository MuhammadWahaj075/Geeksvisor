"use client";

import { useRef } from "react";
import { HowItWorksData } from "@/utils/mockData";
import { useScroll } from "framer-motion";
import Card from "./HowItWorksCards";

export function HowItWorks() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div className="mt-[200px]">
            <div className="flex justify-center flex-col items-center">
                <div className="bg-union flex flex-col gap-4">
                    <h1 className="title_text pt-[180px]">How it works</h1>
                    <p className="description_text text-center w-[320px] lg:w-[470px]">
                        Leave the details to us—we bring your vision to life from start to finish.
                    </p>
                </div>
                <div className="mt-8">
                    {HowItWorksData.map((project, i) => {
                        const targetScale = 1 - (HowItWorksData.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                {...project}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}