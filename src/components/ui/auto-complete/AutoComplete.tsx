"use client";

import React from "react";
import Input from "../input/Input";
import { FaSearch } from "react-icons/fa";
import Menu from "../menu/Menu";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Loading from "@/components/loading/Loading";

type IAutoCompleteProps = {
  options: string[];
  sectionClassName?: string;
  optionClassName?: string;
  value: string;
  loading?: boolean;
  onChange?: (e: any) => void;
  onSelect?: (value: { label: string; value: string; id: string }) => void;
};

const AutoComplete: React.FC<IAutoCompleteProps> = ({
  options,
  sectionClassName,
  optionClassName,
  value,
  loading,
  onChange,
  onSelect
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useLayoutEffect(() => {
    options && options.length > 0 && typeof options === "object"
      ? setOpen(true)
      : setOpen(false);
  }, [options]);

  React.useLayoutEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  React.useLayoutEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <div className="flex gap-x-2  border pr-5 rounded-lg items-center">
        <Input
          value={value}
          onChange={onChange}
          inputClassName="border-none w-full outline-none"
        />
        <FaSearch />
      </div>
      <div
        ref={ref}
        className={`${open ? "block " : "hidden"} 
        absolute button-0 w-full  bg-white
        p-2
        border
        shadow-xl
        rounded-md
        overflow-y-auto
        max-h-96
      `}
      >
        {loading ? (
          <Loading />
        ) : (
          <Menu
            items={options as any}
            sectionClassName={twMerge(`
              ${sectionClassName}
              `)}
            optionClassName={twMerge(`
                bg-white
                hover:bg-gray-100
                rounded-none
                border-none
                 mb-0,
                ${optionClassName}
                `)}
            onSelect={onSelect as any}
          />
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
