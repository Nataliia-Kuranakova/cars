import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://myfakeapi.com/api/',
  }),
  endpoints(builder) {
    return {
      fetchCars: builder.query({
        query: () => {
          return {
            url: 'cars/',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchCarsQuery } = carsApi;

export { carsApi };
