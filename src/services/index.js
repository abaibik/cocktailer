import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "cocktailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coctails-api.vercel.app/coctails/",
  }),
  tagTypes: ["Cocktails"],
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => "/",
      providesTags: ["Cocktails"],
    }),
  }),
});

export const { useGetAllItemsQuery } = itemsApi;
export const { endpoints, reducerPath, reducer, middleware } = itemsApi;
