"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  GithubIcon,
  FooterLogo,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  DribbleIcon,
} from "../../../public/assets";
import { Button, OptimizedImage } from "../comman";
import {
  footerAddress,
  inquiries,
  mainPages,
  services,
} from "@/utils/mockData";
import useInView from "@/hooks/useInView";
import "./style.css";
import { Input } from "../comman/Input";

export const Footer = () => {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const { inView } = useInView(footerRef, 0.2);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={footerRef}
      className="mt-[100px] lg:mt-[200px] !w-full"
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <motion.h1
              className="title_text lg:w-[393px] !font-normal !text-start"
              variants={fadeInUp}
            >
              Signup to get latest news & offers
            </motion.h1>
            <motion.div
              className="flex flex-col md:flex-row gap-2 pt-4"
              variants={fadeInUp}
            >
              <Input type="text" placeholder="Email here" />
              <Button
                variant="primary"
                style={{ background: "white" }}
                className=" w-full md:w-[113px] !h-[58px] !text-black rounded-xl"
              >
                Signup
              </Button>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <p className="text-base font-medium text-neutral">Main Pages</p>

            <ul className="mt-6 space-y-4">
              {mainPages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.link}
                    title={page.name}
                    className="flex text-sm text-primary-normal opacity-[60%] transition-all duration-200 hover:text-secondary-hover focus:text-secondary-hover"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <p className="text-base font-medium text-neutral">Services</p>

            <ul className="mt-6 space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.link}
                    title={service.name}
                    className="flex text-sm text-primary-normal opacity-[60%] transition-all duration-200 hover:text-secondary-hover focus:text-secondary-hover"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <p className="text-base font-medium text-neutral">Inquiries</p>

            <ul className="mt-6 space-y-5">
              {inquiries.map((inquiry, index) => (
                <li key={index}>
                  <a
                    href={inquiry.link}
                    title={inquiry.name}
                    className="flex text-sm text-primary-normal opacity-[60%] transition-all duration-200 hover:text-secondary-hover focus:text-secondary-hover"
                  >
                    {inquiry.name}
                  </a>
                </li>
              ))}

              <p className="text-base font-medium text-neutral">Address</p>
              <li>
                <a className="flex text-sm text-primary-normal opacity-[60%] transition-all duration-200 hover:text-secondary-hover focus:text-secondary-hover">
                  {footerAddress.addressLine}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="relative mx-auto w-full">
        <motion.div variants={fadeInUp}>
          <h1 className="mt-[108px] text-center text-gradient font-unbound font-normal w-full text-[50px] sm:text-[100px] md:text-[125px] lg:text-[160px] xl:text-[200px] ">
            GeeksVisor
          </h1>
        </motion.div>
        <div className="bg-custom-gradient w-full top-[50px] absolute sm:top-[90px] md:top-[115px] lg:top-[150px] xl:top-[190px] bg-[#0000008F]   backdrop-blur-xl">
          <div className="flex flex-col gap-6 mt-[150px] lg:mt-36 items-center justify-center">
            <h1 className="font-inter font-medium text-neutral text-[24px]">
              Follow us on Social Media
            </h1>
            <div className="flex w-[320px] lg:w-[400px] justify-between">
              <OptimizedImage
                className="cursor-pointer"
                src={FacebookIcon}
                alt={"fb-icon"}
              />
              <OptimizedImage
                className="cursor-pointer"
                src={InstagramIcon}
                alt={"insta-icon"}
              />
              <OptimizedImage
                className="cursor-pointer"
                src={LinkedInIcon}
                alt={"linkedin-icon"}
              />
              <OptimizedImage
                className="cursor-pointer"
                src={GithubIcon}
                alt={"github-icon"}
              />
              <OptimizedImage
                className="cursor-pointer"
                src={DribbleIcon}
                alt={"dribble-icon"}
              />
            </div>
            <hr className="w-[350px] lg:w-[1000px] 2xl:w-[1160px] mt-14 mb-10 opacity-[20%] border-t border-neutral-200" />
            <p className="description_text text-center mb-10">
              Copyright © 2024 All rights reserved by Geekvisor
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
