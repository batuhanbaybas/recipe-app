"use client";
import { useParams } from "next/navigation";
import React from "react";

const CategoryList = () => {
  const { category } = useParams();
  console.log(category);
  return <div>CategoryList</div>;
};

export default CategoryList;
