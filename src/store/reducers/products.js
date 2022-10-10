import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import loadData from './loadData';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  thunkAPI => loadData(thunkAPI, 'product')
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [loadProducts.pending]: (state, action) => {
      state.products = [];
      state.isLoading = true;
      state.error = null;
    },
    [loadProducts.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      if (payload) {
        if (payload.status === 0) {
          state.products = [];
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
            images: obj.images,
            prices: obj.prices,
            // currentPrice: obj.prices[0].currentPrice,
            // discountPrice: obj.prices[0].discountPrice,

            hintText: obj.smallDescription.hintText,
            subText: obj.smallDescription.subText,
            headText: obj.smallDescription.headText,

            category: obj.catId,
            subcategory: obj.subcatId,
            size: obj.prices.map(price => price.size),
          };
        });

        state.products = data;
        state.isLoading = false;
        state.error = null;
      }
    },
    [loadProducts.rejected]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.products = null;
      state.error = action.payload;
    },
  },
});

export const getProducts = state => state.products;

export default productsSlice.reducer;

/*

{category
: 
{names: {…}, image: {…}, _id: '633078fc8dadd857244e558d', status: 1, createdAt: '2022-09-25T15:51:24.251Z', …}
headText
: 
{arabic: 'تيست عنوان رئيسي بالعربي', english: 'test english head text'}
hintText
: 
{arabic: 'تيست هينت', english: 'ttest hint text'}
id
: 
"6332e8f18dadd857244e5839"
images
: 
Array(1)
0
: 
{imageUrl: 'productImage/9edd350a-966f-494a-8ce0-625ce802fbcd.jpeg', _id: '6332e8f18dadd857244e583a'}
length
: 
1
[[Prototype]]
: 
Array(0)
imgAlt
: 
"my alt"
imgUrl
: 
"productImage/9edd350a-966f-494a-8ce0-625ce802fbcd.jpeg"
name
: 
{arabic: 'السم بالعربي', english: 'english name'}
position
: 
1
prices
: 
[{…}]
size
: 
['150 ml']
subText
: 
{arabic: 'تيست صاب تيكست', english: 'test sub text'}
subcategory
: 
{names: {…}, image: {…}, _id: '6332e8db8dadd857244e5835', categoriesId: '633078fc8dadd857244e558d', status: 0, …}

}
*/
