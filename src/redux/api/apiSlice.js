import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getInfoToLocal } from "./../../shared/index";

// const customBaseQuery = fetchBaseQuery({
//  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
//   prepareHeaders(headers) {
//     headers.set('Authorization', Bearer ${getInfoToLocal('token')});
//     return headers;
//   },
// });

const customBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1/",
  prepareHeaders(headers) {
    headers.set("Authorization", `Bearer ${getInfoToLocal("token")}`);
    return headers;
  },
});
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
