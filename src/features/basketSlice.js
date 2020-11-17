import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice ({
  name: 'basket',
  initialState: {
    basket: [],
    open: false,
    //quantity: 1
  },
  reducers: {
    setBasket: (state, action) => {
      const {id, price, url, title, quantity} = action.payload
      const isThere = state.basket.find(item => item.id === action.payload.id);
      

        if(!isThere) {
        state.basket.push({id, price, url, title, quantity: 1})
        } else {
          isThere.quantity++
        }
        
      },


    setOpen: (state) => {
      state.open = !state.open
    }
  }
})
export const { setBasket, setOpen } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export const selectOpen = (state) => state.basket.open;
export default basketSlice.reducer;