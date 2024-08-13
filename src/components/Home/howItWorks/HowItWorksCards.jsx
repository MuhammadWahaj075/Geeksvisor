import { OptimizedImage } from "@/components/comman";

const Card = ({ title, description, src, i, number }) => {
  let width;
  if (i === 0) {
    width = 627;
  } else if (i === 1) {
    width = 710;
  } else if (i === 2) {
    width = 762;
  } else if (i === 3) {
    width = 846;
  }

  const cardStyle = {
    backgroundColor: "#0E0F13",
    border: "1px solid #1F1F1F",
    maxWidth: `${width}px`,
    top: `calc(-5vh + ${i * 120}px)`,
  };

  return (
    <div
      className={`px-6 h-[700px] lg:h-[380px]  mt-10 mb-52 flex items-center justify-center sticky top-0`}
    >
      <div
        style={cardStyle}
        className={`flex flex-col relative overflow-hidden justify-center items-start h-auto lg:h-[340px] border rounded-[25px] p-[80px] transform origin-top `}
      >
        <OptimizedImage src={src} />
        <h2 className="text-neutral font-semibold !text-[14.57px] sm:!text-[24px] lg:!text-[32px] mt-6">
          {title}
        </h2>
        <span className="text-[#FFFFFF0D] !font-inter !text-[60.71px] sm:!text-[100px] lg:!text-[94.98px] font-bold right-[-14px] top-[-40px] absolute">
          {number}
        </span>
        <p className="description_text !text-[8.5px] sm:!text-[14px] lg:!text-[18px] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
