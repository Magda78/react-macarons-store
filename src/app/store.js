import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import basketReducer from '../features/basketSlice';
import productsReducer from '../features/productsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer,
    products: productsReducer,

  },
});
