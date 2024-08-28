"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MeetTeamMockData, teamMembers } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "@/components/comman";
import Link from "next/link";

export const MeetOurTeam = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleViewProfileClick = () => {
    router.push(`/team-member`);
  };

  return (
    <div className="!mt-10 lg:!mt-[160px] mx-auto flex justify-center max-w-screen-xl">
      <div className="flex flex-col px-5 items-center gap-[70px]">
        <div className="flex flex-col gap-4 items-center sm:items-start w-full lg:items-center">
          <h1 className="title_text">{MeetTeamMockData.title}</h1>
          <p className="description_text">{MeetTeamMockData.subtitle}</p>
        </div>
        <div className="flex gap-4 md:gap-6  flex-col lg:flex-row flex-wrap justify-center">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="profile_sec !mx-auto  flex flex-col w-auto sm:w-[616px] lg:w-auto xl:w-[370px] justify-center gap-y-3"
            >
              <div className="relative overflow-hidden">
                <Link
                  target="_blank"
                  href={member?.profile}
                  className="hover:!h-[100.79px] hover:!w-[100.79px] !w-[44px] !h-[44px]"
                >
                  <Button
                    variant=""
                    className={
                      "absolute font-unbound  text-neutral !bg-[#0066C8] hover:border hover:-bottom-4 hover:-right-5 transition-all duration-1000 hover:!h-[100.79px] hover:!w-[100.79px] bottom-4 right-3 !w-[44px] !h-[44px] !text-[24px] !rounded-full !lowercase flex items-center justify-center"
                    }
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`transition-all duration-1000 flex items-center  justify-center gap-2`}
                    >
                      <span className="">in</span>
                    </div>
                  </Button>
                </Link>
                <OptimizedImage
                  src={member?.imageSrc}
                  className="rounded-[8px] w-[328px] h-[317px] sm:w-[616px] sm:h-[370px]  lg:w-[370px]"
                />
              </div>
              <h2 className="text-neutral font-unbound font-semibold !text-[14px] sm:!text-[24px]">
                {member?.name}
                <p className={'description_text !text-[12px] !capitalize sm:!text-[16px] !font-normal'} >{member?.position}</p>
              </h2>
              <div className="flex justify-start flex-col items-start gap-4 lg:gap-6">
                <p className="text-primary-light font-inter !font-medium !text-[12px] sm:!text-[18px]">{member?.role}</p>

                <Link href={member.profile}>
                  <Button
                    variant="transparent"
                    icon={<IoIosArrowRoundForward size={25} />}
                    className={"!p-0"}
                    onClick={handleViewProfileClick}
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
