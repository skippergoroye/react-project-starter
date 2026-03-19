import type { RootState } from "@/redux/app/store"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = import.meta.env.VITE_BASE_URL
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth?.token
      //  console.log("User token", token)

      // Set the Authorization header if token exists
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    },
  }),

  tagTypes: ["Users"],
  endpoints: () => ({}),
})
