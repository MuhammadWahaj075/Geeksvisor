import { OurCoreMockData, OurCoreprojects } from "@/utils/mockData"
import { HoverEffect } from "../ui/card-hover-effect"

export const OurCoreValue = () => {
  return (
    <div className="relative z-20 main_container_gapper">
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <h1 className="title_text">{OurCoreMockData.title}</h1>
        <p className="description_text text-center w-[320px] lg:w-[605px]">
          {OurCoreMockData.description}
        </p>
      </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={OurCoreprojects} />
    </div>
      </div>
      </div>
  )
}
