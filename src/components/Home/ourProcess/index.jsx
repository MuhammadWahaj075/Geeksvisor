"use client";

import { useRef } from "react";
import { HowItWorksData, OurProcessData } from "@/utils/mockData";
import { useScroll } from "framer-motion";
import Card from "./OurProcessCards";

export function OurProcess() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div className="relative main_container_gapper">
            <div className="flex justify-center flex-col items-center">
                <div className="bg-union absolute !top-0 pb-[300px] flex flex-col gap-4">
                    <h1 className="relative z-10 title_text pt-[180px]">{OurProcessData.title}</h1>
                    <p className="relative z-10 description_text text-center w-[250px] lg:w-[470px]">
                      {OurProcessData.description}
                    </p>
                </div>
                <div className="!mb-16 mt-8">
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