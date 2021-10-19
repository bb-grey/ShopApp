import {createSlice} from '@reduxjs/toolkit';
import PRODUCTS from '../../../data/dummy-data';

const initialState = {products: PRODUCTS};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.product);
    },
  },
});

export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer;
