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
    "px-4 py-2 rounded focus:outline-none flex items-center justify-center gap-2";
  const variantStyles = {
    primary: "bg-[#EE6E24] text-white hover:bg-[#ed9866]",
    transparent: "text-[#EE6E24] bg-transparent hover:text-[#ed9866]",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
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
