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
    "px-6 py-3 rounded-lg capitalize focus:outline-none flex items-center justify-center gap-2";
  const variantStyles = {
    primary:
      "bg-primary text-neutral rounded-lg text-[16px] leading-[19px] font-semibold font-inter hover:bg-primary-hover",
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
