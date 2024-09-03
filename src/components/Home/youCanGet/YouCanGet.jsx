import { RollingWords } from "@/components/ui/RollingWords";

export const WhatWeDo = () => (
  <div className="!mt-16 md:!mt-10 lg:!mt-[160px]">
    <div className="flex flex-col gap-8 items-center">
      <h1 className="title_text">You can Get</h1>
      <div>
        <RollingWords />
      </div>
    </div>
  </div>
);
