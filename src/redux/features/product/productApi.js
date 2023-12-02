import { apiSlice } from "../../api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/create",
        method: "POST",
        body: data,
      }),
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "/product/get-products",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/get-product/${id}`,
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
} = productApi;
