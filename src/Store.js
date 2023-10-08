import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '/src/Feature/Cart/CartSlice';
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});