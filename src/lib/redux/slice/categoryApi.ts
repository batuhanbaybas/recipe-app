import { env } from "@/lib/utils/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const endPoints = {
  getCategories: "/categories.php"
};

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.base_url
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => endPoints.getCategories
    })
  })
});

export const categoryApiReducer = categoryApi.reducer;
export const categoryApiReducerName = categoryApi.reducerPath;
export const categoryMiddleware = categoryApi.middleware;

export const { useGetCategoriesQuery } = categoryApi;
