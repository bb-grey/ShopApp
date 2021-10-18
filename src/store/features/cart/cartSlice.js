import {createSlice} from '@reduxjs/toolkit';

// cartItem object be like: {productId: 'p1', quantity: 4}
const initialState = {cartItems: []};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.length === 0) {
        state.cartItems.push({
          productId: action.payload?.productId,
          quantity: action.payload.quantity,
        });
        return;
      }
      const isInCart = state.cartItems.findIndex(
        item => item?.productId === action.payload?.productId,
      );
      if (isInCart < 0) {
        state.cartItems.push({
          productId: action.payload?.productId,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state?.cartItems?.filter(
        item => item?.productId !== action.payload?.productId,
      );
    },
    incrementQuantity: (state, action) => {
      state.cartItems.find(
        item => item?.productId === action.payload?.productId,
      ).quantity += action.payload?.quantity;
    },
    decrementQuantity: (state, action) => {
      state.cartItems.find(
        item => item?.productId === action.payload?.productId,
      ).quantity -= action.payload?.quantity;
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
