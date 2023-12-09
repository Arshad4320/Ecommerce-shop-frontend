import { apiSlice } from "../../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createProduct: builder.mutation({
    //   query: (data) => ({
    //     url: "/product/create",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    getAllCategory: builder.query({
      query: () => ({
        url: "/category/get-category",
      }),
    }),
    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/category/get-category/${id}`,
      }),
    }),
  }),
});

export const { useGetAllCategoryQuery, useGetSingleCategoryQuery } =
  categoryApi;
