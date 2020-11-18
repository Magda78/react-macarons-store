import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice ({
  name: 'basket',
  initialState: {
    basket: [],
    open: false,
    total: 0
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

      setRemove: (state, action) => {
        const {id, price, url, title, quantity} = action.payload
        const isThere = state.basket.findIndex(item => item.id === action.payload.id);
        
          if(isThere != -1) {
          state.basket.splice(isThere,1)  
          }
        },

        setAddQuantity: (state, action) => {
          const {id, price, url, title, quantity} = action.payload
          const isThere = state.basket.find(item => item.id === action.payload.id);
          
    
            if(isThere) {
              isThere.quantity++
            }
          },

          setRemoveQuantity: (state, action) => {
            const {id, price, url, title, quantity} = action.payload
            const isThere = state.basket.find(item => item.id === action.payload.id);
            
  
              if(isThere) {
                isThere.quantity--
              }
            },

          setTotal : (state) => {
            let itemTotal = 0;
            state.total = 0;
            state.basket.map(item => {
              itemTotal = item.price * item.quantity;
              state.total += itemTotal;
              
            })
          },

    setOpen: (state) => {
      state.open = !state.open
    }
  }
})
export const { setBasket, setOpen, setRemove, setAddQuantity, setRemoveQuantity, setTotal } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export const selectOpen = (state) => state.basket.open;
export default basketSlice.reducer;