import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { loadDataWithParams } from './loadData';

const initialState = {
  mostSelling: [],
  mostCustomer: [],

  error: null,
};

export const loadMostSelling = createAsyncThunk(
  'reports/loadMostSelling',
  ({ params, data }, thunkAPI) =>
    loadDataWithParams(thunkAPI, 'reports/mostselling', params, data)
);
export const loadMostCustomers = createAsyncThunk(
  'reports/loadMostCustomers',
  ({ params, data }, thunkAPI) =>
    loadDataWithParams(thunkAPI, 'reports/mostcustomer', params, data)
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
        // console.log(data);
        state.mostSelling = data;
        state.error = null;
      }
    },
    [loadMostSelling.rejected]: (state, action) => {
      // console.log(action);
      state.mostSelling = [];
      state.error = action.payload;
    },
    [loadMostCustomers.pending]: (state, action) => {
      state.mostCustomer = [];
      state.error = null;
    },
    [loadMostCustomers.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.mostCustomer = [];
          state.error = payload.message;
          return;
        }
        let data = payload.data.map((obj, i) => {
          // console.log(obj);
          return {
            firstName: obj._id.firstName,
            lastName: obj._id.lastName,
            phone: obj._id.phone,
            email: obj._id.email,
            count: obj.count,
            totalAmount: obj.totalAmount,
            position: i + 1,
            id: i,
          };
        });
        // console.log(data);
        state.mostCustomer = data;
        state.error = null;
      }
    },
    [loadMostCustomers.rejected]: (state, action) => {
      // console.log(action);
      state.mostCustomer = [];
      state.error = action.payload;
    },
  },
});

export const getReports = state => state.reports;

export default reportsSlice.reducer;
