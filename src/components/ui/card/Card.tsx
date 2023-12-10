import Image from "next/image";
import React, { HTMLAttributes } from "react";

type ICardProps = {
  image: string;
  label: string;
};

const Card: React.FC<ICardProps & HTMLAttributes<HTMLDivElement>> = ({
  image,
  label,
  ...rest
}) => {
  return (
    <div className="border rounded-md cursor-pointer" {...rest}>
      <div
        style={{
          width: "100%",
          height: "200px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <h2 className="text-center text-md py-5 font-semibold">{label}</h2>
    </div>
  );
};

export default Card;
