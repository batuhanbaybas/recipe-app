"use client";

import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";
import { GrClose } from "react-icons/gr";
import "./style.css";
import { useRouter } from "next/navigation";

type IDrawerProps = {
  className?: string;
  position?: "left" | "right" | "top" | "button";
  title?: string | React.ReactNode;
  drawerCloseButtonLabel?: string | React.ReactNode;
  drawerOpenButtonLabel?: string | React.ReactNode;
  children?: React.ReactNode;
};

const Drawer: React.FC<IDrawerProps & HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  children,
  position = "left",
  title,
  drawerOpenButtonLabel = "Open",
  drawerCloseButtonLabel = <GrClose className="text-2xl" />,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const pathname = useRouter();
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const triggerDrawer = () => {
    setOpen(!open);
  };

  console.log(pathname);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useLayoutEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleClickOutside = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const handleDrawerPosition = () => {
    switch (position) {
      case "right":
        return "top-0 right-0 w-full md:w-1/4 h-full";
      case "button":
        return "bottom-0 left-0 w-full md:h-1/2 h-full";

      case "top":
        return "top-0 left-0 w-full md:h-1/2 h-full";
      default:
        return "top-0 left-0 w-full md:w-1/4 h-full";
    }
  };

  return (
    <>
      <button onClick={triggerDrawer}>{drawerOpenButtonLabel}</button>
      {open && (
        <>
          <div className="absolute w-full bottom-0 right-0 left-0 top-0 bg-black opacity-60 " />
          <div
            ref={drawerRef}
            className={twMerge(
              `fixed ${handleDrawerPosition()}  bg-white shadow-md z-10 overflow-auto
                ${open ? "drawer-enter" : "drawer-exit"}
              ${className}`
            )}
            {...rest}
          >
            <div className="h-[5%] px-3 border-b-2 flex items-center">
              {title && <div>{title}</div>}
              <Button
                variant="danger"
                btnClassName="absolute right-2 top-2"
                onClick={triggerDrawer}
              >
                {drawerCloseButtonLabel}
              </Button>
            </div>
            <div className="p-3">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Drawer;
