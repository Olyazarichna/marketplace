import { baseApi } from './services/baseApi';

const usersApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: UserData => ({
        url: `/auth/register`,
        method: 'POST',
        body: UserData,
      }),
    }),
    login: builder.mutation({
      query: UserData => ({
        url: `/auth/authenticate`,
        method: 'POST',
        body: UserData,
      }),
    }),
    logout: builder.mutation({
      query: UserData => `auth/logout`,
    }),
    invalidatesTags: ['User'],
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = usersApi;
