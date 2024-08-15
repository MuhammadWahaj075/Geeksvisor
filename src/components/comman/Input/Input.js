"use client";
import React, { useState } from "react";
import "./style.css";

export const Input = ({
  label,
  name,
  value,
  onChange,
  className,
  placeholder,
  error,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleFocus = () => setIsClicked(true);
  const handleBlur = () => setIsClicked(false);

  return (
    <div className={label ? "pt-[18px]" : ""}>
      {label && (
        <label className="text-[#525252] label-text mb-[8px]">{label}</label>
      )}
      <input
        placeholder={placeholder}
        type="text"
        className={`${className} text-neutral focus:outline-none rounded-xl p-[16px] w-full md:w-[272px] h-[58px] bg-secondary-inputColor ${
          isClicked ? "fade-animation" : ""
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />

      {error && <p className="mt-1 text-xs font-inter text-red-500">{error}</p>}
    </div>
  );
};
