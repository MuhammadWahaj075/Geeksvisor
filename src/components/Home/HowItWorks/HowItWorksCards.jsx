"use client";
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
      className={`h-[700px] lg:h-[1000px] flex items-center justify-center sticky top-0 `}
    >
      <div
        style={cardStyle}
        className={`flex flex-col relative justify-center items-start h-auto lg:h-[340px] border rounded-[25px] p-[80px] transform origin-top `}
      >
        <div>
          <div>
            <OptimizedImage src={src} alt="image" />
          </div>
        </div>
        <h2 className="text-neutral font-semibold text-3xl mt-6">{title}</h2>
        <span className="text-[#FFFFFF0D] font-inter text-[94px] font-bold right-[-8px] top-[-40px]  absolute">
          {number}
        </span>
        <div>
          <div>
            <p className="description_text mt-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
