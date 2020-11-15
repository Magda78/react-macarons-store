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
    setOpen: (state, action) => {
      state.open = !state.open
    }
  }
})
export const { setBasket, setOpen } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export const selectOpen = (state) => state.basket.open;
export default basketSlice.reducer;