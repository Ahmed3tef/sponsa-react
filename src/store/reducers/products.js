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
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadProducts.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.products = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          // console.log(obj._id);
          return {
            id: obj._id,
            position: 1 + i,
            key: obj._id,
            // arabicName: obj.names.arabic,
            // englishName: obj.names.english,
            name: obj.names,
            imgUrl: obj.images[0].imageUrl,
            imgAlt: obj.alt,
            images: obj.images,
            prices: obj.prices,
            // currentPrice: obj.prices[0].currentPrice,
            // discountPrice: obj.prices[0].discountPrice,

            hintText: obj.smallDescription.hintText,
            subText: obj.smallDescription.subText,
            headText: obj.smallDescription.headText,

            englishLargeDescription: obj.englishLargeDescription,
            arabicLargeDescription: obj.arabicLargeDescription,

            englishAdditionalDesc: obj.englishAdditionalDesc,
            arabicAdditionalDesc: obj.arabicAdditionalDesc,

            category: obj.catId,
            subcategory: obj.subcatId,
            size: obj.prices.map(price => price.size),
          };
        });

        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadProducts.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.products = null;
      state.error = action.payload;
    },
  },
});

export const getProducts = state => state.products;

export default productsSlice.reducer;
