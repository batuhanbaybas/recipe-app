"use client";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

type ICategoryItemProps = {
  id: string;
  label: string;
  image: string;
};

const CategoryItem: React.FC<
  ICategoryItemProps & HTMLAttributes<HTMLDivElement>
> = ({ id, image, label, ...rest }) => {
  return (
    <div
      className="flex items-center gap-x-3 mt-5 border p-4 cursor-pointer hover:bg-gray-100 rounded-md"
      key={id}
      {...rest}
    >
      <Image
        src={image}
        width={120}
        height={120}
        alt={label}
        className=" rounded-full"
      />
      <span className="text-center">{label}</span>
    </div>
  );
};

export default CategoryItem;
