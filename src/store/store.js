import { configureStore } from '@reduxjs/toolkit';
import {
  adsSlice,
  authSlice,
  categoriesSlice,
  productsSlice,
  subCategoriesSlice,
} from './reducers';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ads: adsSlice,
    categories: categoriesSlice,
    subCategories: subCategoriesSlice,
    products: productsSlice,
  },
});
