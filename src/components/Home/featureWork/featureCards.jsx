"use client";

import { useEffect, useRef, useState } from "react";
import "./style.css";
import { projects } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "@/components/comman";
import { IoIosArrowRoundForward } from "react-icons/io";

export const VerticalScrollCarousel = () => {
  const Card = ({ title, content, opacity, children }) => {
    return (
      <div className="card" style={{ opacity }}>
        {children}
      </div>
    );
  };

  const cards = [
    { title: "Project Title Here 1", content: "Details, Tags, etc." },
    { title: "Project Title Here 2", content: "Details, Tags, etc." },
    { title: "Project Title Here 3", content: "Details, Tags, etc." },
    { title: "Project Title Here 4", content: "Details, Tags, etc." },
    // Add more cards as needed
  ];

  const scrollRef = useRef(null);
  const [opacities, setOpacities] = useState([
    1,
    0.8,
    0.5,
    ...Array(cards.length - 3).fill(0.5),
  ]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight } = scrollRef.current;
      const newOpacities = cards.map((_, index) => {
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
    <div className="vertical-scroll" ref={scrollRef}>
      {projects?.map((project) => (
        <Card>
          <div
            key={project?.id}
            className="project_cards flex justify-center flex-col lg:flex-row items-center xl:justify-between flex-wrap gap-[88px] mb-10 lg:gap-60"
          >
            <div className="order-1 flex items-start flex-col gap-4 justify-center">
              <h1 className="text-[24px] text-neutral font-inter font-semibold">
                {project.title}
              </h1>
              <div className="flex w-[320px] lg:w-[400px] flex-wrap gap-2 lg:gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <Pill key={tagIndex} text={tag} />
                ))}
              </div>
              <Button
                variant="transparent"
                icon={<IoIosArrowRoundForward size={25} />}
                className={"!p-0 capitalize !h-0 mt-[32px] font-semibold"}
              >
                See Project
              </Button>
            </div>
            <div className="flex lg:order-2">
              <OptimizedImage
                src={project.image}
                className="w-[350px] lg:w-auto"
                alt={project.title}
              />
            </div>
          </div>
        </Card>
      ))}
      {/* // <div className="card-wrapper" key={index}>
        //   <Card
          
        //     opacity={opacities[index]}
        //   />
        // </div> */}
    </div>
  );
};
