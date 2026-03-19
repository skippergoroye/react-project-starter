// features/auth/authApi.ts

import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
     
    }),
    login: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation
 
} = authApi;
