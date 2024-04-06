import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      // If you made a query, unmount component, mount new component and made same request, this is the time that will use the saved cache
      keepUnusedDataFor: 5,
    }),
  }),
});

// convention to add use in front of the action verb use+GetProducts
export const { useGetProductsQuery } = productsApiSlice;
