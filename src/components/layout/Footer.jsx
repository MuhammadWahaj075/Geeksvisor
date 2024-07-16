import React from "react";
import {
  GithubIcon,
  FooterLogo,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  DribbleIcon,
} from "../../../public/assets";
import { Button, OptimizedImage } from "../comman";
import { inquiries, mainPages, services } from "@/utils/mockData";

export const Footer = () => {
  return (
    <section className="mt-[100px] lg:mt-[200px] ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <h1 className="title_text lg:w-[393px] !font-normal !text-start">
              Signup to get latest news & offers
            </h1>

            <div className="flex gap-2 pt-4">
              <input
                type="text"
                placeholder="Email here"
                className="rounded-xl p-[16px] w-[272px] bg-[#0E0F13]"
              />
              <Button className="!bg-neutral w-[113px] h-[58px] !text-black rounded-xl">
                Signup
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-medium text-neutral">Main Pages</p>

            <ul className="mt-6 space-y-4">
              {mainPages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.link}
                    title={page.name}
                    className="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-medium text-neutral">Services</p>

            <ul className="mt-6 space-y-5">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.link}
                    title={service.name}
                    className="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-base font-medium text-neutral">Inquiries</p>

            <ul className="mt-6 space-y-5">
              {inquiries.map((inquiry, index) => (
                <li key={index}>
                  <a
                    href={inquiry.link}
                    title={inquiry.name}
                    className="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {inquiry.name}
                  </a>
                </li>
              ))}

              <p className="text-base font-medium text-neutral">Address</p>
              <li>
                <a className="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600">
                  Flat# 6 Building 19-C South Park Avenue, Ext, D.H.A. Phase 2
                  Defence Housing Authority, Karachi, Pakistan.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <OptimizedImage
          src={FooterLogo}
          className="w-full mt-[200px]"
          alt="footer-logo"
        />
        <div className="bg-custom-gradient w-full h-full absolute top-[175px] bg-[#0000008F] backdrop-blur-xl">
          <div className="flex flex-col gap-6 mt-36 items-center justify-center">
            <h1 className="font-inter font-medium text-neutral text-[24px]">
              Follow us on Social Media
            </h1>
            <div className="flex  w-[320px] lg:w-[400px] justify-between">
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
            <hr className="w-[350px] lg:w-[1160px] mt-14 mb-10 opacity-[20%] border-t border-neutral-200 " />
            <p className="description_text mb-10">
              Copyright © 2024 All rights reserved by Geekvisor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
