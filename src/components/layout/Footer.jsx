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
import Link from "next/link";

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
      className="mt-10 md:mt-[100px] lg:mt-[200px] !w-full"
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
          {/* <div className="col-span-2 md:col-span-4 xl:pr-8">
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
          </div> */}
          {/* <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <p className="text-base font-medium text-neutral">Main Pages</p>

            <ul className="mt-6 space-y-4">
              {mainPages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.link}
                    title={page.name}
                    className="footer_social_links"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <p className="text-base font-medium text-neutral">Services</p>

            <ul className="mt-6 space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <p
                    title={service.name}
                    className="footer_social_links"
                  >
                    {service.name}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <p className="text-base font-medium text-neutral">Inquiries</p>

            <ul className="mt-6 space-y-5">
              {inquiries.map((inquiry, index) => (
                <li key={index}>
                  <Link
                    href={inquiry.link}
                    title={inquiry.name}
                    className="footer_social_links"
                  >
                    {inquiry.name}
                  </Link>
                </li>
              ))}
              <p className="text-base font-medium text-neutral">Address</p>
              <li>
                <p className="footer_social_links">
                  {footerAddress.addressLine}
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="relative mx-auto w-full">
        <motion.div variants={fadeInUp}>
          <h1 className="mt-[108px] text-center text-gradient font-unbound font-normal w-full text-[50px] sm:text-[85px] md:text-[110px] lg:text-[150px] xl:text-[185px] ">
            GeeksVisor
          </h1>
        </motion.div>
        <div style={{
          boxShadow: ' 0px -12px 59.8px 0px #000000'
        }}
          className="bg-custom-gradient backdrop-blur-3xl backdrop-brightness-50 w-full absolute top-[50px] sm:top-[70px] md:top-[99px] lg:top-[150px] xl:top-[160px] bg-[#0000008F] ">
          <div className="flex flex-col  gap-6 mt-[150px] lg:mt-36 items-center justify-center">
            <h1 className="font-inter font-medium text-neutral text-[12.13px] md:text-[24px]">
              Follow us on Social Media
            </h1>
            <div className="flex justify-between gap-6 md:gap-12 lg:gap-[50px]">
              <Link href="https://facebook.com/geeksvisor" target="_blank">
                <OptimizedImage
                  className="cursor-pointer !w-[12.13px] md:!w-[24px] lg:!w-[40px] "
                  src={FacebookIcon}
                />
              </Link>
              {/* <OptimizedImage
                className="cursor-pointer"
                src={InstagramIcon}
              /> */}
              <Link href="https://www.linkedin.com/company/geeksvisor" target="_blank">
                <OptimizedImage
                  className="cursor-pointer !w-[12.13px] md:!w-[24px] lg:!w-[40px] "
                  src={LinkedInIcon}
                />
              </Link>
            </div>
            <hr className="w-[350px] lg:w-[1000px] 2xl:w-[1160px] mt-14 mb-10 opacity-[20%] border-t border-neutral-200" />
            <p className="description_text text-center mb-10">
              Copyright © 2024 All rights reserved by Geeksvisor
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
