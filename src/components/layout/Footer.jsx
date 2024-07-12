import React from "react";
import Button from "../comman/Button";
import Image from "next/image";
import { FooterLogo } from "../../../public/assets";

export const Footer = () => {
  return (
    <section class="py-10 mt-[200px] sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
          <div class="col-span-2 md:col-span-4 xl:pr-8">
            <h1 className="title_text lg:w-[393px] !font-normal !text-start">
              Signup to get latest news & offers
            </h1>

            <div className="flex gap-2 pt-4">
              <input
                type="text"
                placeholder="Email here"
                className="rounded-xl p-[16px] w-[272px] bg-[#0E0F13]"
              />
              <Button
                className={
                  "!bg-neutral w-[113px] h-[58px] !text-black rounded-xl"
                }
              >
                Signup
              </Button>
            </div>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-medium text-neutral">Main Pages</p>

            <ul class="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Work
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  {" "}
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-medium text-neutral">Services</p>

            <ul class="mt-6 space-y-5">
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  AWS
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Serverless
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  React.Js
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Nodejs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Next.js
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  React Native Flutter
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Flutter
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-medium text-neutral">Inquires</p>

            <ul class="mt-6 space-y-5">
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  mailus@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  +92 340 8636954
                </a>
              </li>

              <p class="text-base font-medium text-neutral">Address</p>
              <li>
                <a
                  href="#"
                  title=""
                  class="flex text-sm text-[#FFFFFFE5] opacity-[60%] transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  Flat# 6 Building 19-C South Park Avenue, Ext, D.H.A. Phase 2
                  Defence Housing Authority, Karachi, Pakistan.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={FooterLogo}
          className="w-full mt-[200px]"
          alt="footer-logo"
        />
        <div className="bg-custom-gradient w-full h-full absolute top-[150px] 
        bg-[#0000008F] backdrop-blur-lg">
          <div className="flex items-center justify-center">
              <h1 className="font-inter font-medium text-neutral text-[24px]">Follow us on Social Media</h1>
          </div>
        </div>
        /
      </div>
    </section>
  );
};
