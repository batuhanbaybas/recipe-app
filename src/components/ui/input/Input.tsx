import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";

type IInputProps = {
  inputClassName?: string;
};

const Input: React.FC<IInputProps & HTMLAttributes<HTMLInputElement>> = ({
  inputClassName,
  ...rest
}) => {
  return (
    <input
      className={twMerge(`border rounded-md p-2 ${inputClassName}`)}
      {...rest}
    />
  );
};

export default Input;
