import RecipeBody from "@/components/recipe/recipe-body/RecipeBody";
import RecipeHeader from "@/components/recipe/recipe-header/RecipeHeader";
import { useGetRandomQuery } from "@/lib/redux/slice/foodApi";
import React, { useMemo } from "react";

type IRecipeDetailProps = {
  image: string;
  meal: string;
  area: string;
  category: string;
  tags: string;
  instructions: string;
  ingredients: string[];
};

const RecipeDetail: React.FC<IRecipeDetailProps> = ({
  meal,
  image,
  area,
  category,
  tags,
  instructions,
  ingredients
}) => {
  return (
    <>
      <RecipeHeader
        image={image}
        meal={meal}
        area={area}
        category={category}
        tags={tags}
        instructions={instructions}
      />
      <div className=" py-5">
        <h1 className="w-full text-2xl text-center font-semibold">
          Ingredients
        </h1>
        <div className="grid grid-cols-3 gap-y-2">
          {ingredients.map((ingredient, index) => {
            return <RecipeBody key={index} ingredients={ingredient} />;
          })}
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
