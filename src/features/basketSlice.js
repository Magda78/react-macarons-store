import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice ({
  name: 'basket',
  initialState: {
    basket: [],
    open: false
  },
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload
    },
    setOpen: (state) => {
      state.open = false
    }
  }
})
export const { setBasket, setOpen } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export default basketSlice.reducer;