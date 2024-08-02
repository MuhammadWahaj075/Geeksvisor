import { IoIosArrowRoundForward } from "react-icons/io";
import { AboutTeamMembers, MeetTeamMockData } from "@/utils/mockData";
import { Button, OptimizedImage, Pill } from "@/components/comman";

export const MeetOurTeam = () => {
  return (
    <div className="mt-[70px] md:mt-[160px] mx-auto flex justify-center max-w-screen-xl">
      <div className="flex flex-col items-center overflow-hidden gap-[70px]">
        <div className="flex flex-col  gap-4 items-center">
          <h1 className="title_text">{MeetTeamMockData.title}</h1>
          <p className="description_text">{MeetTeamMockData.subtitle}</p>
        </div>
        <div className="flex gap-10 px-5 scroll_hidden overflow-hidden overflow-x-auto w-[95%]">
          {AboutTeamMembers?.map((member, index) => (
            <div
              key={index}
              className="profile_sec flex items-start flex-col justify-center gap-y-6"
            >
              <OptimizedImage
                src={member?.imageSrc}
                alt={`profile of ${member?.name}`}
                className="rounded-[8px] object-cover w-[320px] h-[370px] lg:h-[370px] lg:w-[370px]"
              />
              <h2 className="text-neutral  font-unbound font-semibold text-[24px]">
                {member?.name}
              </h2>
              <div className="flex justify-between w-[320px] lg:w-[370px]">
                <p className="description_text">{member?.role}</p>
                <Pill text={member?.position} />
              </div>
              <Button
                variant="transparent"
                icon={<IoIosArrowRoundForward size={25} />}
                className={"!p-0"}
              >
                View profile
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
