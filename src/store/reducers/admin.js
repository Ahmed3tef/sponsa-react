import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadData from './loadData';

const initialState = {
  admin: [],
  isLoading: false,
  error: null,
};

export const loadAdmin = createAsyncThunk('admin/loadAdmin', thunkAPI =>
  loadData(thunkAPI, 'admin')
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
      let data;
      if (payload) {
        if (payload.status === 0) {
          state.admin = [];
          state.isLoading = false;
          state.error = payload.message;
          return;
        }
        const { _id: id, name, phone, imageUrl, email } = payload.data;
        data = {
          id,
          name,
          phone,
          imageUrl,
          email,
        };
      }

      state.admin = data;
      state.isLoading = false;
      state.error = null;
    },
  },
  [loadAdmin.rejected]: (state, action) => {
    // console.log(action);
    state.isLoading = false;
    state.admin = null;
    state.error = action.payload;
  },
});

export const getAdmin = state => state.admin;

export default adminSlice.reducer;
