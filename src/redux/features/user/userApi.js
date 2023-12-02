import { apiSlice } from "../../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    userGet: builder.query({
      query: () => ({
        url: "/user/get-user",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/user/get-user/${id}`,
      }),
    }),
  }),
});
export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserGetQuery,
  useGetUserByIdQuery,
} = userApi;
