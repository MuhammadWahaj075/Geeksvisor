"use client";

import { Button, OptimizedImage } from "@/components/comman";
import { LeftNotFound, RightNotFound } from "../../public/assets";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-auto sm:h-[950px] md:h-[1159px]">
      <div style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
        className="h-[950px] md:h-[1359px] absolute top-[-300px] left-0  w-full">
        <div
        >
          <div className="w-full h-[950px]  md:h-[1159px] flex items-center justify-center">
            <OptimizedImage
              src={RightNotFound}
              className="absolute  w-[165.77px] md:w-[296.14px] top-60 md:top-48 right-0 z-20"
            />
            <div className="flex mt-[255px] items-center flex-col gap-6 justify-center">
              <h1 className="title_text !text-[24px] md:!text-[32px] lg:!text-[56px] !text-primary">
                Error 404
              </h1>
              <p className="title_text !text-[16px] md:!text-[24px] lg:!text-[32px]">
                Oops! We can’t find that page.
              </p>
              <p className="description_text !text-[12px] md:!text-[14px] lg:!text-[20px]">
                It appears the page you seek doesn’t exist.
              </p>
              <Link href={'/'}>
                <Button
                  variant="outline"
                  icon={<IoArrowBack size={20} />}
                  className="w-[320px] sm:w-[186px] h-[36px] sm:!h-[44px] flex items-center flex-row-reverse  sm:px-0"
                >
                  Back to home
                </Button>
              </Link>
            </div>

            <OptimizedImage
              src={LeftNotFound}
              className="absolute w-[165.77px] md:w-[296.14px] z-10 left-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
