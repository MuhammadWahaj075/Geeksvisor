export const ProjectTimeline = ({title}) => {
  return (
    <div className="mt-10 px-5 md:mt-40">
      <div className="flex flex-col gap-6 items-start">
        <h1 className="title_text text-start">{title}</h1>
        <div className="w-[328px] h-[164px] sm:w-[616px] sm:h-[350px] xl:w-[1280px] xl:h-[568px] bg-primary-imageTestColor rounded-xl" />
      </div>
    </div>
  );
};
