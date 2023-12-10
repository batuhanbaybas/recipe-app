"use client";

import RecipeDetail from "@/components/recipe/recipe-detail/RecipeDetail";
import { useGetFoodByIdQuery } from "@/lib/redux/slice/foodApi";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data: foodDetail, isLoading } = useGetFoodByIdQuery(id as string);
  const ingredients = useMemo(() => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (foodDetail?.meals[0][`strIngredient${i}`]) {
        ingredients.push(
          `${foodDetail?.meals[0][`strIngredient${i}`]} - ${
            foodDetail?.meals[0][`strMeasure${i}`]
          }`
        );
      }
    }
    return ingredients;
  }, [foodDetail]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <RecipeDetail
      image={foodDetail?.meals[0].strMealThumb}
      meal={foodDetail?.meals[0].strMeal}
      area={foodDetail?.meals[0].strArea}
      category={foodDetail?.meals[0].strCategory}
      tags={foodDetail?.meals[0].strTags}
      instructions={foodDetail?.meals[0].strInstructions}
      ingredients={ingredients}
    />
  );
};

export default RecipeDetailPage;
