import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadData from './loadData';

const initialState = {
  reviews: [],

  error: null,
};

export const loadReviews = createAsyncThunk('reviews/loadReviews', thunkAPI =>
  loadData(thunkAPI, 'product/review')
);

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [loadReviews.pending]: (state, action) => {
      state.reviews = [];
      state.error = null;
    },
    [loadReviews.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.reviews = [];
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          return {
            id: obj._id,
            position: 1 + i,
            // arabicName: obj.names.arabic,
            // englishName: obj.names.english,
            name: obj.names,
            imgUrl: obj.images[0].imageUrl,
            imgAlt: obj.alt,
            prices: obj.prices,
            // currentPrice: obj.prices[0].currentPrice,
            // discountPrice: obj.prices[0].discountPrice,

            hintText: obj.smallDescription.hintText,

            category: obj.catId,
            subcategory: obj.subcatId,
            size: obj.prices.map(price => price.size),
          };
        });
        console.log(data);
        state.reviews = data;
        state.error = null;
      }
    },
    [loadReviews.rejected]: (state, action) => {
      // console.log(action);
      state.reviews = null;
      state.error = action.payload;
    },
  },
});

export const getReviews = state => state.reviews;

export default reviewsSlice.reducer;
