import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import basketSlice from '../features/basketSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer
  },
});
