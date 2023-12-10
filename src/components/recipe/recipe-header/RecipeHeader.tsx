import Image from "next/image";
import React from "react";

type IRecipeHeader = {
  image: string;
  meal: string;
  area: string;
  category: string;
  instructions: string;
  tags: string;
};

const RecipeHeader: React.FC<IRecipeHeader> = ({
  image,
  meal,
  tags,
  area,
  category,
  instructions
}) => {
  return (
    <div className="flex w-full">
      <Image
        src={image}
        width={500}
        height={500}
        className="rounded-md"
        alt={meal}
      />
      <div className="w-full px-5 text-center">
        <h1 className="text-4xl">{meal}</h1>
        <p className="text-3xl">{area}</p>
        <p className="text-2xl">{category}</p>
        <p className="text-xl text-gray-400">{tags}</p>
        <p
          className="text-md pt-3 text-justify"
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      </div>
    </div>
  );
};

export default RecipeHeader;
