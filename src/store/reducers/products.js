import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadData from './loadData';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  thunkAPI => loadData(thunkAPI, 'product')
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.subCategories = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadProducts.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.subCategories = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          return {
            id: obj.id,
            position: 1 + i,
            arabicName: obj.names.arabic,
            englishName: obj.names.english,
            imgUrl: obj.images[0].imageUrl,
            imgAlt: obj.alt,
            prices: obj.prices,
            // currentPrice: obj.prices[0].currentPrice,
            // discountPrice: obj.prices[0].discountPrice,
            arabicDesc: obj.smallDescription.hintText.arabic,
            englishDesc: obj.smallDescription.hintText.english,

            category: obj.catId,
            subcategory: obj.subcatId,
            size: obj.prices[0].size,
          };
        });
        console.log(data);
        state.subCategories = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadProducts.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.subCategories = null;
      state.error = action.payload;
    },
  },
});

export const getProducts = state => state.products;

export default productsSlice.reducer;
