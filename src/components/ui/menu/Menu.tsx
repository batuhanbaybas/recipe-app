import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IMenuProps = {
  sectionClassName?: string;
  optionClassName?: string;
  items?: Array<{
    label: string;
    value: string;
    id: string;
  }>;
  onSelect: (value: { label: string; value: string; id: string }) => void;
  children?: React.ReactNode;
};

const Menu: React.FC<IMenuProps & HTMLAttributes<HTMLUListElement>> = ({
  sectionClassName,
  optionClassName,
  items,
  onSelect,
  children,
  ...rest
}) => {
  return (
    <>
      {children ? (
        children
      ) : (
        <ul {...rest} className={twMerge(`${sectionClassName}`)}>
          {items?.map((item, index) => {
            return (
              <li
                key={index}
                className={twMerge(
                  `mb-8 p-4 rounded-md cursor-pointer border ${optionClassName} `
                )}
                onClick={() =>
                  onSelect({
                    label: item.label,
                    value: item.value,
                    id: item.id
                  })
                }
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Menu;
