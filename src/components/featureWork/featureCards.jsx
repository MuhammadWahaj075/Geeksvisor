'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import "./style.css";
import { projects } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "@/components/comman";
import { IoIosArrowRoundForward } from "react-icons/io";

export const VerticalScrollCarousel = () => {
  const router = useRouter();

  const Card = ({ opacity, children }) => {
    return (
      <div className="card" style={{ opacity }}>
        {children}
      </div>
    );
  };

  const scrollRef = useRef(null);
  const [opacities, setOpacities] = useState([
    1,
    0.8,
    0.5,
    ...Array(projects.length - 3).fill(0.5),
  ]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight } = scrollRef.current;
      const newOpacities = projects.map((_, index) => {
        const cardTop = index * (clientHeight + 10);
        if (scrollTop >= cardTop && scrollTop < cardTop + clientHeight)
          return 1;
        if (scrollTop >= cardTop - clientHeight && scrollTop < cardTop)
          return 0.8;
        return 0.5;
      });
      setOpacities(newOpacities);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="vertical-scroll" ref={scrollRef}>
        {projects?.map((project, index) => (
          <Card key={index} opacity={opacities}>
            <div className="project_cards flex justify-center flex-col lg:flex-row items-center xl:justify-between flex-wrap gap-[30px] mb-10 lg:gap-x-60 lg:gap-y-20">
              <div className="order-1 flex w-auto sm:w-[500px] items-start flex-col gap-4 justify-center">
                <h1 className="!text-[16px] sm:!text-[24px] text-neutral font-inter font-semibold">
                  {project.title}
                </h1>
                <div className="flex w-[320px] lg:w-[400px] flex-wrap gap-2 lg:gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Pill key={tagIndex} text={tag} />
                  ))}
                </div>
                {/* <Button
                  variant="transparent"
                  icon={<IoIosArrowRoundForward size={25} />}
                  className={"!p-0 capitalize !h-0 mt-4 lg:mt-8 font-semibold"}
                  onClick={navigateToProjectDetail}
                >
                  See Project
                </Button> */}
              </div>
              <div className="flex lg:order-2 w-[328px] h-[311px] sm:w-[500px] sm:h-[500px]">
                <OptimizedImage
                  src={project.image}
                  className="object-cover rounded-[8px]"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      {/* <Button
        variant="primary"
        className={"w-[275px] mt-[56px] lg:mt-[129px]"}
        icon={<IoIosArrowRoundForward size={25} />}
      >
        View All Projects
      </Button> */}
    </>
  );
};
