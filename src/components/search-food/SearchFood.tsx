import { useSearchFoodByNameQuery } from "@/lib/redux/slice/foodApi";
import React, { useMemo, useState } from "react";
import AutoComplete from "../ui/auto-complete/AutoComplete";
import { useRouter } from "next/navigation";

const SearchFood = () => {
  const [search, setSearch] = useState<String>();
  const {
    data: result,
    isLoading,
    isError
  } = useSearchFoodByNameQuery(search as string);
  const router = useRouter();
  const handleSelect = (value: { id: string }) => {
    router.push(`/recipe/${value.id}`);
  };

  const options = useMemo(() => {
    return result?.meals?.map((meal: any) => {
      return {
        id: meal.idMeal,
        value: meal.strMeal,
        label: meal.strMeal
      };
    });
  }, [result?.meals]);

  return (
    <AutoComplete
      options={options}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      onSelect={handleSelect}
    />
  );
};

export default SearchFood;
