"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MeetTeamMockData, teamMembers } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "@/components/comman";

import './style.css' 

export const MeetFounders = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showIcon, setShowIcon] = useState(false);

  // const handleViewProfileClick = () => {
  //   router.push(`/team-member`);
  // };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setShowIcon(false); // Reset the icon visibility when hover starts
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowIcon(false); // Hide the icon when hover ends
  };

  const handleTransitionEnd = () => {
    if (hoveredIndex !== null) {
      setShowIcon(true); // Show the icon after the transition is complete
    }
  };

  return (
    <div className="!mt-28 lg:!mt-[160px] mx-auto flex justify-center max-w-screen-xl">
      <div className="flex flex-col px-5 items-center gap-[70px]">
        <div className="flex flex-col gap-4 items-center  sm:items-start w-full lg:items-center">
          <h1 className="title_text">{MeetTeamMockData.title}</h1>
          <p className="description_text text-center sm:text-start lg:text-center w-[320px] sm:w-[600px] lg:w-[705px]">{MeetTeamMockData.subtitle}</p>
        </div>
        <div className="flex gap-4 md:gap-6 flex-col lg:flex-row flex-wrap justify-center">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="profile_sec !mx-auto  flex flex-col w-auto sm:w-[616px] lg:w-auto xl:w-[370px] justify-center gap-y-3"
            >
              <div className="relative overflow-hidden">
              <Link
                  target="_blank"
                  href={member?.profile}
                >
                    <Button variant="" className="linkedin_btn absolute right-3 bottom-2 !bg-[#0066C8]">
                      <span className="icon_in">in</span>
                      <IoIosArrowRoundForward
                        className="arrow_icon"
                        size={25}
                      />
                    </Button>
                </Link>


                <OptimizedImage
                  src={member?.imageSrc}
                  className="rounded-[8px] w-[328px] sm:w-[616px]  lg:w-[370px]"
                />
              </div>
              <h2 className="text-neutral font-unbound font-semibold !text-[14px] sm:!text-[24px]">
                {member?.name}
                <p
                  className={
                    "description_text !text-[12px] !capitalize sm:!text-[16px] !font-normal"
                  }
                >
                  {member?.position}
                </p>
              </h2>
              <div className="flex justify-start flex-col items-start gap-4 lg:gap-6">
                <p className="text-primary-light font-inter !font-medium !text-[12px] sm:!text-[18px]">
                  {member?.role}
                </p>

                <Link  target="_blank" href={member.profile}>
                  <Button
                    variant="transparent"
                    icon={<IoIosArrowRoundForward size={25} />}
                    className={"!p-0"}
                    // onClick={handleViewProfileClick}
                  >
                    View profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
