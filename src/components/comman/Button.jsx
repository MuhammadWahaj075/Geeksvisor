import React from "react";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  icon,
  iconClassName,
  ...props
}) => {
  const baseStyles =
    " capitalize focus:outline-none flex items-center justify-center gap-2";
  const variantStyles = {
    primary:
      "bg-primary bg-[linear-gradient(90deg,#EE6E24_0%,#FF2E00_100%)] text-neutral font-inter px-6 py-3 rounded-lg capitalize !h-[45px] rounded-lg text-[16px] leading-[19px] font-medium font-inter hover:bg-primary-hover",
    transparent:
      "text-primary font-inter rounded-lg font-semibold bg-transparent hover:text-primary-hover",
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
      {icon && (
        <span className={`icon-container ${iconClassName}`}>{icon}</span>
      )}
    </button>
  );
};
