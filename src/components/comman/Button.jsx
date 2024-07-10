import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  icon,
  iconClassName,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded capitalize focus:outline-none flex items-center justify-center gap-2";
  const variantStyles = {
    primary:
      "bg-primary text-neutral text-[16px] leading-[19px] font-semibold font-inter hover:bg-primary-hover",
    transparent:
      "text-primary font-inter font-semibold bg-transparent hover:text-primary-hover",
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

export default Button;
