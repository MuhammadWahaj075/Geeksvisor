export const Pill = ({ text, className }) => (
  <span
    className={`
        inline-block uppercase bg-primary-pill cursor-none text-[#FFFFFFB2] rounded-full text-[12px] font-inter leading-[14px] px-3 py-2  
      ${className}`}
  >
    {text}
  </span>
);
