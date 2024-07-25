import { RollingWords } from "@/components/ui/rollingWords/RollingWords";

export function WhatWeDo() {
  return (
    <div className="mt-[151px]">
      <div className="flex flex-col gap-[96px] items-center">
        <h1 className="title_text">What we do?</h1>
        <div>
            <RollingWords />
        </div>
      </div>
    </div>
  );
}