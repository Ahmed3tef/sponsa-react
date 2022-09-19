import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkAPI) => {
    return await axios
      .post(
        'https://api-sponsa.worldproductsae.com/admin/login',
        user,
        thunkAPI
      )
      .then(res => {
        return res.data;
      })
      .catch(err => {
        return err.response;
      });
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      console.log(state, action);
      state.isLoggedIn = true;
      state.token = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    // [loginUser.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   state.token = null;
    //   state.isAuthenticated = false;
    // },
    [loginUser.rejected]: (state, action) => {
      console.log('hello from rejcted');
      state.isLoading = false;
      state.token = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const getUserState = state => state.auth;

export default authSlice.reducer;
