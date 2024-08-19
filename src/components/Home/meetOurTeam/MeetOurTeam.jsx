"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MeetTeamMockData, teamMembers } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "@/components/comman";

export const MeetOurTeam = () => {
  const router = useRouter();

  const handleViewProfileClick = () => {
    router.push(`/team-member`);
  };

  return (
    <div className="!mt-16 md:!mt-10 lg:!mt-[160px] mx-auto flex justify-center max-w-screen-xl">
      <div className="flex flex-col items-center gap-[70px]">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="title_text">{MeetTeamMockData.title}</h1>
          <p className="description_text">{MeetTeamMockData.subtitle}</p>
        </div>
        <div className="flex gap-4 md:gap-6 px-5 flex-wrap justify-center">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="profile_sec  flex items-start flex-col w-[370px] justify-center gap-y-3"
            >
              <OptimizedImage
                src={member?.imageSrc}
                className="rounded-[8px] object-cover w-[320px] h-[370px] lg:h-[370px] lg:w-[370px]"
              />
              <h2 className="text-neutral font-unbound font-semibold !text-[14px] md:!text-[24px]">
                {member?.name}
              </h2>
              <div className="flex justify-between items-center  w-[320px] lg:w-full gap-[44px]">
                <p className="text-primary-light font-inter !font-medium !w-[169px]  !text-[12px] md:!text-[18px]">{member?.role}</p>
                <Pill className={'!text-[12px] !capitalize lg:!text-[16px] !font-normal'} text={member?.position} />
              </div>
              {/* <Button
                variant="transparent"
                icon={<IoIosArrowRoundForward size={25} />}
                className={"!p-0"}
                onClick={handleViewProfileClick}
              >
                View profile
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
