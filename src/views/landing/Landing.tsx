import RecipeBody from "@/components/recipe/recipe-body/RecipeBody";
import RecipeHeader from "@/components/recipe/recipe-header/RecipeHeader";
import { useGetRandomQuery } from "@/lib/redux/slice/foodApi";
import React, { useMemo } from "react";

const Landing = () => {
  const { data: random, isLoading } = useGetRandomQuery({});

  const ingredients = useMemo(() => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (random?.meals[0][`strIngredient${i}`]) {
        ingredients.push(
          `${random?.meals[0][`strIngredient${i}`]} - ${
            random?.meals[0][`strMeasure${i}`]
          }`
        );
      }
    }
    return ingredients;
  }, [random]);

  return (
    <>
      <RecipeHeader
        image={random?.meals[0].strMealThumb}
        meal={random?.meals[0].strMeal}
        area={random?.meals[0].strArea}
        category={random?.meals[0].strCategory}
        tags={random?.meals[0].strTags}
        instructions={random?.meals[0].strInstructions}
      />
      <div className=" py-5">
        <h1 className="w-full text-2xl text-center font-semibold">
          Ingredients
        </h1>
        <div className="grid grid-cols-4">
          {ingredients.map((ingredient, index) => {
            return <RecipeBody key={index} ingredients={ingredient} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Landing;
