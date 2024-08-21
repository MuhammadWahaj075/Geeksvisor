"use client";

import { useRouter } from "next/navigation";
import { Button, OptimizedImage } from "@/components/comman";
import { LeftNotFound, RightNotFound } from "../../public/assets";
import { IoArrowBack } from "react-icons/io5";

const NotFound = () => {
  const router = useRouter();

  return (
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
        className=" h-[907px] md:h-[1259px] z-50 w-full"
      >
        <div className="w-full  flex items-center justify-center">
          <OptimizedImage
            src={RightNotFound}
            className="absolute  w-[165.77px] md:w-[296.14px] top-0 right-0 z-20"
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
            <Button
              variant="outline"
              icon={<IoArrowBack size={20} />}
              className="py-[14px] !w-ful sm:!w-[186px] flex items-center flex-row-reverse px-[56px] sm:px-0"
              onClick={() => router.push("/")}
            >
              Back to home
            </Button>
          </div>

          <OptimizedImage
            src={LeftNotFound}
            className="absolute w-[165.77px] md:w-[296.14px] z-10 left-0 bottom-0"
          />
        </div>
      </div>
  );
};

export default NotFound;
