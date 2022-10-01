import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadData from './loadData';

const initialState = {
  admin: [],
  isLoading: false,
  error: null,
};

export const loadAdmin = createAsyncThunk('user/loadAdmin', thunkAPI =>
  loadData(thunkAPI, 'product')
);

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  extraReducers: {
    [loadAdmin.pending]: (state, action) => {
      state.admin = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadAdmin.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.admin = [];
          state.isLoading = false;
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
        state.admin = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadAdmin.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.admin = null;
      state.error = action.payload;
    },
  },
});

export const getAdmin = state => state.admin;

export default adminSlice.reducer;
