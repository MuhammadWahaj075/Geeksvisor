import Image from "next/image";
import { Pill } from "../comman/Pills";
import Button from "../comman/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { teamMembers } from "@/utils/mockData";

export const MeetOurTeam = () => {
  return (
    <div className="mt-[170px] mx-auto flex justify-center max-w-screen-xl">
      <div className="flex flex-col items-center gap-[70px]">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="title_text">Meet our Team</h1>
          <p className="description_text">
            We are incredible people with expert skills
          </p>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          {teamMembers?.map((member, index) => (
            <div
              key={index}
              className="profile_sec flex items-start flex-col gap-6"
            >
              <Image
                src={member?.imageSrc}
                alt={`profile of ${member?.name}`}
                className="rounded-[8px] object-cover h-[370px] w-[370px]"
              />
              <h2 className="text-neutral font-mono font-semibold text-[24px]">
                {member?.name}
              </h2>
              <div className="flex justify-between w-[370px]">
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
