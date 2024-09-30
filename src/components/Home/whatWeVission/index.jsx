import { OptimizedImage } from "@/components/comman";
import { healthData, MorehealthData, WhatVissionMockData } from "@/utils/mockData";
import { corporate } from "../../../../public/assets";

import './style.css';

export const WhatWeVission = () => (
  <div className=" main_container_gapper">
    <div className="flex flex-wrap mx-auto flex-col xl:flex-row items-center xl:max-w-screen-xl justify-center gap-10">
      <div className="border-2 w-[320px] sm:w-[576px] xl:w-0 xl:h-[562px] border-l border-primary" />
      <OptimizedImage
        src={corporate}
        className={
          "w-[320px] h-[320px] sm:w-[576px] lg:w-[455px] sm:h-[455px] rounded-[8px]"
        }
      />
      <div className="flex flex-col mx-auto sm:w-[500px] xl:w-auto !justify-center !items-center sm:!items-start">
        <div className="flex flex-col gap-y-4 !items-center  sm:!items-start">
          <h1 className="title_text">{WhatVissionMockData.title}</h1>
          <p className="description_text 
           leading_relaxed vissions_text">
            {WhatVissionMockData.description}
          </p>
          <p className="description_text vissions_text">
            {WhatVissionMockData.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap  sm:gap-x-10 gap-y-4 justify-center w-[356px] my-10">
          {healthData?.map((items, i) => (
            <div key={i} className="flex gap-3 w-[134px] items-center">
              <OptimizedImage src={items.icon} />
              <h2 className="description_text">{items.name}</h2>
            </div>
          ))}

          {MorehealthData.map((items, i) => (
            <div key={i} className="flex gap-3 w-[134px] items-center">
              <OptimizedImage src={items.icon} />
              <h2 className="description_text">{items.name}</h2>
            </div>
          ))}
        </div>
        <p className="mb-10 description_text vissions_text">
          {WhatVissionMockData.approachText}
        </p>
      </div>
    </div>
  </div>
);
