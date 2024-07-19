"use client";

import { IoIosArrowRoundForward } from "react-icons/io";
import { projects } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "../comman";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FeatureProjects = () => {
  return (
    <div className="project_wrapper flex relative overflow-hidden flex-col items-center justify-center flex-wrap gap-8">
      <div className="project_scroll_container h-[1500px] scroll_hidden overflow-y-auto">
        <div className="project_scroll_content">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project_cards flex justify-center flex-col lg:flex-row items-center xl:justify-between flex-wrap gap-[88px] mb-10 lg:gap-60"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="order-1 flex items-start flex-col gap-4 justify-center">
                <h1 className="text-[24px] text-neutral font-inter font-semibold">
                  {project.title}
                </h1>
                <div className="flex w-[320px] lg:w-[400px] flex-wrap gap-2 lg:gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Pill key={tagIndex} className={""} text={tag} />
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
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-[120px] lg:bottom-[200px] left-0 right-0 bg-opacity-[0.16] h-[700px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <Button
        variant="primary"
        className={"w-[275px] mt-[56px] lg:mt-[129px]"}
        icon={<IoIosArrowRoundForward size={25} />}
      >
        View All Projects
      </Button>
    </div>
  );
};
