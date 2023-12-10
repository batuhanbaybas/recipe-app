"use client";

import Loading from "@/components/loading/Loading";
import RecipeDetail from "@/components/recipe/recipe-detail/RecipeDetail";
import { useGetRandomQuery } from "@/lib/redux/slice/foodApi";
import React, { useMemo } from "react";

const Home = () => {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <RecipeDetail
      image={random?.meals[0].strMealThumb}
      meal={random?.meals[0].strMeal}
      area={random?.meals[0].strArea}
      category={random?.meals[0].strCategory}
      tags={random?.meals[0].strTags}
      instructions={random?.meals[0].strInstructions}
      ingredients={ingredients}
    />
  );
};

export default Home;
