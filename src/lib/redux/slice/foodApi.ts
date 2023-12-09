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
    })
  })
});

export const foodApiReducer = foodApi.reducer;
export const foodApiReducerName = foodApi.reducerPath;
export const foodMiddleware = foodApi.middleware;

export const { useGetRandomQuery } = foodApi;
