import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: '',
  isLoggedIn: false,
  isLoading: false,
  err: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkAPI) => {
    console.log(user, thunkAPI);

    return await axios
      .post('http://192.168.1.243:3009/admin/login', user, thunkAPI)
      .then(res => {
        console.log(res);
        return res.data;
      })
      .catch(err => {
        return err;
      });
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      console.log(action);
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
      state.isLoading = false;
      console.log(action);
      state.token = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const getTokenState = state => state.auth.token;

export default authSlice.reducer;
