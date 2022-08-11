import { configureStore } from '@reduxjs/toolkit';

// reducers
import productsReducer from '../features/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
