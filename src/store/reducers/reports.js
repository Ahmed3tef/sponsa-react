import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { loadDataWithParams } from './loadData';

const initialState = {
  mostSelling: [],
  mostCustomer: [],
  mostSelling: [],

  error: null,
};

export const loadMostSelling = createAsyncThunk(
  'reports/loadMostSelling',
  (params, thunkAPI) =>
    loadDataWithParams(thunkAPI, 'reports/mostselling', params)
);

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [loadMostSelling.pending]: (state, action) => {
      state.mostSelling = [];
      state.error = null;
    },
    [loadMostSelling.fulfilled]: (state, { payload }) => {
      if (payload) {
        if (payload.status === 0) {
          state.mostSelling = [];
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          return {
            id: obj.product._id,
            position: 1 + i,
            name: obj.product.names,
            count: obj.count,
          };
        });
        console.log(data);
        state.mostSelling = data;
        state.error = null;
      }
    },
    [loadMostSelling.rejected]: (state, action) => {
      // console.log(action);
      state.mostSelling = [];
      state.error = action.payload;
    },
  },
});

export const getReports = state => state.reports;

export default reportsSlice.reducer;
