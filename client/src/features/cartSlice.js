import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProducts: [],
    total: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.cartProducts.push(action.payload);
      state.total = state.total + action.payload.priceAmount;
    },
  },
});

export const { addProducts } = cartSlice.actions;

export default cartSlice.reducer;
