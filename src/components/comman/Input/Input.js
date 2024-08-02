"use client"
import React, { useState } from "react";
import "./style.css"

export const Input = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleFocus = () =>  setIsClicked(true);
  const handleBlur = () =>  setIsClicked(false);

  return (
    <div className={props.label ? "pt-[18px]" : ""}>
      {props.label && <label className="text-[#525252] label-text mb-[8px]">{props.label}</label>}
      <input
        rows={props.rows}
        placeholder={props.placeholder}
        type="text"
        className={`${props.className} text-neutral focus:outline-none rounded-xl p-[16px] w-full md:w-[272px] h-[58px] bg-secondary-inputColor ${isClicked ? 'fade-animation' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
