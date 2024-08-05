import { experiencesData } from "@/utils/mockData";

const Experience = () => {
  return (
    <div className="mt-40">
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="flex flex-wrap  gap-64 ">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="title_text">Experience</h1>
            <p className="description_text w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {experiencesData?.map((exp, index) => (
              <div
                key={index}
                className="order_list flex flex-col  justify-center"
              >
                <div className="flex md:gap-4 items-center">
                  <div className=" md:w-[32px] md:h-[32px] md:rounded-xl bg-[#D9D9D9]" />
                  <h1 className="flex text-[14px] lg:text-[24px] gap-20 font-inter text-neutral">
                    {exp.title}
                    <span className="description_text text-[12px] lg:!text-[16px]">
                      {exp?.location}, {exp.year}
                    </span>
                  </h1>
                </div>
                <ul className="list-disc ml-6 md:ml-16 mt-3">
                  {exp?.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="sm:w-[520px] !text-[#FFFFFFCC] !text-[18px] description_text"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
