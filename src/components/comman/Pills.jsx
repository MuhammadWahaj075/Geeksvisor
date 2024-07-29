export const Pill = ({ text, className }) => (
  <span
    className={`
        inline-block uppercase bg-primary-pill text-[#FFFFFFB2] rounded-[40px] text-[12px] font-inter leading-[14px] px-3 py-2  
      ${className}`}
  >
    {text}
  </span>
);
