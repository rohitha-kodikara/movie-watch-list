import React from "react";

const Button = ({
  children,
  bgColor = "bg-indigo-600",
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
