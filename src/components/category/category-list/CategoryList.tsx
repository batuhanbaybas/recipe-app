"use client";
import { useGetCategoriesQuery } from "@/lib/redux/slice/categoryApi";
import React, { useMemo } from "react";
import CategoryItem from "../category-item/CategoryItem";
import { useRouter } from "next/navigation";

const CategoryList = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery({});
  const router = useRouter();

  const categoryItems = useMemo(() => {
    return categories?.categories?.map((category: any) => {
      return {
        id: category.idCategory,
        label: category.strCategory,
        image: category.strCategoryThumb
      };
    });
  }, [categories]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleNavigate = (category: string) => {
    router.push(`/${category}`);
  };
  return (
    <>
      {categoryItems?.map(
        (category: { id: string; label: string; image: string }) => {
          return (
            <CategoryItem
              key={category.id}
              {...category}
              onClick={() => handleNavigate(category.label)}
            />
          );
        }
      )}
    </>
  );
};

export default CategoryList;
