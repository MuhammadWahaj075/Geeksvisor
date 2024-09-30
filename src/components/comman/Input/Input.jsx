"use client";
import "./style.css";
import React, { useState } from "react";

export const Input = ({
  label,
  name,
  className,
  placeholder,
  register = () => { },
  minLength,
  pattern,
  type,
  error,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleFocus = () => setIsClicked(true);
  const handleBlur = () => setIsClicked(false);

  return (
    <div className={label ? "pt-[18px]" : ""}>
      {label && (
        <label className="text-primary-textArealabel label-text mb-[8px]">{label}</label>
      )}
      <input
        {...register(name, {
          required: "This field is required", minLength: {
            value: minLength,
            message: `Minimum length should be ${minLength} characters`,
          }, pattern
        })}
        placeholder={placeholder}
        type={type ? type : "text"}
        className={`${className} text-neutral focus:outline-none rounded-xl p-[16px] w-full md:w-[272px] h-[58px] bg-secondary-inputColor ${isClicked ? "fade-animation" : ""}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && error[name] && (
        <span className="text-[12px] w-full text-start text-red-500">{error[name].message} </span>)}
    </div>
  );
};
