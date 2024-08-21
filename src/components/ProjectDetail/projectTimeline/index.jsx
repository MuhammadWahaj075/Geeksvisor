export const ProjectTimeline = ({ title }) => {
  return (
    <div className="mt-10 px-5 flex flex-wrap flex-col gap-6 md:mt-40">
      <div className="flex items-start">
        <h1 className="title_text !text-[16px] md:!text-[24px] lg:!text-[32px] !w-auto text-start">{title}</h1>
      </div>
      <div className="h-[164px] sm:h-[350px]  xl:max-w-screen-[1160px] xl:h-[568px] bg-primary-imageTestColor rounded-xl" />
    </div>
  );
};
