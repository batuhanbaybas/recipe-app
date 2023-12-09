import React from "react";
import { twMerge } from "tailwind-merge";

type INavbarProps = {
  className?: string;
  children: React.ReactNode;
};

const Navbar: React.FC<INavbarProps & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <nav
      className={twMerge(
        `flex items-center border border-b-2 h-16 px-5 ${className}`
      )}
      {...rest}
    >
      {children}
    </nav>
  );
};

export default Navbar;
