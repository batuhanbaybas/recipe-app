import React from "react";

type IRecipeBody = {
  ingredients: string;
};

const RecipeBody: React.FC<IRecipeBody> = ({ ingredients }) => {
  return <h2 className="pt-4 text-md">{ingredients}</h2>;
};

export default RecipeBody;
