import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadData from './loadData';

const initialState = {
  reports: [],
  isLoading: false,
  error: null,
};

export const loadReports = createAsyncThunk('reports/loadReports', thunkAPI =>
  loadData(thunkAPI, 'product')
);

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [loadReports.pending]: (state, action) => {
      state.reports = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadReports.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.reports = [];
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
        state.reports = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadReports.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.reports = null;
      state.error = action.payload;
    },
  },
});

export const getReports = state => state.reports;

export default reportsSlice.reducer;
