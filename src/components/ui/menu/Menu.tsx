import { setConfig } from "next/config";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IMenuProps = {
  sectionClassName?: string;
  optionClassName?: string;
  items?: Array<{
    label: string;
    value: string;
  }>;
  children?: React.ReactNode;
};

const Menu: React.FC<IMenuProps & HTMLAttributes<HTMLSelectElement>> = ({
  sectionClassName,
  optionClassName,
  items,
  children,
  ...rest
}) => {
  return (
    <>
      {children ? (
        children
      ) : (
        <section {...rest} className={twMerge(` ${sectionClassName}`)}>
          {items?.map((item, index) => {
            return (
              <option
                key={index}
                value={item.value}
                className={twMerge(
                  `${optionClassName} mb-8 p-4 rounded-md cursor-pointer border`
                )}
              >
                {item.label}
              </option>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Menu;
