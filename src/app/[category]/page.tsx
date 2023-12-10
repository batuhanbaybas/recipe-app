"use client";
import Card from "@/components/ui/card/Card";
import { useGetFoodByCategoryQuery } from "@/lib/redux/slice/foodApi";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const CategoryList = () => {
  const { category } = useParams();
  const { data: foodList, isLoading } = useGetFoodByCategoryQuery(
    category as string
  );
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {foodList?.meals.map(
        (food: { idMeal: string; strMealThumb: string; strMeal: string }) => {
          return (
            <Card
              key={food.idMeal}
              image={food.strMealThumb}
              label={food.strMeal}
              onClick={() => router.push(`/recipe/${food.idMeal}`)}
            />
          );
        }
      )}
    </div>
  );
};

export default CategoryList;
