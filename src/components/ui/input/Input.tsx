import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IInputProps = {
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const Input: React.FC<IInputProps & HTMLAttributes<HTMLInputElement>> = ({
  inputClassName,
  type,
  onChange,
  ...rest
}) => {
  return (
    <input
      type={type || "text"}
      className={twMerge(`border rounded-md p-2 ${inputClassName}`)}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
