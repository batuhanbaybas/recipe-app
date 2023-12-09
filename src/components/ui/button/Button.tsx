"use client";

import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IButtonProps = {
  btnClassName?: string;
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
};

const Button: React.FC<HTMLAttributes<HTMLButtonElement> & IButtonProps> = ({
  btnClassName,
  children,
  variant,
  ...rest
}) => {
  const handleButtonType = () => {
    switch (variant) {
      case "primary":
        return "bg-primary text-white border";
      case "secondary":
        return "bg-secondary text-white border";
      case "danger":
        return "bg-danger text-white border";
      default:
        return "bg-primary text-white border";
    }
  };

  return (
    <button
      className={twMerge(
        `rounded-md p-1  ${btnClassName}  ${handleButtonType()}`
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
