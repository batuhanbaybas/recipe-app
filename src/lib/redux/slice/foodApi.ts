import { env } from "@/lib/utils/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const endPoints = {
  getRandom: "/random.php"
};

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.base_url
  }),
  endpoints: (builder) => ({
    getRandom: builder.query({
      query: () => endPoints.getRandom
    }),
    getFoodByCategory: builder.query({
      query: (category: string) => `/filter.php?c=${category}`
    }),
    getFoodById: builder.query({
      query: (id: string) => `/lookup.php?i=${id}`
    })
  })
});

export const foodApiReducer = foodApi.reducer;
export const foodApiReducerName = foodApi.reducerPath;
export const foodMiddleware = foodApi.middleware;

export const {
  useGetRandomQuery,
  useGetFoodByCategoryQuery,
  useGetFoodByIdQuery
} = foodApi;
