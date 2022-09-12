import { configureStore } from '@reduxjs/toolkit';

// reducers
import cartReducer from '../features/cartSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
