import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth';
import adsSlice from './reducers/ads';
export const store = configureStore({
  reducer: {
    auth: authSlice,
    ads: adsSlice,
  },
});
