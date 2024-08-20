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
              className="profile_sec !mx-auto flex flex-col w-auto sm:w-[616px] lg:w-auto xl:w-[370px] justify-center gap-y-3"
            >
              <div>
                <OptimizedImage
                  src={member?.imageSrc}
                  className="rounded-[8px] w-[328px] h-[317px] sm:w-[616px] sm:h-[370px]  lg:w-[370px]"
                />
              </div>
              <h2 className="text-neutral font-unbound font-semibold !text-[14px] sm:!text-[24px]">
                {member?.name}
              </h2>
              <div className="flex justify-between items-center  w-[320px] sm:w-full gap-[44px]">
                <p className="text-primary-light font-inter !font-medium !w-[169px] sm:!w-full lg:!w-[169px]  !text-[12px] sm:!text-[18px]">{member?.role}</p>
                <Pill className={'!text-[12px] !capitalize sm:!text-[16px] !font-normal'} text={member?.position} />
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
