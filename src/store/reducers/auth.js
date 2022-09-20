import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: '',
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkAPI) => {
    return axios
      .post(
        'https://api-sponsa.worldproductsae.com/admin/login',
        user,
        thunkAPI
      )
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err.response.data);
        return err.response.data;
      });
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.token = null;
          state.isLoading = false;
          state.error = payload.message;
          state.isLoggedIn = false;
          return;
        }
        state.token = payload.token.token;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      }
    },
    [loginUser.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.token = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const getUserState = state => state.auth;

export default authSlice.reducer;

// rejected login
// {
//     "status": 0,
//     "message": "user not found"
// }

// this is fulfilled login response

// {
//     "status": 1,
//     "token": {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiMSIsInVzZXJJZCI6IjYzMjc0ZjUwNmFjNTAwOTE4ZDFhMTA1MCIsInN0YXR1cyI6MSwiaWF0IjoxNjYzNjc2MDY2LCJleHAiOjE2NjYyNjgwNjZ9.N8pVcFzFizLRv5WzCRlCfw75JR4DGv_DMdZrZBgXEl8",
//         "type": "1",
//         "userId": "63274f506ac500918d1a1050",
//         "exp": 2592000,
//         "status": 1
//     }
// }
